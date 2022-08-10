import styled from "styled-components";

export const STopSection = styled.div`
  margin-bottom: 25px;
  .top-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 7px;
    border-bottom: 1px solid #eee;
    .top-section-left {
      .left-title {
        color: #434343;
        position: relative;
        &::before {
          content: "";
          width: 250px;
          height: 2px;
          background-color: #33cccc;
          position: absolute;
          top: 100%;
          left: 0;
          transform: translateY(7px);
        }
      }
    }
    .top-section-right {
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        .text {
          color: #434343;
          transition: all 0.2s linear;
          font-size: 14px;
          margin-left: 5px;
        }
        .icon {
          color: #434343;
          transition: all 0.2s linear;
        }
        &:hover {
          .text {
            color: #33cccc;
          }
          .icon {
            color: #33cccc;
          }
        }
      }
    }
  }
  .bottom-wrapper {
    margin-top: 15px;
    display: flex;
    align-items: center;
    .bottom-text {
      font-size: 13px;
      color: #434343;
      padding: 0 7px;
      position: relative;
      &::before,
      &::after {
        content: "";
        background-color: #eee;
        width: 1px;
        height: 8px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
      }
      &::before {
        right: 0;
      }
      &::after {
        left: 0;
      }
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        &::before {
          content: none;
        }
      }
    }
  }
`;
