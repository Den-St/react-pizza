import styled from "styled-components";

export const CartDropListItemContainer = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
  font-family: Calibri;
  transition: 0.3s;
  &:hover {
    background-color: #e0dfdf;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.5px;
  padding-bottom: 5px;
`;

export const CrossButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #00000014;
  outline: none;
  background-color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CrossImg = styled.img`
  width: 27px;
  height: 27px;
`;

export const Recipe = styled.span`
  width: 238px;
  font-size: 14px;
  font-weight: lighter;
  color: #939393;
`;

export const SizeDough = styled.span`
  font-weight: bold;
  font-size: 14px;
  padding-top: 5px;
  color: #8c8b8b;
`;

export const BotContainer = styled.div`
  height: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bolder;
  color: black;
`;

export const Grn = styled.span`
  font-size: 15px;
  font-weight: bolder;
`;

export const NumberContainer = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #e31837;

  & > button {
    background-color: #e31837;
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 1px solid #d25858;
    border-radius: 50%;
    cursor: pointer;
    padding-bottom:5px;
    font-size: 30px;
    &:hover {
      background-color: #d01d39;
    }
  }
`;

export const MinusButton = styled.button`
`;

export const PlusButton = styled.button`
`;

export const Number = styled.span`
  color: white;
`;
