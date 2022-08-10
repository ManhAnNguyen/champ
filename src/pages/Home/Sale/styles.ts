import styled from "styled-components";

export const SSale = styled.div`
  margin-top: 40px;
  .sale-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 7px;
    border-bottom: 1px solid #eee;
    .sale-top-left {
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
  }
  .sale-bottom {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
  }
`;
