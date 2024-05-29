import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistConfig from "./persistConfig";
import counterSlice from './counter';
import messageSlice from './message';
import themeSlice from './theme';
import todoSlice from './todo';

const rootReducer = combineReducers({
    counterSlice,
    messageSlice,
    todoSlice,
    themeSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer

