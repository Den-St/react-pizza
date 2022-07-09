import {SvgIcon} from "../common/Icon/SvgIcon";
import React, {useEffect, useState} from "react";
import {CartContainer,CartWrapper,PizzasNumberContainer,PizzasNumber,MakeOrderButton,TotalPrice} from './styles'
import {CartPizzaItem} from "../../types/pizza";
import {useGlobalContext} from "../../context/context";

export const HeaderCart =() =>{
    const {cart} = useGlobalContext();
    const [list,setList] = useState<CartPizzaItem[]>([]);
    
    const sum = list.reduce((partialSum, a) => partialSum + a.price, 0);
    // useEffect(() =>{
    //     const itemString = localStorage.getItem('cart');
    //     const itemObject = itemString && JSON.parse(itemString);
    //     setList([itemObject]);
    // },[])
    console.log(cart);
    return <CartContainer>
        <CartWrapper>
            <PizzasNumberContainer>
                <PizzasNumber>{list.length}</PizzasNumber>
                <SvgIcon type={'cart'} viewBox={'0 0 510 510'}/>
            </PizzasNumberContainer>
            {!!list.length && <TotalPrice>{sum} грн</TotalPrice>}
            <MakeOrderButton>Замовити</MakeOrderButton>
        </CartWrapper>
    </CartContainer>
}