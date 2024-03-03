import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'
import { keepingDedup } from '../../util'

type Notification = {
    type: 'new_release',
    notification_id: string,
    title_code: string,
}

interface NotificationsState {
    notifications: Notification[]
}

const initialState: NotificationsState = {
    notifications: []
}

export const notificationsSlice = createSlice({
    name: 'watchProgress',
    initialState,
    reducers: {
        pushNewRelease(state, action: PayloadAction<string>) {
            state.notifications = [{ type: "new_release", notification_id: (Math.random() * 10000).toString(16), title_code: action.payload }]
            state.notifications.length = Math.min(state.notifications.length, 5)
        }
    },
})

export const { pushNewRelease } = notificationsSlice.actions

export default notificationsSlice.reducer