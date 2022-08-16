import { moneyVND, thousandNumComma } from "helpers/money";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const History = () => {
  const [order, setOrders] = useState<any>(null);

  useEffect(() => {
    const history = localStorage.getItem("historyOrder")
      ? JSON.parse(localStorage.getItem("historyOrder")!)
      : null;
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    if (!!history) {
      setOrders(history.filter((h: any) => h.user.id === currentUser.id));
    } else {
      setOrders(null);
    }
  }, []);

  if (!order) return <SNodata>No history available here</SNodata>;
  return (
    <SHistory>
      <h1 className="text">Orders History</h1>
      <div className="wrapper-order">
        {order.map((o: any, index: any) => (
          <div className="item">
            <span className="order">#{index + 1}</span>
            <div className="wrapper-item">
              {o.carts.map((cart: any, index: any) => (
                <div className="item-wrapper" key={index}>
                  <div className="wrapper-left">
                    <div className="img">
                      <img src={cart.img} alt="" />
                    </div>
                    <div className="left-info">
                      <h3 className="name">{cart.name}</h3>
                      <h4 className="price">
                        {moneyVND(thousandNumComma(cart.price))}
                      </h4>
                    </div>
                  </div>
                  <div className="wrapper-right">
                    <div className="amount">Quantity : {cart.amount}</div>
                    <div className="price-total">
                      Total :{" "}
                      {moneyVND(thousandNumComma(cart.amount * cart.price))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SHistory>
  );
};

export default History;

const SNodata = styled.h1``;

const SHistory = styled.div`
  .text {
    color: #434343;
    font-size: 22px;
  }
  .wrapper-order {
    margin-top: 30px;
    .item {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #eee;
      .order {
        font-weight: 800;
        color: #434343;
      }
      .wrapper-item {
        margin-top: 10px;
        .item-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 7px;
          .wrapper-left {
            display: flex;
            align-items: center;
            .img {
              img {
                width: 80px;
                aspect-ratio: 1;
              }
            }
            .left-info {
              margin-left: 10px;
              .name {
                font-size: 14px;
                color: #434343;
              }
              .price {
                color: red;
                font-size: 13px;
                margin-top: 5px;
              }
            }
          }
          .wrapper-right {
            display: flex;
            .amount,
            .price-total {
              font-size: 14px;
              color: #434343;
            }
            .amount {
              margin-right: 100px;
            }
            .price-total {
              font-weight: 800;
              color: green;
            }
          }
        }
      }
    }
  }
`;
