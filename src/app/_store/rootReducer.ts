import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import counterSlice from './counter';
import messageSlice from './message';
import modalSlice from './modal';
import persistConfig from "./persistConfig";
import themeSlice from './theme';
import todoSlice from './todo';

const rootReducer = combineReducers({
    counterSlice,
    messageSlice,
    todoSlice,
    themeSlice,
    modalSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer

