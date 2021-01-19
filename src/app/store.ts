import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";

export const store = configureStore({
  reducer: {
    todo: itemSlice,
  },
});

//type definition for state, dispatcher
export type RootState = ReturnType<typeof store.getState>;
