import {SvgIcon} from "../common/Icon/SvgIcon";
import React from "react";
import {CartContainer,CartWrapper,PizzasNumberContainer,PizzasNumber,MakeOrderButton,TotalPrice} from './styles'

export const HeaderCart =() =>{
    return <CartContainer>
        <CartWrapper>
            <PizzasNumberContainer>
                <PizzasNumber>12</PizzasNumber>
                <SvgIcon type={'cart'} viewBox={'0 0 510 510'}/>
            </PizzasNumberContainer>
            <TotalPrice>1111 грн</TotalPrice>
            <MakeOrderButton>Замовити</MakeOrderButton>
        </CartWrapper>
    </CartContainer>
}