import { moneyVND, thousandNumComma } from "helpers/money";
import React from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "redux/hook";
import styled from "styled-components";
import { handleAddToCart, homeSelector } from "../store";

const DetailProduct = () => {
  const { productDetail } = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();
  if (!productDetail) return <></>;

  return (
    <SDetailProduct>
      <div className="left">
        <img src={productDetail.img} alt="" />
      </div>
      <div className="right">
        <div className="name">{productDetail.name}</div>
        <div className="price">
          {moneyVND(thousandNumComma(productDetail.price))}
        </div>
        <button
          className="button"
          onClick={() => {
            dispatch(handleAddToCart(productDetail));
            toast.success("Add to cart succesfully");
          }}
        >
          ADD TO CART
        </button>
      </div>
    </SDetailProduct>
  );
};

export default DetailProduct;

const SDetailProduct = styled.div`
  display: flex;
  .left {
    img {
      width: 200px;
      margin: 0 auto;
      display: block;
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  .right {
    margin-left: 30px;
    .name {
      font-size: 16px;
      margin: 10px 0;
      color: black;
    }
    .price {
      color: red;
      font-size: 15px;
      font-weight: 800;
    }
    .button {
      width: 120px;
      height: 40px;
      margin-top: 30px;
      cursor: pointer;
      display: block;
    }
  }
`;
