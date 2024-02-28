import { anilibriaV3Axios } from ".";
import { TitleT } from "./anilibria-types";

export type GetTitleOptions = {
    id?: number;
    code?: string,
    torrent_id?: number,
    filter?: string;
    remove?: string;
    include?: ("raw_poster" | "raw_torrent" | "torrent_meta")[];
    description_type?: "html" | "plain" | "no_view_order",
    // playlist_type?: "object" | "array" // anilibria types want array
}

export async function getTitle(
    // Options don't use anilibria type here because their request type kinda sucks?
    options: GetTitleOptions
): Promise<TitleT> {
    (options as any).playlist_type = "array"
    console.log("/title?"+new URLSearchParams(options as any).toString())
    return JSON.parse((await anilibriaV3Axios.get("/title?"+new URLSearchParams(options as any).toString())).data);
}

export default getTitle