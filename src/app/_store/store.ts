import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import counterSlice from "./counter";
import messageSlice from "./message";
import todoSlice from "./todo";
import themeSlice from "./theme"

export const store = configureStore({
    reducer: {
        counterSlice,
        messageSlice,
        todoSlice,
        themeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector