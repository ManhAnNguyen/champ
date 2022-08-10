import styled from "styled-components";
import { scrollBar } from "styles/mixin";
export const SBathRoom = styled.div`
  margin-top: 40px;
  .living-content {
    display: flex;

    .living-content_left {
      flex: 1;
    }
    .living-content_right {
      flex: 4;
      margin-left: 20px;
      max-height: 580px;
      overflow: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
      ${scrollBar({})}
    }
  }
  .bath-bottom {
    margin-top: 20px;
    display: flex;
    .bath-bottom_right {
      margin-left: 70px;
    }
    .bath-bottom_left,
    .bath-bottom_right {
      img {
        max-width: 100%;
      }
    }
  }
`;
