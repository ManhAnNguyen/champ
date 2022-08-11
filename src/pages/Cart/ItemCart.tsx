import { moneyVND, thousandNumComma } from "helpers/money";
import React from "react";
import styled from "styled-components";
import { TProduct } from "types";
import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "redux/hook";
import {
  handleDecreaseCart,
  handleDeleteCart,
  handleIncreaseCart,
} from "pages/Home/store";

const ItemCart = ({ cart }: { cart: TProduct & { amount: number } }) => {
  const dispatch = useAppDispatch();
  return (
    <SItem>
      <div className="item-left">
        <div className="img">
          <img src={cart.img} alt="" />
        </div>
        <div className="info">
          <h3 className="name">{cart.name}</h3>
          <h4 className="price">{moneyVND(thousandNumComma(cart.price))}</h4>
        </div>
      </div>
      <div className="item-center">
        <button
          className="decrease"
          onClick={() => dispatch(handleDecreaseCart(cart.id))}
        >
          -
        </button>
        <span className="amount">{cart.amount}</span>
        <button
          className="increase"
          onClick={() => dispatch(handleIncreaseCart(cart.id))}
        >
          +
        </button>
      </div>
      <div className="item-right">
        <AiFillDelete onClick={() => dispatch(handleDeleteCart(cart.id))} />
      </div>
    </SItem>
  );
};

export default ItemCart;

const SItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #eee;
  .item-left {
    flex: 1;
    display: flex;
    align-items: center;
    .info {
      margin-left: 30px;
      .name {
        font-size: 15px;
        color: #434343;
      }
      .price {
        font-size: 13px;
        color: red;
        margin-top: 10px;
      }
    }
    .img {
      img {
        width: 100px;
        border-radius: 4px;
        aspect-ratio: 1;
        object-fit: cover;
      }
    }
  }
  .item-center {
    flex: 1;
    display: flex;
    align-items: center;
    .amount {
      margin: 0 7px;
      font-size: 14px;
      color: #434343;
    }
    button {
      border: none;
      cursor: pointer;
      width: 30px;
      font-size: 13px;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .item-right {
    color: red;
    font-size: 24px;
    cursor: pointer;
  }
`;
