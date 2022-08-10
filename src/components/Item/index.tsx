import { moneyVND, thousandNumComma } from "helpers/money";
import React from "react";
import styled from "styled-components";
import { TProduct } from "types";

type Props = {
  product: TProduct;
};

const Item = ({ product }: Props) => {
  return (
    <SItem>
      <div className="product-img">
        <img src={product.img} alt="" />
      </div>
      <div className="product-bottom">
        <div className="product-info">
          <h3 className="name">{product.name}</h3>
          <p className="price">{moneyVND(thousandNumComma(product.price))}</p>
        </div>
      </div>
    </SItem>
  );
};

export default Item;

const SItem = styled.div`
  .product-img {
    img {
      max-width: 100%;
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
`;
