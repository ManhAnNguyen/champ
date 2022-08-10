import Input from "components/Input";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const users: any[] = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];

    const findUser = users.find(
      (data, index) =>
        data.name === user.name && data.password === user.password
    );

    if (!!findUser) {
      toast.success("Login Successfully");
      localStorage.setItem("currentUser", JSON.stringify(findUser));
      navigate("/");
    } else {
      toast.error("Not correct information");
    }
  };
  return (
    <SLogin>
      <h1 className="title">LOGIN</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <Input
            label="Username"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="input">
          <Input
            label="Password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
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
