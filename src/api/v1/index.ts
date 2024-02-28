import { Axios } from "axios";

export type BaseModel<T> = {
    status: boolean,
    data: T,
    error?: any
}
export const hosts = ["https://corsproxy.io/?https://anilibria.tv/", "https://corsproxy.io/?https://wwnd.anilib.moe/"]
export const anilibriaV1Axios = new Axios()

export async function requestV1(query: { query: string, [k: string]: any }) {
    const body = new URLSearchParams(query)
    // TODO: fallback to other hosts
    return anilibriaV1Axios.request({ url: hosts[0], method: 'POST', data: body.toString(), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
}