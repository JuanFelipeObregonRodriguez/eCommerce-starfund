import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { HYDRATE } from "next-redux-wrapper";
import { Product, ProductState } from "../../interfaces";


const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = [...action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      };
    },
  },
});

export const selectProducts = (state: RootState) => state.product.products;

export const { setProducts } = productSlice.actions;


export default productSlice.reducer;
