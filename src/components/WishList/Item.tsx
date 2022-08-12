import React from "react";
import styled from "styled-components";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import ReactDOM from "react-dom";
import { TProduct } from "types";
import { moneyVND, thousandNumComma } from "helpers/money";
import { useAppDispatch } from "redux/hook";
import { handleActionWishList, handleAddToCart } from "pages/Home/store";
import { toast } from "react-toastify";

type Props = {
  product: TProduct;
};

const Item = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <SItem>
      <div className="item-left">
        <span
          className="icon"
          onClick={() => dispatch(handleActionWishList(product))}
        >
          <RiDeleteBin2Line />
        </span>

        <div className="img">
          <img src={product.img} alt="" />
        </div>
        <div className="left-info">
          <h3 className="name">{product.name}</h3>
          <h4 className="price">{moneyVND(thousandNumComma(product.price))}</h4>
        </div>
      </div>
      <div className="item-right">
        <MdAddShoppingCart
          onClick={() => {
            dispatch(handleAddToCart(product));
            toast.success("Add to cart succesfully");
          }}
        />
      </div>
    </SItem>
  );
};

export default Item;

const SItem = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .item-left {
    display: flex;
    align-items: center;
    .icon {
      font-size: 20px;
      color: #434343;
      cursor: pointer;
      margin-right: 10px;
    }
    .img {
      img {
        width: 60px;
        aspect-ratio: 1;
        border-radius: 4px;
        object-fit: cover;
      }
    }
    .left-info {
      margin-left: 10px;
      .name {
        color: #434343;
        font-size: 14px;
      }
      .price {
        margin-top: 5px;
        color: red;
        font-size: 13px;
      }
    }
  }
  .item-right {
    color: #434343;
    font-size: 20px;
    cursor: pointer;
  }
`;
