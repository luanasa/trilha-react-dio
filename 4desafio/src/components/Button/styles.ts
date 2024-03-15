import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 42px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#81259D")};
  color: #fff;

  border: 1px solid ${(props) => (props.disabled ? "#ccc" : "#81259D")};
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
