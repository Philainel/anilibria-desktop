import { TitleT } from "../v3/anilibria-types";
import { GetTitleOptions, getTitle as getTitleV3 } from "../v3/getTitle";
import getTitleV1 from '../v1/getTitle'
import { RecursivePartial } from "../../util";
import { anilibriaV1Axios, hosts } from "../v1";
import { playerListT } from "../v3/anilibria-types/TitleT";
/**
 * get title by id or code
 * @param options request options
 * @returns title information - if v3 is resolved it is full, and if v1 is resolved only really neccessary information is includedd
 */
export async function getTitle(
    options: GetTitleOptions
): Promise<RecursivePartial<TitleT>> {
    try {
        const v3 = getTitleV3(options)
        return v3
    } catch (e) {
        // insert kurt angle meme
        const v1 = await getTitleV1({ code: options.code, id: options.id, filter: options.filter, rm: options.remove })
        return {
            code: v1.data.code!,
            id: v1.data.id!,
            player: {
                host: hosts[0],
                episodes: {
                    string: v1.data.series
                },
                list: [...v1.data.playlist!.map((p, i): RecursivePartial<playerListT> => ({ episode: i + 1, hls: { fhd: p.fullhd, hd: p.hd, sd: p.sd }, name: p.title }))]
            }
        }
    }
}