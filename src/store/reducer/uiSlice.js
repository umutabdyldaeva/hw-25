import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spinner: false,
  profile: false,
  data: [],
};


export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {

    toggle(state) {
      state.spinner = !state.spinner;
    },
    profile(state) {
      state.profile = !state.profile;
    },
    data(state, action) {
    let newData = action.payload;

    }
  }
});

export const uiAction = uiSlice.actions;
export default uiSlice;
