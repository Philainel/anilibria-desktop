import getRandomTitleV3 from "../v3/getRandomTitle"
import getRandomTitleV1 from "../v1/getRandomTitle"
export async function getRandomTitle(): Promise<string> {
    try {
        const v3 = await getRandomTitleV3()
        return v3.code
    } catch(e) {
        const v1 = await getRandomTitleV1()
        return v1.data.code
    }
}