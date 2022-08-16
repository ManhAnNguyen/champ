import styled from "styled-components";

export const SInfo = styled.div`
  .content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      font-size: 100px;
      color: #434343;
    }
    .info_item {
      margin-bottom: 10px;
      &:first-child {
        margin-top: 50px;
        font-size: 22px;
        color: #434343;
      }
    }
  }
`;
