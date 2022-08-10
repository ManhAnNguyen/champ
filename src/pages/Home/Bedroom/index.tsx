import Item from "components/Item";
import { dataBed } from "data/bed";
import React from "react";
import TopSection from "../TopSection";
import { SBedRoom } from "./styles";

const categories = [
  "PHÒNG NGỦ",
  "CHĂN GA",
  "GIƯỜNG NGỦ",
  "GHẾ ĐỌC SÁCH",
  "BÀN COFFEE",
  "PHÒNG ĂN",
];

const BedRoom = () => {
  return (
    <SBedRoom>
      <TopSection text="PHÒNG NGỦ" categories={categories} />
      <div className="living-content">
        <div className="living-content_left">
          <img src="/image/living/lar-img.jpg" alt="" />
        </div>
        <div className="living-content_right">
          {dataBed.map((d, index) => (
            <Item key={index} product={d} />
          ))}
        </div>
      </div>
    </SBedRoom>
  );
};

export default BedRoom;
