import Item from "components/Item";
import { dataBath } from "data/bathroom";
import React from "react";
import TopSection from "../TopSection";
import { SBathRoom } from "./styles";

const categories = [
  "VÒI HOA SEN",
  "XÀ PHÒNG & DẦU GỘI ĐẦU",
  "BỒN TẮM",
  "TOILET",
  "KHĂN LAU VÀ KHĂN TẮM",
];

const Bathroom = () => {
  return (
    <SBathRoom>
      <TopSection text="PHÒNG TẮM" categories={categories} />
      <div className="living-content">
        <div className="living-content_left">
          <img src="/image/bath/lar-img.jpg" alt="" />
        </div>
        <div className="living-content_right">
          {dataBath.map((d, index) => (
            <Item key={index} product={d} />
          ))}
        </div>
      </div>
      <div className="bath-bottom">
        <div className="bath-bottom_left">
          <img src="/image/bath/footer1.jpg" alt="" />
        </div>
        <div className="bath-bottom_right">
          <img src="/image/bath/footer2.jpg" alt="" />
        </div>
      </div>
    </SBathRoom>
  );
};

export default Bathroom;
