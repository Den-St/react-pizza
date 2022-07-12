import {SvgIcon} from "../common/Icon/SvgIcon";
import React, {useContext, useEffect, useState} from "react";
import {CartContainer,CartWrapper,PizzasNumberContainer,PizzasNumber,MakeOrderButton,TotalPrice} from './styles'
import {PizzaContext} from "../../App";
import {PizzaInCart} from "../../types/pizza";
import {DropList} from "../common/DropListLanguage";
import {CartDropListItem} from "../common/CartDropListItem";

export const HeaderCart = () =>{
    const [list,setList] = useState<PizzaInCart[]>([]);
    const [isCart,setIsCart] = useState(false)
    const toggleCart = () =>{
        if(list.length){setIsCart(prevState => !prevState);}
    }
    const cartList = useContext(PizzaContext).list
    const sum = list.reduce((partialSum, a) => partialSum + a.price, 0);
    useEffect(
        ()=>{setList(cartList);setIsCart(false)},
        [cartList]
    )
    return <CartContainer>
        <CartWrapper onClick={toggleCart}>
            <PizzasNumberContainer>
                <PizzasNumber>{list.length}</PizzasNumber>
                <SvgIcon type={'cart'} viewBox={'0 0 510 510'}/>
            </PizzasNumberContainer>
            {!!list.length && <TotalPrice>{sum} грн</TotalPrice>}
            <MakeOrderButton>Замовити</MakeOrderButton>
        </CartWrapper>
        {isCart && <DropList cart={true}>{list.map(el => <CartDropListItem key={el.id} pizza={el} />)}</DropList>}
    </CartContainer>
}