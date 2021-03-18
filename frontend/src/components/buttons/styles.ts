import styled from "@emotion/styled";

export const PrimaryButton = styled.button`
  padding: 12px 12px;
  background-color: #0c090d;
  color: #fff;
  border: 0px;
  border-radius: 10px;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 8px #0c090d;
  }
`;

export const DangerButton = styled.button`
  padding: 12px 12px;
  background-color: #7f96ff;
  color: #fff;
  border: 0px;
  border-radius: 10px;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 8px #7f96ff;
  }
`;
