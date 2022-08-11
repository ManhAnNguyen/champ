import Footer from "components/Footer";
import Header from "components/Header";
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <SLayout>
      <Header />
      <div className="child">
        <Outlet />
      </div>
      <Footer />
    </SLayout>
  );
};

export default Layout;

const SLayout = styled.div`
  .child {
    padding-top: 140px;
  }
`;
