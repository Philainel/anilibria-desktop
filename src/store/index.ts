import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import watchProgress from "./slice/watchProgress";
import notifications from "./slice/notifications";

export const store = configureStore({ reducer: { watchProgress, notifications }, preloadedState: window.localStorage.getItem("saved") != null ? JSON.parse(window.localStorage.getItem("saved")!) as unknown : undefined})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function saveState() {
    window.localStorage.setItem("saved", JSON.stringify(store.getState()))
}