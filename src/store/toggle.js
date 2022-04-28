import { createSlice } from "@reduxjs/toolkit";

export const toggle = createSlice({
  name: "toggle",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggler: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggler } = toggle.actions;
export default toggle.reducer;
