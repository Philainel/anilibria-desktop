import { TitleT } from "../api/anilibria-types"
import { playerListT, playerT } from "../api/anilibria-types/TitleT"

export type WSTitleUpdate = {
    type: "title_update",
    data: {
        title: TitleT,
        diff: Partial<TitleT>
    }
}

export type WSPlaylistUpdate = {
    type: "playlist_update",
    data: {
        id: number,
        player: playerT,
        updated_episode: playerListT,
        episode: string,
        diff: any,
        reupload: boolean
    }
}

export type WSEncodingFinished = {
    type: "encode_finish"
    data: { id: string, episode: string }
}

export type WSUpdate = WSTitleUpdate | WSPlaylistUpdate | WSEncodingFinished

function isWSUpdate(json: any): json is WSUpdate {
    return json["type"] != undefined
}

interface AnilibriaWSEventMap {
    'playlist_update': WSPlaylistUpdate
    'encode_finish': WSEncodingFinished
}

export class AnilibriaWS {
    private ws: WebSocket
    private eventSubscribers: { [k in keyof AnilibriaWSEventMap]: ((d: AnilibriaWSEventMap[k]) => void)[] } = { 'playlist_update': [], 'encode_finish': [] }
    constructor(public url: string) {
        this.ws = new WebSocket(url)
        this.ws.addEventListener('message', (e) => this.onMessage(e))
    }
    onMessage(ev: MessageEvent) {
        console.log(ev)
        const json = JSON.parse(ev.data)
        console.log(json)
        if (isWSUpdate(json)) {
            switch (json.type) {
                case "playlist_update":
                    {
                        console.log("owo playlist update, dispatching crew")
                        this.dispatch("playlist_update", json)
                        break
                    }
                case "encode_finish":
                    {
                        this.dispatch("encode_finish", json)
                        break
                    }
            }
        }
    }
    subscribe<T extends keyof AnilibriaWSEventMap>(ev_type: T, handle: (d: AnilibriaWSEventMap[T]) => void) {
        this.eventSubscribers[ev_type].push(handle)
    }
    unsubscribe<T extends keyof AnilibriaWSEventMap>(ev_type: T, handle: (d: AnilibriaWSEventMap[T]) => void) {
        this.eventSubscribers[ev_type].splice(this.eventSubscribers[ev_type].indexOf(handle))
    }
    dispatch<T extends keyof AnilibriaWSEventMap>(ev_type: T, d: AnilibriaWSEventMap[T]) {
        this.eventSubscribers[ev_type].forEach(it => it(d))
    }
}