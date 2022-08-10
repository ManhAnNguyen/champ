import React from "react";
import { SHeader } from "./styles";
import { MdOutlinePlace, MdFavorite } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header = () => {
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
        <div className="header-top_item">
          <span className="icon">
            <AiFillUnlock color="#434343" />
          </span>
          <span className="text">Login</span>
        </div>
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
          <div className="option-item">
            <div className="item-left">
              <img src="/image/header/cart.png" alt="" />
            </div>
            <div className="item-right">
              <h3 className="item-right_title">Giỏ hàng</h3>
              <span className="item-right_text">0 item(s)</span>
            </div>
          </div>
        </div>
      </div>
    </SHeader>
  );
};

export default Header;
