import { moneyVND, thousandNumComma } from "helpers/money";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TProduct } from "types";
import { GrCart } from "react-icons/gr";
import { AiOutlineHeart, AiOutlineUndo } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "redux/hook";
import {
  handleActionWishList,
  handleAddToCart,
  homeSelector,
} from "pages/Home/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

type Props = {
  product: TProduct;
};

const Item = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const { wishlists } = useAppSelector(homeSelector);
  const [isWishList, setIsWishlist] = useState(false);
  const navigate = useNavigate();
  const addToCart = () => {
    if (!localStorage.getItem("currentUser")) {
      navigate("/signin");
      return;
    }
    dispatch(handleAddToCart(product));
    toast.success("Add item to cart successfully");
  };

  useEffect(() => {
    const isFavorite = wishlists.find((item) => item.id === product.id);
    setIsWishlist(!!isFavorite);
  }, [wishlists]);
  return (
    <SItem>
      <div className="product-img">
        <img src={product.img} alt="" />
        <span className="icon">
          {isWishList && <BsHeartFill color="red" />}
        </span>
      </div>
      <div className="product-bottom">
        <div className="product-info">
          <h3 className="name">{product.name}</h3>
          <p className="price">{moneyVND(thousandNumComma(product.price))}</p>
        </div>
        <div className="product-action">
          <div className="action-item" onClick={addToCart}>
            <span className="icon">
              <RiShoppingCart2Fill />
            </span>
          </div>
          <div
            className="action-item"
            onClick={() => dispatch(handleActionWishList(product))}
          >
            <span className="icon">
              {isWishList ? <BsHeartFill color="red" /> : <AiOutlineHeart />}
            </span>
          </div>
          <div className="action-item">
            <span className="icon">
              <AiOutlineUndo />
            </span>
          </div>
          <div className="action-item">
            <span className="icon">
              <GoSearch />
            </span>
          </div>
        </div>
      </div>
    </SItem>
  );
};

export default Item;

const SItem = styled.div`
  cursor: pointer;
  .product-img {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    img {
      max-width: 100%;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .icon {
      position: absolute;
      z-index: 2;
      top: 10px;
      right: 10px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: transparent;
      transform: scale(0);
      transition: all 0.4s linear;
      transform-origin: center;
    }
  }
  .product-bottom {
    margin-top: 10px;
    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        margin-bottom: 10px;
        color: #434343;
        font-size: 15px;
      }
      .price {
        color: red;
        font-weight: 600;
        font-size: 16px;
      }
    }
    .product-action {
      display: grid;
      max-width: 100%;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 16px;
      transform-origin: bottom;
      opacity: 0;
      transform: scale(0);
      height: 0;
      transition-duration: 0.4s;
      .action-item {
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: rgb(245, 245, 245);
        transition: all 0.2s linear;
        .icon {
          color: rgb(102, 102, 102);
          font-size: 18px;
          transition: all 0.2s linear;
        }
        &:hover {
          background-color: #33cccc;
          .icon {
            color: white;
          }
        }
      }
    }
  }
  &:hover {
    .product-img {
      &::after {
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(1);
      }
    }
    .product-bottom {
      .product-info {
        transform: scale(0);
        opacity: 0;
        height: 0;
      }
      .product-action {
        opacity: 1;
        height: unset;
        transform: scale(1);
      }
    }
  }
`;
