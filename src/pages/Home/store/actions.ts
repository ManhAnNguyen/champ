import { createAction } from "@reduxjs/toolkit";
import { TProduct } from "types";

export const handleDetailProduct = createAction<null | TProduct>(
  "home/DETAIL_PRODUCT"
);

export const handleAddToCart = createAction<TProduct>("home/ADD_CART");
export const handleDeleteCart = createAction<string>("home/DELETE_CART");
export const handleDeleteAllCart = createAction("home/DELETE_ALL_CART");
export const handleIncreaseCart = createAction<string>("home/INCREASE_CART");
export const handleDecreaseCart = createAction<string>("home/DECREASE_CART");

export const handleActionWishList = createAction<TProduct>(
  "home/ACTION_WISHLIST"
);
