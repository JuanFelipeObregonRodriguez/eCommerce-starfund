import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../interfaces";


const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const itemInCart = state.items.find((i) => i.id === item.id);

      if (itemInCart) return;

      state.items.push(item);
      state.total += item.price;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total = state.items.reduce((acc, item) => acc + item.price, 0);
    },


    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
