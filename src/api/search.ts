import { generateAPI, ripplingRequest } from ".";
import { TitleSearchRequestOptionsT, TitlesDataT } from "./anilibria-types";

// export async function search(options: TitleSearchRequestOptionsT): Promise<TitlesDataT> {
//     return (JSON.parse((await ripplingRequest({url: "/title/search?" + new URLSearchParams(options as any).toString()})).data as string))
// }

const search = generateAPI<TitleSearchRequestOptionsT, TitlesDataT>("/title/search", { playlist_type: "array" })