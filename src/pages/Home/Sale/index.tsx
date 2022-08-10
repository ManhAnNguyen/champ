import Item from "components/Item";
import SaleItem from "components/SaleItem";
import { dataSale } from "data/sale";
import React from "react";
import { SSale } from "./styles";

const Sale = () => {
  return (
    <SSale>
      <div className="sale-top">
        <div className="sale-top-left">
          <h3 className="left-title">SẢN PHẨM GIẢM GIÁ</h3>
        </div>
      </div>
      <div className="sale-bottom">
        {dataSale.map((d, index) => (
          <SaleItem key={index} product={d} />
        ))}
      </div>
    </SSale>
  );
};

export default Sale;
