import styled from '@emotion/styled'

export const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 1.5px;
`;

export const Text = styled.p`
    font-size: 22px;
    letter-spacing: 1.5px;
    margin-top: 32px;
`;

export const Button = styled.button`
  margin-top: 32px;
  padding: 18px 30px;
  background-color: #7f96ff;
  color: #fff;
  border: 0px;
  border-radius: 10px;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 3px 8px #7f96ff;
    }
`;

export const ContentLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 70px 0px;
`;

export const ContentCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
`;

export const Image = styled.img`
    width: 500px;
    @media only screen and (max-width: 768px) {
        width: 400px;
    }
`;

export const Card = styled.div`
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,.08);
    transition: 0.3s;
    &:hover {
        transform: scale(0.9);
        box-shadow: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
    @media only screen and (max-width: 768px) {
        margin-bottom: 24px;
    }
`;

export const CardIcon = styled.h2`
    font-size: 48px;
    color: #7f96ff;
`;

export const CardTitle = styled.h2`
    font-size: 24px;
    font-weight: semibold;
    letter-spacing: 1px;
`;

export const CardContent = styled.p`
    font-size: 16px;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 24px;
`;

export const CardPrice = styled.h3`
    font-size: 30px;
    font-weight: semibold;
    letter-spacing: 1px;
    margin-top: 24px;
    color: #7f96ff;
`;

export const CardSmall = styled.small`
    font-size: 14px;
    margin-top: 24px;
    text-align: center;
`;

export const MainPriceCard = styled.div`
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,.08);
    transition: 0.3s;
    transform: scale(1.1);
    &:hover {
        transform: scale(1);
        box-shadow: none;
        border: 2px solid;
        border-color: #7f96ff;
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 80px 24px;
    border-radius: 8px;
    @media only screen and (max-width: 768px) {
        margin-bottom: 24px;
        padding: 24px;
    }
`;

export const PriceCard = styled.div`
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,.08);
    transition: 0.3s;
    &:hover {
        transform: scale(0.9);
        box-shadow: none;
        border: 2px solid;
        border-color: #7f96ff;
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 80px 24px;
    border-radius: 8px;
    @media only screen and (max-width: 768px) {
        margin-bottom: 24px;
        padding: 24px;
    }
`;
