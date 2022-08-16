import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import History from "./History";
import Info from "./Info";

const Profile = () => {
  return (
    <SProfile className="container">
      <div className="profile-top">
        <Link to="/">Home</Link>
        <h3 className="title">PROFILE</h3>
      </div>
      <div className="wrapper">
        <div className="left">
          <Info />
        </div>
        <div className="right">
          <History />
        </div>
      </div>
    </SProfile>
  );
};

export default Profile;

const SProfile = styled.div`
  .profile-top {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
    a {
      text-decoration: none;
      padding: 5px 10px;
      color: white;
      background-color: #434343;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .title {
      text-align: center;
      font-size: 30px;
      color: #434343;
    }
  }
  .wrapper {
    display: flex;
    .left {
      width: 250px;
    }
    .right {
      flex: 1;
      margin-left: 50px;
      padding-top: 40px;
      padding-left: 20px;
      border-left: 1px solid #eee;
    }
  }
`;
