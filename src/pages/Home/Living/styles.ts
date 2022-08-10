import styled from "styled-components";
import { scrollBar } from "styles/mixin";

export const SLiving = styled.div`
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
`;
