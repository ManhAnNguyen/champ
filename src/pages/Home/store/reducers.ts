import { createReducer } from "@reduxjs/toolkit";
import { handleDetailProduct } from "./actions";
import { THomeStore } from "./types";

const initialState: THomeStore = {
  productDetail: null,
};

export const homeReducer = createReducer(initialState, (builder) => {
  builder.addCase(handleDetailProduct, (state, action) => {
    state.productDetail = action.payload;
  });
});
