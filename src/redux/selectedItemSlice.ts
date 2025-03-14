import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import sampleTypes from "../pages/collection/sampleTypes";

interface SelectedItemState {
  selectedItem: sampleTypes | null;
}

const initialState: SelectedItemState = {
  selectedItem: null,
};

const selectedItemSlice = createSlice({
  name: "SelectedItem",
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<sampleTypes>) => {
      state.selectedItem = action.payload;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
  },
});

export const { setSelectedItem, clearSelectedItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;
