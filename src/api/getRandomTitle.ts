import { anilibriaAxios } from ".";
import { TitleT } from "./anilibria-types";


export async function getRandomTitle(): Promise<TitleT> {
    return JSON.parse((await anilibriaAxios.get("/title/random?playlist_type=array")).data);
}
