import { homeSelector } from "pages/Home/store";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hook";
import styled from "styled-components";
import FormInfo from "./FormIno";
import ItemCart from "./ItemCart";
import { SCart } from "./styles";

const Cart = () => {
  const { carts } = useAppSelector(homeSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      navigate("/signin");
    }
  }, []);

  if (carts.length === 0)
    return (
      <SNoCart className="container">
        <h1 className="text">Bạn chưa có đơn hàng nào</h1>
        <Link to="/">
          <button>Mua ngay</button>
        </Link>
      </SNoCart>
    );
  return (
    <SCart className="container">
      <h1 className="title">ĐƠN CỦA BẠN</h1>
      <div className="cart-content">
        <div className="content-left">
          {carts.map((cart, index) => (
            <ItemCart key={index} cart={cart} />
          ))}
        </div>
        <div className="content-right">
          <FormInfo />
        </div>
      </div>
    </SCart>
  );
};

export default Cart;

const SNoCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .text {
    color: #434343;
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
  }
  button {
    width: 120px;
    height: 40px;
    margin-top: 20px;
    cursor: pointer;
    color: white;
    background-color: green;
  }
`;
