import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/reducer/todoSlice";
import calReducer from "@/reducer/calSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    cal: calReducer,
  },
});
