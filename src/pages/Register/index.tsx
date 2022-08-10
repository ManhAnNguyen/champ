import Input from "components/Input";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    password: "",
    confirmation: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user.confirmation !== user.password) {
      toast.error("Please double check password");
      return;
    }
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users")!)
      : [];

    localStorage.setItem("users", JSON.stringify([...users, user]));

    toast.success("Register successffully");
    navigate("/signin");
  };
  return (
    <SRegister>
      <h1 className="title">REGISTER</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <Input
            label="Username"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
          />
        </div>
        <div className="input">
          <Input
            label="Phone"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            value={user.phone}
            type="number"
          />
        </div>
        <div className="input">
          <Input
            label="Address"
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            value={user.address}
          />
        </div>
        <div className="input">
          <Input
            label="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            type="password"
          />
        </div>

        <div className="input">
          <Input
            label="Confirmation"
            onChange={(e) => setUser({ ...user, confirmation: e.target.value })}
            value={user.confirmation}
            type="password"
          />
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
  }
  a {
    color: blue;
    font-size: 14px;
  }
`;
