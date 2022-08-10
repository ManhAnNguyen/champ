import React from "react";
import { SFooter } from "./styles";
import { FaShippingFast } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { ImHeadphones } from "react-icons/im";
import { BsCreditCardFill } from "react-icons/bs";

const Footer = () => {
  return (
    <SFooter className="container">
      <div className="footer-top">
        <div className="item">
          <div className="item-left">
            <FaShippingFast />
          </div>
          <div className="item-right">
            <h3 className="title">Miễn phí giao hàng</h3>
            <h3 className="desc">
              Miễn phí giao hàng với đơn hàng trên 2.999.000VNĐ
            </h3>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <FiLock />
          </div>
          <div className="item-right">
            <h3 className="title">Thanh toán an toàn</h3>
            <h3 className="desc">Bảo mật thông tin</h3>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <ImHeadphones />
          </div>
          <div className="item-right">
            <h3 className="title">Hỗ trợ online</h3>
            <h3 className="desc">Hỗ trợ 24/7</h3>
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <BsCreditCardFill />
          </div>
          <div className="item-right">
            <h3 className="title">Thanh toán khi giao hàng</h3>
            <h3 className="desc">Tiện lợi và an toàn</h3>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text">© 2022 (clone by Nguyen Viet Hieu)</p>
      </div>
    </SFooter>
  );
};

export default Footer;
