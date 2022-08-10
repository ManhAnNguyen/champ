import React from "react";
import { SBanner, SShipping } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { furnitureData, navbarData } from "./data";

const Banner = () => {
  return (
    <>
      <SBanner>
        <div className="banner-left">
          <div className="banner-left_top">
            <span className="icon">
              <AiOutlineMenu fontSize={22} fontWeight="bold" />
            </span>
            <span className="text">NỘI THẤT</span>
          </div>
          <div className="banner-left_bottom">
            {furnitureData.map((d, index) => (
              <div className="item" key={index}>
                <span className="icon">
                  <img src={d.img} alt="" />
                </span>
                <span className="text">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="banner-right">
          <div className="banner-right_top">
            {navbarData.map((d, index) => (
              <div className="item" key={index}>
                <span className="icon">{d.icon}</span>
                <span className="text">{d.name}</span>
              </div>
            ))}
          </div>
          <div className="banner-right_bottom">
            <span>Thiết Kế Tuyệt Vời</span>
            <h3 className="title">Không Chỉ Là Nội Thất</h3>
            <div className="groups-button">
              <button className="more">ĐỌC THÊM</button>
              <button className="buy-now">MUA NGAY</button>
            </div>
          </div>
        </div>
      </SBanner>
      <SShipping>
        <div className="item">
          <div className="item-left">
            <img src="/image/Banner/ship/shipping.png" alt="" />
          </div>
          <div className="item-right">
            <h3 className="text">VẬN CHUYỂN VÀ TRẢ LẠI</h3>
            <p className="desc">Vận chuyển trong và ngoài nước </p>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img src="/image/Banner/ship/money.png" alt="" />
          </div>
          <div className="item-right">
            <h3 className="text">CHẤP NHẬN THANH TOÁN CÁC LOẠI THẺ</h3>
            <p className="desc">VISA, MASTERCARD... </p>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img src="/image/Banner/ship/support.png" alt="" />
          </div>
          <div className="item-right">
            <h3 className="text">VẬN CHUYỂN VÀ TRẢ LẠI</h3>
            <p className="desc">Vận chuyển trong và ngoài nước </p>
          </div>
        </div>
      </SShipping>
    </>
  );
};

export default Banner;
