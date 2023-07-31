import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { HYDRATE } from "next-redux-wrapper";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // set products
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = [...action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log("HYDRATE", action.payload);
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
