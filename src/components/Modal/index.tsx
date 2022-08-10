import React, { CSSProperties, HTMLAttributes, ReactNode } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { scrollBar } from "styles/mixin";

import Overlay from "../Overlay";

interface PropsType {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
  title: ReactNode;
  overwrite?: CSSProperties;
  overwrite_overlay?: CSSProperties;
}

const Modal = React.forwardRef<HTMLDivElement, PropsType>((props, ref) => {
  const { isOpen, toggle, children, title, overwrite, overwrite_overlay } =
    props;
  if (!isOpen) return <></>;
  return ReactDOM.createPortal(
    <>
      <SModal style={overwrite}>
        <div className="modal-top">
          <div className="top-title">
            <p className="title">{title}</p>
          </div>
          <span className="top-close" onClick={toggle}>
            <img src="/images/close.svg" alt="" />
          </span>
        </div>
        <div className="modal-content">{children}</div>
      </SModal>

      <Overlay css_overlay={overwrite_overlay} />
    </>,
    document.querySelector("body") as HTMLBodyElement
  );
});

export default Modal;

export const show = keyframes`
 from{
    transform: translate(-50%, -100vh) ;
 }
 to{
    transform: translate(-50%, -50%) ;
 }
`;

const SModal = styled.div`
  position: fixed;
  background: white;
  width: 90%;
  max-width: 400px;
  height: auto;
  max-height: 90%;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 11;

  animation: ${show} 0.2s linear;

  ${scrollBar({})}
  .modal-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    .top-close {
      cursor: pointer;
    }
  }
  .modal-content {
    border-top: 1px solid #eaebed;
    padding: 14px 20px;
    padding-bottom: 30px;
  }
`;
