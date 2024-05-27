import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import counterSlice from "./counter";
import messageSlice from "./message";
import todoSlice from "./todo";
import themeSlice from "./theme"
import persistedReducer from "./rootReducer";
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector