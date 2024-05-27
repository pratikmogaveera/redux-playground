import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1
        },

        clear: (state) => {
            state.count = 0
        }


    }
})

export default counterSlice.reducer
export const { increment, clear } = counterSlice.actions