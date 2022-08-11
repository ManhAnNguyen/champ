import { createReducer } from "@reduxjs/toolkit";
import {
  handleAddToCart,
  handleDecreaseCart,
  handleDeleteAllCart,
  handleDeleteCart,
  handleDetailProduct,
  handleIncreaseCart,
} from "./actions";
import { THomeStore } from "./types";

const initialState: THomeStore = {
  productDetail: null,
  carts: [],
};

export const homeReducer = createReducer(initialState, (builder) => {
  builder.addCase(handleDetailProduct, (state, action) => {
    state.productDetail = action.payload;
  });

  builder.addCase(handleAddToCart, (state, action) => {
    const existing = state.carts.find(
      (product) => product.id === action.payload.id
    );
    if (!!existing) {
      state.carts = state.carts.map((product) =>
        product.id === existing.id
          ? { ...product, amount: product.amount + 1 }
          : product
      );
    } else {
      state.carts = [...state.carts, { ...action.payload, amount: 1 }];
    }
  });

  builder.addCase(handleIncreaseCart, (state, action) => {
    state.carts = state.carts.map((cart) =>
      cart.id === action.payload ? { ...cart, amount: cart.amount + 1 } : cart
    );
  });
  builder.addCase(handleDecreaseCart, (state, action) => {
    state.carts = state.carts.map((cart) =>
      cart.id === action.payload
        ? { ...cart, amount: cart.amount === 1 ? 1 : cart.amount - 1 }
        : cart
    );
  });

  builder.addCase(handleDeleteCart, (state, action) => {
    state.carts = state.carts.filter((cart) => cart.id !== action.payload);
  });
  builder.addCase(handleDeleteAllCart, (state, action) => {
    state.carts = [];
  });
});
