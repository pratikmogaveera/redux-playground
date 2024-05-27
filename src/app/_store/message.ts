import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface PayloadType {
    value: string
}

const messageSlice = createSlice({
    name: 'input',
    initialState: { value: "" },
    reducers: {
        setMessage: (state, action: PayloadAction<PayloadType>) => {
            state.value = action.payload.value
        },
        clearMessage: (state) => {
            state.value = ""
        }
    }
})

export default messageSlice.reducer
export const { setMessage, clearMessage } = messageSlice.actions