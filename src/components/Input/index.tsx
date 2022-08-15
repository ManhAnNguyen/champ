import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: any;
  important?: boolean;
}

const Input = ({ label, register, important = false, ...rest }: Props) => {
  return (
    <SInput>
      {label && (
        <h3 className="label">
          {important && <span className="im">*</span>} {label}
        </h3>
      )}
      <input type="text" {...rest} {...register} />
    </SInput>
  );
};

export default Input;

const SInput = styled.div`
  display: flex;
  flex-direction: column;
  .label {
    font-size: 13px;
    color: #434343;
    margin-bottom: 5px;
    font-weight: 500;
    .im {
      color: red;
      font-size: 20px;
      position: relative;
      top: 5px;
    }
  }
  input {
    border: 1px solid #eee;
    outline: none;
    height: 40px;
    padding-left: 10px;
    font-size: 14px;
    color: #434343;
  }
  input[type="password"] {
    font: small-caption;
    font-size: 30px;
  }
`;
