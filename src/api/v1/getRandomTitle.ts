import { BaseModel, requestV1 } from ".";

type RandomReleaseModel = {code: string}

export async function getRandomTitle(): Promise<BaseModel<RandomReleaseModel>> {
    return JSON.parse((await requestV1({query: 'random_release'})).data)
}

export default getRandomTitle