import { generateAPI } from ".";
import { TitleRequestOptionsT, TitleScheduleRequestOptionsT, TitleT, TitlesT } from "./anilibria-types";

// export async function getTitle(
//     options: TitleRequestOptionsT
// ): Promise<TitleT> {
//     (options as any).playlist_type = "array"
//     /*console.log("/title?" + new URLSearchParams(options as any).toString())*/
//     return JSON.parse((await ripplingRequest({url: "/title?" + new URLSearchParams(options as any).toString()})).data as string);
// }

export const getSchedule = generateAPI<TitleScheduleRequestOptionsT, {day: number, list: TitlesT}[]>("/title/schedule", { playlist_type: "array" })
export default getSchedule