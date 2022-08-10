import styled from "styled-components";

export const SFooter = styled.div`
  margin-top: 80px;
  .footer-top {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    .item {
      display: flex;
      align-items: center;
      border-radius: 4px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      height: 130px;
      padding-left: 30px;
      .item-left {
        font-size: 30px;
        color: #33cccc;
      }
      .item-right {
        margin-left: 17px;
        .title {
          color: #33cccc;
          font-size: 16px;
        }
        .desc {
          color: #434343;
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }
  .footer-bottom {
    height: 70px;
    font-size: 14;
    color: #434343;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
