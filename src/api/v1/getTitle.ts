import { BaseModel, requestV1 } from "."

type Title = {
    id?: number,
    code?: string,
    names?: string[],
    series?: string,
    poster?: string,
    favourite?: { rating: number, added: boolean },
    last?: string,
    moon?: string,
    status?: string,
    type?: string,
    genres?: string[],
    voices?: string[],
    year?: string,
    day?: string,
    description?: string,
    blockedInfo?: {
        blocked: boolean,
        reason?: string
    },
    playlist?: {id: number, title: string, sd: string, hd: string, fullhd?: string, srcSd?: string, srcHd?: string}[],
    torrents?: {id: number, hash: string, leechers: number, seeders: number, completed: number, quality: string, series: string, size: number, url: string}[]
}

export async function getTitle(opts: {id?: number | string, code?: string, filter?: string, rm?: string, page?: string | number, perPage?: string | number}): Promise<BaseModel<Title>> {
    return JSON.parse((await requestV1({...opts, query: 'release'})).data)
}

export default getTitle