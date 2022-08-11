import React, { useEffect, useState } from "react";
import { SHeader } from "./styles";
import { MdOutlinePlace, MdFavorite, MdExitToApp } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useAppSelector } from "redux/hook";
import { homeSelector } from "pages/Home/store";

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const { carts } = useAppSelector(homeSelector);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!!currentUser) {
      setUser(JSON.parse(currentUser));
    } else {
      setUser(null);
    }
  }, [location, handleLogout]);

  return (
    <SHeader className="container">
      <div className="header-top">
        <div className="header-top_item">
          <span className="icon">
            <MdOutlinePlace color="#434343" />
          </span>
          <span className="text">Address</span>
        </div>
        <div className="header-top_item">
          <span className="icon">
            <MdFavorite color="#434343" />
          </span>
          <span className="text">Wishlist</span>
        </div>
        {!!user ? (
          <>
            <div className="header-top_item">
              <span className="icon">
                <BsPersonCircle color="#434343" />
              </span>
              <span className="text">{user.name}</span>
            </div>
            <div
              className="header-top_item"
              style={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={handleLogout}
            >
              <span className="icon">
                <MdExitToApp color="#434343" fontSize={18} />
              </span>
              <span className="text">Logout</span>
            </div>
          </>
        ) : (
          <Link
            to="/signin"
            className="header-top_item"
            style={{ textDecoration: "none" }}
          >
            <span className="icon">
              <AiFillUnlock color="#434343" />
            </span>
            <span className="text">Login</span>
          </Link>
        )}
      </div>
      <div className="header-bottom">
        <div className="logo">
          <img src="/image/header/logo.png" alt="" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm" />
          <span className="icon">
            <FiSearch fontSize={23} color="#434343" />
          </span>
        </div>
        <div className="header-bottom_options">
          <div className="option-item">
            <div className="item-left">
              <img src="/image/header/phone.png" alt="" />
            </div>
            <div className="item-right">
              <h3 className="item-right_title">Gọi miễn phí</h3>
              <span className="item-right_text">(+84)123.456.7890</span>
            </div>
          </div>
          <Link
            to="/cart"
            style={{ textDecoration: "none" }}
            className="option-item"
          >
            <div className="item-left">
              <img src="/image/header/cart.png" alt="" />
            </div>
            <div className="item-right">
              <h3 className="item-right_title">Giỏ hàng</h3>
              <span className="item-right_text">{carts.length} item(s)</span>
            </div>
          </Link>
        </div>
      </div>
    </SHeader>
  );
};

export default Header;
