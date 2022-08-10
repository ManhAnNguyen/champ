import React from "react";
import { STopSection } from "./styles";
import {
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
  AiFillHeart,
} from "react-icons/ai";
import { BsFillBarChartLineFill, BsFillMoonStarsFill } from "react-icons/bs";

type Props = {
  text: string;
  categories: string[];
};

const TopSection = ({ text, categories }: Props): JSX.Element => {
  return (
    <STopSection>
      <div className="top-wrapper">
        <div className="top-section-left">
          <h3 className="left-title">{text}</h3>
        </div>
        <div className="top-section-right">
          <div className="item">
            <div className="icon">
              <AiOutlineClockCircle />
            </div>
            <div className="text">Tốt nhất</div>
          </div>
          <div className="item">
            <div className="icon">
              <AiOutlineCheckCircle />
            </div>
            <div className="text">Bán chạy nhất</div>
          </div>
          <div className="item">
            <div className="icon">
              <BsFillBarChartLineFill />
            </div>
            <div className="text">Bình chọn</div>
          </div>
          <div className="item">
            <div className="icon">
              <AiFillHeart />
            </div>
            <div className="text">Yêu thích</div>
          </div>
          <div className="item">
            <div className="icon">
              <BsFillMoonStarsFill />
            </div>
            <div className="text">Đặc biệt</div>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        {categories.map((text, index) => (
          <p className="bottom-text" key={index}>
            {text}
          </p>
        ))}
      </div>
    </STopSection>
  );
};

export default TopSection;
