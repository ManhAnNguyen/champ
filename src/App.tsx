import Footer from "components/Footer";
import LoginLayout from "Layout/LoginLayout";
import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { homeSelector } from "pages/Home/store";
import Cart from "pages/Cart";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
