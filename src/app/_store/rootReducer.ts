import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistConfig from "./persistConfig";

import counterReducer from './counter'
import messageReducer from './message'
import todoReducer from './todo'
import themeReducer from './theme'

const rootReducer = combineReducers({
    counterSlice: counterReducer,
    messageSlice: messageReducer,
    todoSlice: todoReducer,
    themeSlice: themeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer

