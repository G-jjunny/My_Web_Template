import { configureStore } from "@reduxjs/toolkit";
import selectedItemReducer from "./selectedItemSlice";
const store = configureStore({
  reducer: {
    selectedItem: selectedItemReducer, // Slice reducer를 추가
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
