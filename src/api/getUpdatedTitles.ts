import { generateAPI } from "."
import { TitleUpdateRequestOptionsT, TitlesDataT } from "./anilibria-types"

export const getUpdatedTitles = generateAPI<TitleUpdateRequestOptionsT, TitlesDataT>("/title/updates", { playlist_type: "array" })
export default getUpdatedTitles