import MessageError from "components/Error/ErrorForm";
import Input from "components/Input";
import useFormRegister from "hooks/form/useFormRegister";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Register = () => {
  const { watch, register, onSubmit, errors } = useFormRegister();

  return (
    <SRegister>
      <h1 className="title">REGISTER</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="input">
          <Input
            label="Username"
            important={true}
            register={{
              ...register("name"),
            }}
          />
          <MessageError name="name" errors={errors} />
        </div>
        <div className="input">
          <Input
            label="Phone"
            important={true}
            register={{
              ...register("phone"),
            }}
            type="number"
          />
          <MessageError name="phone" errors={errors} />
        </div>
        <div className="input">
          <Input
            label="Address"
            important={true}
            register={{
              ...register("address"),
            }}
          />
          <MessageError name="address" errors={errors} />
        </div>
        <div className="input">
          <Input
            label="Password"
            important={true}
            register={{
              ...register("password"),
            }}
            type="password"
          />
          <p className="required">
            password should have 8 characters minimum...12 maximum and should
            have atleast 1 number and 1 alphabet and rest can be either numbers
            or alphabets.
          </p>
          <MessageError name="password" errors={errors} />
        </div>

        <div className="input">
          <Input
            label="Confirmation"
            important={true}
            register={{
              ...register("confirmation"),
            }}
            type="password"
          />
          <MessageError name="confirmation" errors={errors} />
        </div>

        <Link to="/signin">Login now</Link>

        <div className="button-groups">
          <Link to="/">Back to home</Link>
          <button type="submit">Register</button>
        </div>
      </form>
    </SRegister>
  );
};

export default Register;

const SRegister = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 10px 20px;
  width: 100%;
  max-width: 450px;
  .title {
    text-align: center;
    color: #434343;
  }
  .form {
    margin-top: 20px;
    .button-groups {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      a,
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 40px;
        cursor: pointer;
        color: white;
        background-color: #33cccc;
      }
      a {
        margin-right: 16px;
        background-color: #eee;
        color: #434343;
        text-decoration: none;
      }
    }
  }
  .input {
    margin-bottom: 10px;
    .required {
      margin-top: 7px;
      font-size: 12px;
      color: gray;
    }
  }
  a {
    color: blue;
    font-size: 14px;
  }
`;
