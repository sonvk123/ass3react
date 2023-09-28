import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    ON_LOGIN: (state) => {
      return (state = true);
    },
    ON_LOGOUT: (state) => {
      return (state = false);
    },
  },
});
 