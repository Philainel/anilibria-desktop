import { Axios } from "axios";

export type BaseModel<T> = {
    status: boolean,
    data: T,
    error?: any
}

export const anilibriaV1Axios = new Axios({
    baseURL: "https://corsproxy.io/?https://anilibria.tv/public/api/index.php"
})

export async function requestV1(query: { query: string, [k: string]: any }) {
    const body = new URLSearchParams(query)
    return anilibriaV1Axios.request({ method: 'POST', data: body.toString(), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
}