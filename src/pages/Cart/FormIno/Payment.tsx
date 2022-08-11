import Input from "components/Input";
import { handleDeleteAllCart } from "pages/Home/store";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "redux/hook";
import styled from "styled-components";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const payment = () => {
    navigate("/");
    dispatch(handleDeleteAllCart());
    toast.success("Thank you for your purchase");
  };
  return (
    <SPayment>
      <div className="input">
        <Input label="Họ và tên" />
      </div>
      <div className="input">
        <Input label="Số điện thoại" />
      </div>
      <div className="input">
        <Input label="Địa chỉ nhận hàng" />
      </div>
      <div className="input">
        <Input label="Mã voucher" />
      </div>

      <div className="button-wrapper">
        <button onClick={payment}>Thanh toán</button>
      </div>
    </SPayment>
  );
};

export default Payment;

const SPayment = styled.div`
  padding-top: 10px;
  .input {
    margin-bottom: 10px;
  }
  .button-wrapper {
    margin-top: 10px;
    button {
      margin: 0 auto;
      display: block;
      width: 120px;
      height: 40px;
      color: white;
      cursor: pointer;
      background-color: #33cccc;
    }
  }
`;
