import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 12px 30px;
  background-color: #000;
  color: #fff;
  border: 0px;
  border-radius: 10px;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 3px 25px rgb(129, 129, 129);
    }
`;
