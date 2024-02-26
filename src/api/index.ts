
import { Axios } from "axios"

const axios = new Axios({
    baseURL: "https://api.anilibria.tv/v3/"
})

export async function getRandomTitle() {
    const response = JSON.parse((await axios.get("/title/random")).data)
    const link = `https://${response.player.host}/${response.player.list["1"].hls.hd}`
    console.log(link)
    return link
}
