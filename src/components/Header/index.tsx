import React, { useEffect, useState } from "react";
import { SHeader } from "./styles";
import { MdOutlinePlace, MdFavorite, MdExitToApp } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useAppSelector } from "redux/hook";
import { homeSelector } from "pages/Home/store";
import Wishlist from "components/WishList";
import useBoolean from "hooks/useBoolean";
import Search from "./Search";

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const { carts, wishlists } = useAppSelector(homeSelector);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!!currentUser) {
      setUser(JSON.parse(currentUser));
    } else {
      setUser(null);
    }
  }, [location]);

  return (
    <SHeader className="container">
      <div className="header-top">
        <div className="header-top_item">
          <span className="icon">
            <MdOutlinePlace color="#434343" />
          </span>
          <span className="text">Address</span>
        </div>

        {!!user ? (
          <>
            <WishListBtn />
            <Link
              to="/profile"
              style={{ textDecoration: "none" }}
              className="header-top_item"
            >
              <span className="icon">
                <BsPersonCircle color="#434343" />
              </span>
              <span className="text">{user.name}</span>
            </Link>
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
        <Search />
        <div className="header-bottom_options">
          <div className="option-item">
            <div className="item-left">
              <img src="/image/header/phone.png" alt="" />
            </div>
            <div className="item-right">
              <h3 className="item-right_title">G???i mi???n ph??</h3>
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
              <h3 className="item-right_title">Gi??? h??ng</h3>
              <span className="item-right_text">{carts.length} item(s)</span>
            </div>
          </Link>
        </div>
      </div>
    </SHeader>
  );
};

export default Header;

const WishListBtn = () => {
  const { valBoolean, setFalse, setTrue } = useBoolean();
  const { carts, wishlists } = useAppSelector(homeSelector);
  return (
    <>
      <div
        className="header-top_item"
        onClick={setTrue}
        style={{ cursor: "pointer" }}
      >
        <span className="icon">
          <MdFavorite color="#434343" />
        </span>
        <span className="text">Wishlist({wishlists.length})</span>
      </div>
      <Wishlist setFalse={setFalse} isOpen={valBoolean} />
    </>
  );
};
