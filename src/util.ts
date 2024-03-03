export const IS_TAURI = (window as any).__TAURI__ != undefined
export const IS_PROD = import.meta.env.PROD
export const IS_DEV = import.meta.env.DEV