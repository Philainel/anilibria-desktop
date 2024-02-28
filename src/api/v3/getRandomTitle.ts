import { anilibriaV3Axios } from ".";
import { TitleT } from "./anilibria-types";


export async function getRandomTitle(): Promise<TitleT> {
    return JSON.parse((await anilibriaV3Axios.get("/title/random?playlist_type=array")).data);
}

export default getRandomTitle