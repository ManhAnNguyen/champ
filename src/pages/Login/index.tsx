import MessageError from "components/Error/ErrorForm";
import Input from "components/Input";
import useFormLogin from "hooks/form/useFormLogin";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Login = () => {
  const { errors, register, onSubmit } = useFormLogin();

  return (
    <SLogin>
      <h1 className="title">LOGIN</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="input">
          <Input
            label="Username"
            register={{
              ...register("name"),
            }}
          />
          <MessageError name="name" errors={errors} />
        </div>
        <div className="input">
          <Input
            label="Password"
            type="password"
            register={{
              ...register("password"),
            }}
          />
          <MessageError name="password" errors={errors} />
        </div>
        <Link to="/register">Don't have account. Register now!</Link>
        <div className="button-groups">
          <Link to="/">Back to home</Link>
          <button type="submit">Login</button>
        </div>
      </form>
    </SLogin>
  );
};

export default Login;

const SLogin = styled.div`
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
  }
  a {
    color: blue;
    font-size: 14px;
  }
`;
