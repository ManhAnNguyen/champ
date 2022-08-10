import { createAction } from "@reduxjs/toolkit";
import { TProduct } from "types";

export const handleDetailProduct = createAction<null | TProduct>(
  "home/DETAIL_PRODUCT"
);
