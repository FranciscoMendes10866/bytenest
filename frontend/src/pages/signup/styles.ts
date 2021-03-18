import styled from '@emotion/styled'


export const Input = styled.input`
    border: none;
    background-color: #F1F1F1;
    border-radius: 6px;
    font-size: 16px;
    padding: 12px;
    outline: none;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Card = styled.div`
    width: 400px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,.08);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 8px;
`;

export const CardTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-align: center;
    padding-bottom: 24px;
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 178px);
    @media only screen and (max-width: 768px) {
        padding: 20px;
    }
`;

export const SubmitButton = styled.button`
  margin-top: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 83%;
  background-color: #0c090d;
  color: #fff;
  border: 0px;
  border-radius: 10px;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 3px 8px #0c090d;
    }
`;
