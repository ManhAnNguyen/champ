import React, { CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  css_overlay?: CSSProperties;
};

const Overlay = ({ css_overlay }: Props) => {
  return <SOverlay style={{ ...css_overlay }}></SOverlay>;
};

export default Overlay;

const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;
