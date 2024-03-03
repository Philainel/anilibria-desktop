import { generateAPI } from ".";
import { TitleRandomRequestOptionsT, TitleT } from "./anilibria-types";


// export async function getRandomTitle(): Promise<TitleT> {
//     return JSON.parse((await ripplingRequest({url: "/title/random?playlist_type=array"})).data as string);
// }

export const getRandomTitle = generateAPI<TitleRandomRequestOptionsT, TitleT>("/title/random", { playlist_type: "array" }, {
    headers: {
        'Cache-Control': 'no-cache',
        // 'Pragma': 'no-cache', // fuck CORS
        // 'Expires': '0', // also fuck CORS
    },
});

(window as any).getRandomTitle = getRandomTitle;

export default getRandomTitle
