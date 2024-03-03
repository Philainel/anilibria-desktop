
import { Axios, AxiosRequestConfig, AxiosResponse } from "axios"
import { TitleT } from "./anilibria-types"
import { playerListT } from "./anilibria-types/TitleT"

// TODO: pluggable http middleware - like Rust reqwests or like axios here
// QUESTION: should we even have this?
export const anilibriaAxios = new Axios({
    baseURL: "https://api.anilibria.tv/v3/"
})

// TODO: more mirrors
const mirrors = ["https://api.anilibria.tv/v3/", "https://wwnd.anilib.moe/api/v3"]

export async function ripplingRequest<T, D, R>(c: AxiosRequestConfig<T>): Promise<AxiosResponse<D, R>> {
    for (const mirror of mirrors) {
        try {
            const response = await anilibriaAxios.request({ ...c, baseURL: mirror })
            // /*console.log("response:")*/
            // /*console.log(response)*/
            return response
        } catch (e) {
            console.error(`Something went wrong while requesting mirror ${mirror}:`)
            console.error(e)
        }
    }
    throw Error('Failed to request - all mirrors are down?')
}

export function generateAPI<T extends Record<string, any>, R extends Record<string, any>>(route: string, overrideReq?: T, overrideOpts?: AxiosRequestConfig): (request: T, opts?: AxiosRequestConfig) => Promise<R> {
    return async (request, opts) => JSON.parse((await ripplingRequest({ ...opts, ...overrideOpts, url: route + "?" + new URLSearchParams({ ...request, ...overrideReq }).toString() })).data as string);
}

export function getTitleHLS(title: TitleT, episode: playerListT, quality: "fhd" | "hd" | "sd") {
    return `https://${title.player.host}${episode.hls[quality]}`
}