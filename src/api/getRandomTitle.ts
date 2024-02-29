import { ripplingRequest } from ".";
import { TitleT } from "./anilibria-types";


export async function getRandomTitle(): Promise<TitleT> {
    return JSON.parse((await ripplingRequest({url: "/title/random?playlist_type=array"})).data as string);
}
