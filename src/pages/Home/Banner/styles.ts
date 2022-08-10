import styled from "styled-components";

export const SBanner = styled.div`
  display: flex;
  .banner-left {
    flex: 1;
    border: 1px solid #eee;
    border-top: 1px solid transparent;
    .banner-left_top {
      height: 60px;

      display: flex;
      align-items: center;
      padding-left: 30px;
      border-bottom: 1px solid #eee;
      .text {
        margin-left: 10px;
        color: rgb(51, 51, 51);
        font-size: 1.17em;
        font-weight: bold;
      }
    }
    .banner-left_bottom {
      .item {
        padding: 16px 30px;
        display: flex;
        cursor: pointer;
        align-items: center;
        border-bottom: 1px solid #eee;
        &:last-child {
          border-bottom: 1px solid transparent;
        }
        .text {
          margin-left: 10px;
          color: #434343;
          font-size: 13px;
        }
      }
    }
  }
  .banner-right {
    flex: 3;
    display: flex;
    flex-direction: column;
    .banner-right_top {
      height: 60px;
      display: flex;
      align-items: center;
      padding-left: 30px;
      border-bottom: 1px solid #eee;
      .item {
        margin-left: 20px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        .icon {
          color: #434343;
          transform: translateY(4px);
          transition: all 0.2s linear;
        }
        .text {
          color: #434343;
          margin-left: 5px;
          font-size: 13px;
          transition: all 0.2s linear;
        }
        &:hover {
          .icon {
            color: #33cccc;
          }
          .text {
            color: #33cccc;
          }
        }
      }
    }
    .banner-right_bottom {
      background-image: url("/image/banner/home3.jpg");
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      span {
        color: rgb(102, 102, 102);
        font-size: 2rem;
        font-weight: 300;
      }
      .title {
        margin: 10px 0;
        font-size: 2.8rem;
      }
      .groups-button {
        display: flex;
        button {
          cursor: pointer;
          width: 120px;
          height: 40px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          &:last-child {
            margin-left: 16px;
          }
        }
        .more {
          color: rgb(102, 102, 102);
          background-color: white;
        }
        .buy-now {
          background-color: #33cccc;
          color: white;
        }
      }
    }
  }
`;

export const SShipping = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 40px 0;
  .item {
    display: flex;
    align-items: center;
    padding: 30px;
    border: 1px solid #eee;
    .item-right {
      margin-left: 17px;
      .text {
        font-size: 14px;
        color: #434343;
      }
      .desc {
        margin-top: 5px;
        font-size: 13px;
      }
    }
  }
`;
