import { TitleT } from "../api/anilibria-types"
import { playerListT, playerT } from "../api/anilibria-types/TitleT"
import { TypedEventTarget } from "../util/events"

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

export type WSUpdate = WSTitleUpdate | WSPlaylistUpdate

function isWSUpdate(json: any): json is WSUpdate {
    return json["type"] != undefined
}

export class AnilibriaWS extends (EventTarget as TypedEventTarget<{
    "playlist_update": CustomEvent<WSPlaylistUpdate>
}>) {
    private ws: WebSocket
    constructor(public url: string) {
        super()
        this.ws = new WebSocket(url)
        this.ws.addEventListener('message', this.onMessage)
    }
    onMessage(this: WebSocket, ev: MessageEvent) {
        const json = JSON.parse(ev.data)
        if (isWSUpdate(json)) {
            switch (json.type) {
                case "playlist_update":
                    {
                        this.dispatchEvent(new CustomEvent("playlist_update", { detail: json as WSPlaylistUpdate }))
                        break
                    }
            }
        }
    }
}