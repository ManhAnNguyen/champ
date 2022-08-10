import { css } from "styled-components";

type PropsScroll = {
  width?: string;
  height?: string;
  borderRadius?: string;
  bg?: string;
};

export const scrollBar = ({
  width = "5px",
  height = "5px",
  borderRadius = "10px",
  bg = "#33cccc;",
}: PropsScroll) => css`
  ::-webkit-scrollbar {
    width: ${width};
    height: ${height};
  }
  ::-webkit-scrollbar-thumb {
    background: ${bg};
    border-radius: ${borderRadius};
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: ${bg};
      border-radius: ${borderRadius};
    }
  }

  ::-webkit-scrollbar-track {
    border-radius: ${borderRadius};
  }
`;
