import { createSlice } from "@reduxjs/toolkit";
//import { buildErrorMessage } from "vite";
import { fetchTodos } from "./taskOps";

const initialState = {
  items: [],
  searchStr: "",
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    changeSearch: (state, action) => {
      state.searchStr = action.payload;
    },
    toggleTask: (state, action) => {
      // state.items = state.items.map((item) =>
      //   item.id === action.payload
      //     ? { ...item, completed: !item.completed }
      //     : item
      // );
      // const item = state.items.find(item => item.id === action.payload);
      // item.completed = !item.completed;
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[itemIndex].completed = !state.items[itemIndex].completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const selectTasks = (state) => state.tasks.items;
export const selectSearchStr = (state) => state.tasks.searchStr;

export const tasksReducer = slice.reducer;
export const {
  deleteTask,
  addTodo,
  changeSearch,
  toggleTask,
  fetchDataSuccess,
  setIsLoading,
  setError,
} = slice.actions;
