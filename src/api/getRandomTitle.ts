import { generateAPI } from ".";
import { TitleRandomRequestOptionsT, TitleT } from "./anilibria-types";


// export async function getRandomTitle(): Promise<TitleT> {
//     return JSON.parse((await ripplingRequest({url: "/title/random?playlist_type=array"})).data as string);
// }

export const getRandomTitle = generateAPI<TitleRandomRequestOptionsT, TitleT>("/title/random", { playlist_type: "array" })
export default getRandomTitle