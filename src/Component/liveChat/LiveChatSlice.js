import { createSlice } from "@reduxjs/toolkit";

export const LiveChatSlice = createSlice({
  name: "liveChat",
  initialState: false,
  reducers: {
    isShow: (state) => {
      return !state;
    },
  },
});

