import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: any;
}

const Input = ({ label, register, ...rest }: Props) => {
  return (
    <SInput>
      {label && <span className="label">{label}</span>}
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
