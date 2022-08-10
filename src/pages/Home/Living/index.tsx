import React from "react";
import TopSection from "../TopSection";
import { SLiving } from "./styles";

const categories = ["ĐÈN TREO TƯỜNG", "ĐÈN CHÙM", "BÀN", "SOFA & GHẾ", "TIVI"];

const Living = () => {
  return (
    <SLiving>
      <TopSection text="PHÒNG KHÁCH" categories={categories} />
      <div className="living-content">
        <div className="living-content_left">
          <img src="/image/living" alt="" />
        </div>
        <div className="living-content_right"></div>
      </div>
    </SLiving>
  );
};

export default Living;
