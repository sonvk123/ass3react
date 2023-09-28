import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "modol",
  initialState: {
    data_modol: {},
    isShow: false,
  },
  reducers: {
    SHOW_POPUP: (state, action) => {
      state.data_modol = action.payload;
      state.isShow = true;
    },
    HIDE_POPUP: (state) => {
      state.isShow = false;
      state.data_modol = {};
    },
  },
});
