import { moneyVND, thousandNumComma } from "helpers/money";
import { homeSelector } from "pages/Home/store";
import React from "react";
import { useAppSelector } from "redux/hook";
import styled from "styled-components";

const Bill = () => {
  const { carts } = useAppSelector(homeSelector);
  const formatTotal = carts.map((cart) => cart.amount * +cart.price);
  const total = formatTotal.reduce((prev, cur) => prev + cur, 0);
  return (
    <SBill>
      {carts.map((cart, index) => (
        <div className="cart-bill">
          <h3 className="name">{cart.name}</h3>
          <h4 className="amount">x {cart.amount}</h4>
          <h5 className="price">
            {moneyVND(thousandNumComma(cart.amount * +cart.price))}
          </h5>
        </div>
      ))}
      <div className="total">
        <h3 className="text-total">Tổng hóa đơn</h3>
        <h4 className="total">{moneyVND(thousandNumComma(total))}</h4>
      </div>
    </SBill>
  );
};

export default Bill;

const SBill = styled.div`
  padding-top: 10px;
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text-total {
      color: #434343;
    }
    .total {
      color: green;
    }
  }
  .cart-bill {
    margin-bottom: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    .name,
    .amount {
      flex: 1;
      width: 100px;
    }
    .name {
      font-size: 14px;
      color: #434343;
    }
    .amount {
      font-size: 14px;
      color: red;
    }
    .price {
      font-size: 14;
      color: #434343;
    }
  }
`;
