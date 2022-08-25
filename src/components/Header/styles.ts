import styled from "styled-components";

export const SHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background-color: white;

  &.container {
    .header-top {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 10px 0;
      .header-top_item {
        display: flex;
        align-items: center;
        .icon {
          transform: translateY(2px);
          margin-right: 4px;
        }
        .text {
          font-size: 12px;
          color: #434343;
        }
        &:nth-child(2) {
          margin: 0 15px;
          padding: 0 15px;
          position: relative;
          &::before,
          &::after {
            content: "";
            width: 1px;
            height: 10px;
            background-color: #eee;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          &::before {
            left: 0;
          }
          &::after {
            right: 0;
          }
        }
      }
    }
    .header-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
      .logo {
      }

      .header-bottom_options {
        display: flex;
        align-items: center;
        .option-item {
          display: flex;
          align-items: center;
          .item-right {
            transform: translateY(4px);
            margin-left: 6px;
            .item-right_title {
              font-size: 13px;
              letter-spacing: 1px;
              color: #434343;
            }
            .item-right_text {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
