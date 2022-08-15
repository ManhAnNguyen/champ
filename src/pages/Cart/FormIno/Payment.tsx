import MessageError from "components/Error/ErrorForm";
import Input from "components/Input";
import useFormPayment from "hooks/form/useFormPayment";
import { handleDeleteAllCart } from "pages/Home/store";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "redux/hook";
import styled from "styled-components";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, watch, errors, setValue, onSubmit } = useFormPayment();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    setValue("name", currentUser.name);
    setValue("phone", currentUser.phone);
    setValue("address", currentUser.address);
  }, []);

  return (
    <SPayment onSubmit={onSubmit}>
      <div className="input">
        <Input
          label="Họ và tên"
          register={{
            ...register("name"),
          }}
        />
        <MessageError name="name" errors={errors} />
      </div>
      <div className="input">
        <Input
          label="Số điện thoại"
          register={{
            ...register("phone"),
          }}
        />{" "}
        <MessageError name="phone" errors={errors} />
      </div>
      <div className="input">
        <Input
          label="Địa chỉ nhận hàng"
          register={{
            ...register("address"),
          }}
        />
        <MessageError name="address" errors={errors} />
      </div>
      <div className="input">
        <Input label="Mã voucher" />
      </div>

      <div className="button-wrapper">
        <button type="submit">Thanh toán</button>
      </div>
    </SPayment>
  );
};

export default Payment;

const SPayment = styled.form`
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
