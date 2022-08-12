import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form";
import styled from "styled-components";

type Props = {
  name: string;
  errors: FieldErrors | any;
};

const MessageError = ({ name, errors }: Props) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <SMessage>{message}</SMessage>}
    />
  );
};

export default MessageError;

const SMessage = styled.p`
  margin-top: 3px;
  font-size: 12px;
  color: red;
  .icon {
  }
`;
