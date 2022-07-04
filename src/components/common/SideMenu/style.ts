import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

const breatheAnimation = keyframes`
 0% { right: -200px}
 100% { right: 0}
`

export const SideMenuContainer = styled.div`
  width: 345px;
  height: 100vh;
  box-sizing: border-box;
  border-left: 1px solid gray;
  padding: 40px 30px 0 75px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: fixed;
  top: 70px;
  right: 0;
  z-index: 0;
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
`;

export const SideMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SideMenuTopWrapper = styled.div`
  width: 239px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

export const SideMenuBottomWrapper = styled.div`
  width: 239px;
  height: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 110px;
`;

export const SideMenuLink = styled(Link)`
  width: 239px;
  height: 39px;
  margin-bottom: 22.5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Calibri;
  & > span {
    padding-left: 39px;
    font-size: 1.3em;
    color: #0b0b0b;
  }
  & > svg {
    width: 39px;
    height: 39px;
    box-sizing: border-box;
    fill: black;
  }
  transition:0.1s;
  &:hover {
    & > span {
      transition: 0.2s all;
      color: #c2c0c0;
    }
    &>svg{
      transition: 0.2s all;
      fill: red;
    }
  }
`;

export const SideMenuBottomLink = styled(Link)`
  width: 239px;
  height: 15px;
  margin-bottom: 15px;
  text-decoration: none;
  color: gray;
  font-family: Calibri;
  font-size: 17px;
  font-weight: 100;
  &:hover {
    & > span {
      transition: 0.2s;
      color: black;
    }
  }
`;