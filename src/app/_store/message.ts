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
        }
    }
})

export default messageSlice.reducer
export const { setMessage } = messageSlice.actions