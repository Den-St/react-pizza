import {LogoLink} from "./styles";
import React from "react";
import {LogoContainer,
        Menu,MenuLink
} from './styles'
import {DominosSvg} from "../common/Icon/paths";
import {useLocation} from "react-router-dom";
import {MenuLinks} from "../../constants";

export const Logo = () =>{
    return <LogoContainer>
        <LogoLink to={'/'}>
            <DominosSvg/>
        </LogoLink>
    </LogoContainer>
}

export const HeaderMenu = () =>{
    const location = useLocation();
    return <Menu>
        {MenuLinks.map((el,index) =>
            <MenuLink to={el.link} key={index} $isBold={location.pathname === el.link}>
                {el.category}
            </MenuLink>
        )}
    </Menu>
}