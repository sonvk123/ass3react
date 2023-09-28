import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    ADD_CART: (state, action) => {
      state.push(action.payload);
    },
    CLEAR_CART: () => [], // Trả về một mảng rỗng để xóa dữ liệu trong giỏ hàng
    UPDATE_CART: (state, action) => {
      if (action.payload.act === "up") {
        for (const data of state) {
          if (data.id === action.payload.id) {
            data.quantity = parseInt(data.quantity) + 1;
          }
        }
      } else if (action.payload.act === "down") {
        for (const data of state) {
          if (data.id === action.payload.id) {
            if (data.quantity > 0) {
              data.quantity = parseInt(data.quantity) - 1;
            }
          }
        }
      }
    },
    DELETE_CART: (state, action) => {
      return state.filter((value) => value.id !== action.payload);
    },
  },
});
