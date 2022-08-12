import styled, { keyframes } from "styled-components";

// const show = keyframes`
//   from {
//     transform: translateX(100%);
//   }
//   to{
//     transform: translateX(0);
//   }
// `;

export const SWishList = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: auto;
  width: 300px;
  background-color: white;
  z-index: 14;
  padding: 10px;
  transition: all 0.2s linear;
  transform-origin: center right;
  &.show {
    transform: translateX(0);
  }
  &.hidden {
    transform: translateX(100%);
  }
  .close {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1;
    cursor: pointer;
    background-color: red;
    .icon {
      color: white;
      font-size: 20px;
    }
  }
  .title-wishlist {
    color: #434343;
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .no {
    font-size: 16px;
    color: #434343;
    margin: 0 auto;
  }
`;
