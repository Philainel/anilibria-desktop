
import { Axios } from "axios"
import { TitleT } from "./anilibria-types"
import { playerListT } from "./anilibria-types/TitleT"

// TODO: pluggable http middleware - like Rust reqwests or like axios here
export const anilibriaV3Axios = new Axios({
    baseURL: "https://wwnd.anilib.moe/api/v3/"
})

export function getTitleHLS(title: TitleT, episode: playerListT, quality: "fhd" | "hd" | "sd") {
    return `https://${title.player.host}${episode.hls[quality]}`
}