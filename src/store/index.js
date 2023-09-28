import { configureStore } from "@reduxjs/toolkit";


import homeSlice from "../Component/Home/homeSlice";
import { LoginSlice } from "../Component/Login/LoginSlice";
import { CartSlice } from "../Component/Cart/CartSlice";
import { LiveChatSlice } from "../Component/liveChat/LiveChatSlice";

const store = configureStore({
  reducer: {
    homeModol: homeSlice.reducer,
    login: LoginSlice.reducer,
    cart: CartSlice.reducer,
    liveChat: LiveChatSlice.reducer,
  },
});

export default store;
