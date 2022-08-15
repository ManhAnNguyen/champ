import styled from "styled-components";

export const SProfile = styled.div`
  .profile-top {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    position: relative;
    a {
      text-decoration: none;
      padding: 5px 10px;
      color: white;
      background-color: #434343;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .title {
      text-align: center;
      font-size: 30px;
      color: #434343;
    }
  }
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
