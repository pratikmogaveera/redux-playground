import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from 'axios';

interface Todo {
    id: number,
    userId: number,
    title: string,
    completed: boolean
}

interface FetchState {
    data: Todo | null,
    pending: boolean,
    error: string | null
}

const initialState: FetchState = {
    data: null,
    pending: false,
    error: null
}

interface FetchDataArg {
    id: number
}

export const fetchData = createAsyncThunk<Todo, FetchDataArg>(
    'todos/fetchData',
    async ({ id }, { rejectWithValue }) => {
        try {
            // Simulating Delay
            const start = performance.now()
            const response = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const end = performance.now()

            await new Promise(resolve => setTimeout(resolve, 1000 - (end - start)));
            response.data.completed = false
            return response.data;
        } catch (err: unknown) {
            let errorMessage = 'Something went wrong';

            if (err instanceof AxiosError && err.response) {
                // Axios-specific error
                errorMessage = err.response.data || errorMessage;
            } else if (err instanceof Error) {
                // General error
                errorMessage = err.message;
            }

            return rejectWithValue(errorMessage);
        }
    }
);

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        clearTodo: (state) => {
            state.data = null
            state.pending = false
            state.error = null
        },
        toggleTodo: (state) => {
            if (state.data) {
                state.data.completed = !state.data.completed
            }
            else
                return state
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.data = null
                state.pending = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<Todo>) => {
                state.pending = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action: PayloadAction<any>) => {
                state.pending = false;
                state.error = action.payload as string;
            });
    }
});

export default todoSlice.reducer
export const { clearTodo, toggleTodo } = todoSlice.actions