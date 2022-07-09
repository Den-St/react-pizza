import React from 'react';
import {
    BottomContainer,
    BottomItemContainer,
    FooterContainer,
    MainContainer,
    MenuItem, StoreContainer,
    Title,
    TopContainer
} from "./styles";
import {SvgIcon} from "../common/Icon/SvgIcon";
import {DominosSvg} from "../common/Icon/paths";


export const Footer = () =>{
    return <FooterContainer>
        <MainContainer>
            <TopContainer>
                <Title>DOMINO'S PIZZA</Title>
                <MenuItem>Меню</MenuItem>
                <MenuItem>Піцерії</MenuItem>
                <MenuItem>Франчайзінг</MenuItem>
                <MenuItem>Інформація щодо вмісту алергенів та харчова цінність</MenuItem>
                <MenuItem>Політика безпеки харчових продуктів</MenuItem>
            </TopContainer>
            <BottomContainer>
                <MenuItem>САЙТ РОЗРОБЛЕНИЙ DAXAO.GG</MenuItem>
            </BottomContainer>
        </MainContainer>

        <MainContainer>
            <TopContainer>
                <SvgIcon type={'message'} viewBox="0 0 473 473" width={'24px'} height={'24px'}/>
                <Title>СЕРВІСИ</Title>
                <MenuItem>Pizza Tracker</MenuItem>
            </TopContainer>
            <BottomContainer>
                <MenuItem>ЗАВАНТАЖИТИ ДОДАТОК</MenuItem>
                <BottomItemContainer>
                    <StoreContainer>
                        <SvgIcon type={'appstore'} width={'135px'} height={'40px'} viewBox={"0 0 135 40"} fill={'white'}/>
                    </StoreContainer>
                    <StoreContainer>
                        <SvgIcon type={'google'} width={'97px'} height={'27px'} viewBox={"0 0 110 30"} fill={'white'}/>
                    </StoreContainer>
                </BottomItemContainer>
            </BottomContainer>
        </MainContainer>

        <MainContainer>
            <TopContainer>
                <Title>КОНТАКТИ</Title>
                <MenuItem>info@dominos.ua</MenuItem>
                <MenuItem>Залишити відгук</MenuItem>
                <MenuItem>048 702 11 11</MenuItem>
            </TopContainer>
            <BottomContainer>
                <MenuItem>ПІДТРИМУВАНІ ПЛАТЕЖІ</MenuItem>
                <BottomItemContainer>
                   <SvgIcon type={'visa'} width={'60px'} height={'30px'} fill={'white'} viewBox="22 10 5 27"/>
                    <SvgIcon type={'master'} width={'67px'} height={'45px'} viewBox={"0 0 256 199"} />
                </BottomItemContainer>
            </BottomContainer>
        </MainContainer>

        <MainContainer>
            <TopContainer>
                <DominosSvg/>
                <MenuItem>© 2022 Domino's Pizza Україна</MenuItem>
            </TopContainer>
            <BottomContainer>
                <MenuItem>СЛІДКУВАТИ</MenuItem>
                <BottomItemContainer>
                    <SvgIcon type={'facebook'} width={'22.5px'} height={'22.5px'}  fill={'white'} viewBox={"0 0 470.513 470.513"} margin={'10px 5px 0px 0px'}/>
                    <SvgIcon type={'youtube'} width={'22.5px'} height={'22.5px'} fill={'white'} viewBox="0 0 310 310" margin={'10px 5px 0px 0px'}/>
                    <SvgIcon type={'instagram'} width={'22.5px'} height={'22.5px'} fill={'white'} viewBox="0 0 169.063 169.063" margin={'10px 5px 0px 0px'}/>
                    <SvgIcon type={'telegram'} width={'22.5px'} height={'22.5px'} fill={'white'} viewBox="0 0 24 24" margin={'10px 0px 0px 0px'}/>
                </BottomItemContainer>
            </BottomContainer>
        </MainContainer>
    </FooterContainer>
}