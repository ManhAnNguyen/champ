import styled from "styled-components";

export const SCart = styled.div`
  .title {
    color: #434343;
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
  }
  .cart-content {
    border-top: 1px solid #eee;
    padding-top: 20px;
    margin-top: 20px;
    .back {
      cursor: pointer;
      text-decoration: none;
      background-color: gray;
      color: white;
      padding: 10px 20px;
      .icon {
        font-size: 22px;
        transform: translateY(6px);
      }
    }
    .cart-content_wrapper {
      display: flex;
      margin-top: 20px;
      .content-left {
        .delete-all {
          margin-left: auto;
          width: 120px;
          height: 40px;
          display: block;
          cursor: pointer;
          color: white;
          background-color: red;
          margin-bottom: 20px;
        }
        flex: 1.7;
      }
      .content-right {
        margin-left: 70px;
        flex: 1;
      }
    }
  }
`;
