import styled from "styled-components";
import {Link} from "react-router-dom";

export const PizzaItemContainer = styled.div` 
    width: 315px;
  height: 504px;
  box-sizing: border-box;
`;

export const PizzaItemWrapper =styled.div`
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, .1);
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    box-shadow: 0 0 15px rgb(0, 0, 0);
    & img {
      transform: scale(1.03);
    }
  }
`;

export const PizzaImageContainer = styled.div`
  width: 100%;
  height: 176px;
  border-radius: 20px;
  overflow: hidden;
`;

export const PizzaImage = styled.img`
  transition: 0.5s all;
  width: 100%;
  height: 100%;
`;

export const PizzaDescriptionContainer = styled.div`
  width: 100%;
  height: 306px;
  display: flex;
  flex-direction: column;
`;

export const PizzaName = styled(Link)`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: .05em;
  text-decoration: none;
  color: #222;
`;

export const PizzaRecipeContainer = styled.div`
  margin-top: 5px;
  height: 80px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`;

export const PizzaRecipe = styled.span`
  font-size: 14px;
  color: #4f4f4f;
`;

export const ChangeRecipe = styled(Link)`
  font-size: 13px;
  font-weight: 600;
  color: #4f4f4f;
  text-decoration: underline;
`;

export const PizzaSizes = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 15px;
  box-sizing: border-box;

  &>button{
    cursor: pointer;
    width: 50%;
    height: 100%;
    border-radius: 15px;
    border: none;
    outline: none;
  }
`;

export const PizzaPickSize = styled.button<{$isPicked:boolean}>`
  background-color: ${({$isPicked}) => $isPicked ? `#4f4f4f` : `white`};
  color: ${({$isPicked}) => !$isPicked ? `#4f4f4f` : `white`};
`;


export const PizzaDough = styled.div`
  margin-top: 15px;

  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  &>button{
    width: 141.5px;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

export const PizzaPickDough = styled.button<{$isPicked:boolean}>`
  background-color: ${({$isPicked}) => $isPicked ? `#4f4f4f` : `white`};
  color: ${({$isPicked}) => !$isPicked ? `#4f4f4f` : `white`};
`;




export const BottomDescription = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
`;

export const PizzaPrice = styled.div`
  width: 141.5px;
  height: 100%;
  display: flex;
  padding-left: 10px;
  justify-content: left;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
`;
export const Grn = styled.span`
  font-size: 11px;
  margin-left: 5px;
  font-weight: 700;
  line-height:  18px;
`;

export const PizzaAddButton = styled.button`
  width: 141.5px;
  height: 50px;
  background-color: #e31837;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Open Sans,sans-serif;
  border: none;
  outline: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const NumberContainer = styled.div`
    width: 140px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: white;
  &>button{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 14px;
    font-weight: bolder;
  }
`;

export const Plus = styled.button``;
export const Minus = styled.button``;

export const Count = styled.span`
  font-weight: bolder;
  font-size: 20px;
`;