import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await res.json();
    return data.map((d) => (
        {
            id: d.id,
            items: d.title
        }
    ))
})


const todoSlice = createSlice({
    name: "ToDoApp",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
