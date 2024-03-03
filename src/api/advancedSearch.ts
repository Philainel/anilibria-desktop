import { generateAPI, ripplingRequest } from ".";
import { TitleSearchAdvancedRequestOptionsT, TitleSearchRequestOptionsT, TitlesDataT } from "./anilibria-types";

// export async function search(options: TitleSearchRequestOptionsT): Promise<TitlesDataT> {
//     return (JSON.parse((await ripplingRequest({url: "/title/search?" + new URLSearchParams(options as any).toString()})).data as string))
// }

export const advancedSearch = generateAPI<TitleSearchAdvancedRequestOptionsT, TitlesDataT>("/title/search/advanced", { playlist_type: "array" })
export default advancedSearch