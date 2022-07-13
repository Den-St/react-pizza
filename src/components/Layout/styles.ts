import styled from "styled-components";
import {Link} from "react-router-dom";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f6f5f5;
`;

export const Main = styled.main`

`;
export const Pain = styled.div`
  padding-bottom: 50px;
  
  max-width: 1320px;
  margin: 10px auto 22px auto;
  font-family: Calibri;
  &>span{
    font-size: 14px;
    font-weight: bold;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  z-index: 10 ;
`;

export const HeaderTopContainer = styled.div`
  width:100%;
  height: 50px;
  background-color: #4f4f4f;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const HeaderBottomContainer = styled.div<{$fixed:boolean}>`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: #222;
  position: ${({$fixed}) => $fixed ? `fixed` : `static`};
  top:0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopPartContent = styled.div`
  max-width: 1320px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const PhoneContainer = styled.div`
    width: 290px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  &>svg{
    width: 15px;
    height: 30px;
    padding-right: 20px;
    padding-bottom: 5px;
    
  }
`;

export const PhoneNumber = styled.a`
  color: #dcdcdc;
  font-size: 20px;
  text-decoration: none;
  font-weight: 400;
  box-sizing: border-box;
  font-family: Roboto Condensed,sans-serif;
  padding-top: 3px;
`;

export const LocationContainer = styled.div`
  width: 315px;
  height: 30px;
  box-sizing: border-box;
  padding: 5px 0px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Calibri;
  cursor: pointer;
  
  &>svg{
    width: 14px;
    height: 20px;
    margin-right: 21px;
    fill:#a7a7a7;
    stroke: #a7a7a7;
  }
  &:hover{
    &>svg{
      width: 14px;
      height: 20px;
      margin-right: 21px;
      fill:white;
    }
    color: white;
  }
`;

export const Location = styled.a`
  font-size: 18px;
  color: #fff;
  opacity: .5;
  text-decoration: underline;
  cursor: pointer;
`;

export const TopPartRightBar = styled.div`
  width: 315px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LanguageContainer = styled.div<{$isActiveLanguage:boolean}>`
    width: 150px;
    height: 30px;
    box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  cursor: pointer;

  position: relative;
  background-color: ${({$isActiveLanguage}) => $isActiveLanguage ? `#212121` : `transparent`};
  &:hover{
    background-color: #212121;
  }
  &>svg{
    transition: 0.4s;
    width: 14px;
    height: 20px;
    padding-right: 10px;
    position: ${({$isActiveLanguage}) => $isActiveLanguage && `absolute`};
    right: ${({$isActiveLanguage}) => $isActiveLanguage && `8px`};
    transform: ${({$isActiveLanguage}) => $isActiveLanguage && `rotate(180deg)`};
  }
`;
export const Language = styled.span`
  font-family: Open Sans,sans-serif;
  font-weight: 700; 
  padding-left: 10px;
  font-size: 14px;
  color: white;
`;

export const LogInButton = styled.button`
  width: 147px;
  height: 30px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #cacaca;
  cursor: pointer;
  font-weight: 700;
  font-family: Open Sans,sans-serif;
  font-size: 14px;
  transition: 0.3s;
  &:hover{
    background-color: white;
  }
`;

export const FakeDiv = styled.div`
 width: 315px;
  height: 30px;
`;



export const BottomPartContent = styled.div`
  max-width: 1320px;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const LogoContainer = styled.div`
  width: 315px;
  height: 70px;
  box-sizing: border-box;
  padding-right: 111px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoLink = styled(Link)`
    width: 204px;
    height: 32px;
`;

export const Menu = styled.div`
  width: 55%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-right: -10px;
`;

export const MenuLink = styled(Link)<{$isBold:boolean}>`
  font-family: Calibri;
    width: 130px;
    height: 50px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: .05em;
  text-decoration: none;
  &:hover{
    font-weight: bolder;
  }
  font-weight:500;
  font-weight: ${({$isBold}) => $isBold && `bolder`};
`;

export const CartContainer = styled.div`
  width: 315px;
  height: 70px;
  box-sizing: border-box;
  display: flex;

  align-items: center;
  cursor: pointer;
  font-family: Calibri;
`;

export const CartWrapper = styled.div`
  max-width: 315px;
  height: 50px;
  border-radius: 30px;
  background-color: white;
  padding-right: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PizzasNumberContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4f4f4f;
  margin-left: 3px;
  &>svg{
    width: 16px;
    height: 16px;
    fill: white;
  }
`;

export const PizzasNumber = styled.span`
  height: 14px;
  font-size: 14px;
  color: white;
  font-weight: bolder;
`;

export const TotalPrice = styled.span`
  text-align: center;
  width: 114px;
  height: 18px;
  font-size: 18px;
  font-weight: bold;
  font-family: Calibri;
  color: #4f4f4f;
  margin: 0 15px;
  transition: 0.3s;
  &:hover{
    color: black;
  }
`;

export const MakeOrderButton = styled.button`
  width: 143px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border:none;
  outline: none;
  border-radius: 25px;
  background-color: #e31837;
  color: white;
  font-family: Calibri;
  font-weight: bold;

`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 345px;
  padding: 45px 30px 30px 30px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

export const MainContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 45px;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  &>svg{
    position: absolute;
    top: 17px;
    left: -35px;
    fill: red;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 69px;
`;

export const Title = styled.span`
  font-size: 1em;
  color: white;
`;

export const MenuItem = styled.span`
  color: #8d8d8d;
  font-size: 17px;
  font-family: Calibri;
  width: 100%;
  cursor:pointer;
  transition: 0.3s;
  margin: 5px 0px;
  &:hover{
    color: white;
  }
`;

export const BottomItemContainer =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const StoreContainer = styled.div`
  height: 45px;
  width: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e2e2e;
  border-radius: 10px;
`;

