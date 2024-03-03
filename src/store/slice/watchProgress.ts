import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'
import { keepingDedup } from '../../util'

interface WatchProgressState {
  titlesProgress: {[k: string]: {lastEp: number, progress: {[k: number]: number}, completedEps: number[]}},
  latestViewed: string[]
}

const initialState: WatchProgressState = {
  titlesProgress: {},
  latestViewed: []
}

export const watchProgressSlice = createSlice({
  name: 'watchProgress',
  initialState,
  reducers: {
    completeEp(state, action: PayloadAction<{code: string, ep: number}>) {
        state.titlesProgress[action.payload.code] = state.titlesProgress[action.payload.code] ?? {}
        state.titlesProgress[action.payload.code].completedEps = [...new Set([...state.titlesProgress[action.payload.code].completedEps, action.payload.ep])] 
        state.titlesProgress[action.payload.code].lastEp = action.payload.ep + 1
        state.titlesProgress[action.payload.code].progress = state.titlesProgress[action.payload.code].progress ?? {}
        state.titlesProgress[action.payload.code].progress[action.payload.ep + 1] = 0
    },
    saveEp(state, action: PayloadAction<{code: string, ep: number, progress: number}>) {
        state.titlesProgress[action.payload.code] = state.titlesProgress[action.payload.code] ?? {}
        state.titlesProgress[action.payload.code].lastEp = action.payload.ep
        state.titlesProgress[action.payload.code].progress = state.titlesProgress[action.payload.code].progress ?? {}
        state.titlesProgress[action.payload.code].progress[action.payload.ep] = action.payload.progress
        state.latestViewed = keepingDedup([action.payload.code, ...state.latestViewed])
        /*console.log(state)*/
    }
  },
})

export const { completeEp, saveEp } = watchProgressSlice.actions

// export const selectCount = (state: RootState) => state.counter.value
export const getEpisodeProgress = (code: string, ep: number) => (state: RootState) => state.watchProgress.titlesProgress[code]?.progress[ep] ?? 0
export const getTitleProgress = (code: string) => (state: RootState) => state.watchProgress.titlesProgress[code]?.lastEp ?? -1
export const getUnfinished = (state: RootState) => Object.entries(state.watchProgress.titlesProgress).filter(([, it]) => it.progress[it.lastEp] > 0)
export const getLatestViewed = (state: RootState) => state.watchProgress.latestViewed

export default watchProgressSlice.reducer