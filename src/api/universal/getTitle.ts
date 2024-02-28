import { TitleT } from "../v3/anilibria-types";
import { GetTitleOptions, getTitle as getTitleV3 } from "../v3/getTitle";
import getTitleV1 from '../v1/getTitle'
export async function getTitle(
    // Options don't use anilibria type here because their request type kinda sucks?
    options: GetTitleOptions
): Promise<TitleT> {
    try {
        const v3 = getTitleV3(options)
        return v3
    } catch(e) {
        const v1 = await getTitleV1({code: options.code, id: options.id, filter: options.filter, rm: options.remove})
        return {
            code: v1.data.code!,
            id: v1.data.id!,
            description: {html: v1.data.description!, plain: v1.data.description!, no_view_order: v1.data.description!},

            blocked: {blocked: v1.data.blockedInfo?.blocked ?? false, bakanim: v1.data.blockedInfo?.blocked ?? false}
        }
    }
}