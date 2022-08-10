import React, { ReactNode } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <SLoginLayout>
      <Outlet />
    </SLoginLayout>
  );
};

export default LoginLayout;

const SLoginLayout = styled.div`
  background-image: url("/image/layout-login.jpg");
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
