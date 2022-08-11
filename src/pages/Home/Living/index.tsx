import Item from "components/Item";
import { dataLiving } from "data/living";
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
          <img src="/image/living/lar-img.jpg" alt="" />
        </div>
        <div className="living-content_right">
          {dataLiving.map((d, index) => (
            <Item
              key={index}
              product={{
                name: `Sofa đơn 1000s-${index + 1}`,
                img: `/image/living/product${index + 1}.jpg`,
                ...d,
              }}
            />
          ))}
        </div>
      </div>
    </SLiving>
  );
};

export default Living;
