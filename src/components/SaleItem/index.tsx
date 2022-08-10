import { moneyVND, thousandNumComma } from "helpers/money";
import React from "react";
import styled from "styled-components";
import { TProduct } from "types";
import { GrCart } from "react-icons/gr";
import { AiOutlineHeart, AiOutlineUndo } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";

type Props = {
  product: TProduct;
};

const SaleItem = ({ product }: Props) => {
  return (
    <SSaleItem>
      <div className="product-img">
        <img src={product.img} alt="" />
        <button className="add">ADD TO CART</button>
      </div>
      <div className="product-bottom">
        <div className="product-info">
          <h3 className="name">{product.name}</h3>
          <p className="price">{moneyVND(thousandNumComma(product.price))}</p>
        </div>
      </div>
    </SSaleItem>
  );
};

export default SaleItem;

const SSaleItem = styled.div`
  cursor: pointer;
  .product-img {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    img {
      max-width: 100%;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: transparent;
      transform: scale(0);
      transition: all 0.4s linear;
      transform-origin: center;
      z-index: 2;
    }
    .add {
      width: 120px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: #33cccc;
      position: absolute;
      left: 50%;
      transform-origin: center;
      transform: translateX(-50%) scale(0);
      bottom: 20px;

      transition: all 0.3s linear;
      z-index: 3;
      cursor: pointer;
    }
  }
  .product-bottom {
    margin-top: 10px;
    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        margin-bottom: 10px;
        color: #434343;
        font-size: 15px;
      }
      .price {
        color: red;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
  &:hover {
    .product-img {
      &::after {
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(1);
      }
      .add {
        transform: translateX(-50%) scale(1);
      }
    }
  }
`;
