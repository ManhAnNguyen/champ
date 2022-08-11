import { TProduct } from "types";

export type THomeStore = {
  productDetail: TProduct | null;
  carts: (TProduct & { amount: number })[];
};
