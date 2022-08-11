import React, { useState } from "react";
import styled from "styled-components";
import Bill from "./Bill";
import Payment from "./Payment";

const FormInfo = () => {
  const [label, setLabel] = useState<"bill" | "payment">("bill");
  return (
    <SInfo>
      <div className="label-groups">
        <span
          className={`label ${label === "bill" && "active"}`}
          onClick={() => setLabel("bill")}
        >
          Hóa đơn
        </span>
        <span
          className={`label ${label === "payment" && "active"}`}
          onClick={() => setLabel("payment")}
        >
          Thanh toán
        </span>
      </div>
      <div className="content">{label === "bill" ? <Bill /> : <Payment />}</div>
    </SInfo>
  );
};

export default FormInfo;

const SInfo = styled.div`
  .label-groups {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background-color: #efefef;
    width: fit-content;
    margin: 0 auto;
    .label {
      padding: 15px 20px;

      cursor: pointer;
      &.active {
        color: white;
        background-color: #33cccc;
        border-radius: 40px;
      }
    }
  }
  .content {
    margin-top: 30px;
    padding: 10px 20px;
    background-color: white;
    border: 1px solid #eee;
  }
`;
