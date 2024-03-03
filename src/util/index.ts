export const IS_TAURI = (window as any).__TAURI__ != undefined
export const IS_PROD = import.meta.env.PROD
export const IS_DEV = import.meta.env.DEV

export function keepingDedup<T>(array: T[]): T[] {
    let res: T[] = []
    for(const el of array) {
        if(res.indexOf(el) < 0) {
            res.push(el)
        }
    }
    return res
}