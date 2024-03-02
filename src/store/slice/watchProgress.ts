import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface WatchProgressState {
  value: {[k: string]: {lastEp: number, progress: {[k: number]: number}, completedEps: number[]}}
}

const initialState: WatchProgressState = {
  value: {},
}

export const watchProgressSlice = createSlice({
  name: 'watchProgress',
  initialState,
  reducers: {
    completeEp(state, action: PayloadAction<{code: string, ep: number}>) {
        state.value[action.payload.code] = state.value[action.payload.code] ?? {}
        state.value[action.payload.code].completedEps = [...new Set([...state.value[action.payload.code].completedEps, action.payload.ep])] 
        state.value[action.payload.code].lastEp = action.payload.ep + 1
        state.value[action.payload.code].progress = state.value[action.payload.code].progress ?? {}
        state.value[action.payload.code].progress[action.payload.ep + 1] = 0
    },
    saveEp(state, action: PayloadAction<{code: string, ep: number, progress: number}>) {
        state.value[action.payload.code] = state.value[action.payload.code] ?? {}
        state.value[action.payload.code].lastEp = action.payload.ep
        state.value[action.payload.code].progress = state.value[action.payload.code].progress ?? {}
        state.value[action.payload.code].progress[action.payload.ep] = action.payload.progress
        console.log(state)
    }
  },
})

export const { completeEp, saveEp } = watchProgressSlice.actions

// export const selectCount = (state: RootState) => state.counter.value
export const getEpisodeProgress = (code: string, ep: number) => (state: RootState) => state.watchProgress.value[code].progress[ep]
export const getTitleProgress = (code: string) => (state: RootState) => state.watchProgress.value[code]?.lastEp

export default watchProgressSlice.reducer