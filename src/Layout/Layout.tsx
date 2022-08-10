import Footer from "components/Footer";
import Header from "components/Header";
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
