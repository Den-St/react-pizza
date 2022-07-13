import React from "react";
import {
    SideMenuBottomLink,
    SideMenuBottomWrapper,
    SideMenuContainer,
    SideMenuLink,
    SideMenuTopWrapper,
    SideMenuWrapper
} from "./style";
import {SvgIcon} from "../Icon/SvgIcon";
import {MenuLinks, SideMenuBottomLinks} from "../../../constants";

type sideMenuProps = {
    isMenuOpened:boolean
}

export const SideMenu:React.FC<sideMenuProps> = ({isMenuOpened}) =>{
    return <SideMenuContainer $isMenuOpened={isMenuOpened}>
        <SideMenuWrapper>

            <SideMenuTopWrapper>
                {MenuLinks.map((el) =>
                <SideMenuLink to={el.link} key={el.category}>
                    <SvgIcon viewBox={'0 0 100 100'} type={'stock'}/>
                    <span>{el.category}</span>
                </SideMenuLink>)}
            </SideMenuTopWrapper>


            <SideMenuBottomWrapper>
                {SideMenuBottomLinks.map((el) =>
                <SideMenuBottomLink to={el.link} key={el.category}>
                    <span>{el.category}</span>
                </SideMenuBottomLink>)}
            </SideMenuBottomWrapper>

        </SideMenuWrapper>
    </SideMenuContainer>
}
