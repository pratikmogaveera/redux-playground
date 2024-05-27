import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark" | "system"
interface ThemePayload { theme: Theme }

const initialState: { theme: Theme } = {
    theme: "dark"
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemePayload>) => {
            state.theme = action.payload.theme
        }
    }
})

export default themeSlice.reducer
export const { setTheme } = themeSlice.actions