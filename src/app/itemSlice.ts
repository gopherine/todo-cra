import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const itemSlice = createSlice({
  name: "item",
  initialState: ["hello", "world"] as string[],
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      return [...state, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter((item: string) => item !== action.payload);
    },
  },
});

export const { addItem, removeItem } = itemSlice.actions;

export const todoList = (state: RootState) => state.todo;

export default itemSlice.reducer;
