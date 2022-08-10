import styled from "styled-components";
import { scrollBar } from "styles/mixin";

export const SBedRoom = styled.div`
  margin-top: 40px;
  .living-content {
    display: flex;
    flex-direction: row-reverse;
    .living-content_left {
      flex: 1;
      margin-left: 20px;
    }
    .living-content_right {
      flex: 4;

      max-height: 580px;
      overflow: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
      ${scrollBar({})}
    }
  }
`;
