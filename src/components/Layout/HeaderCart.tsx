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
    const [sum,setSum] = useState(0);
    const [wholePizzaNumber,setWholePizzaNumber] = useState(0);
    const cartList = useContext(PizzaContext).list;
    const totalcount = cartList.map(el => el.count).join('');

    const toggleCart = () =>{
        if(wholePizzaNumber){setIsCart(prevState => !prevState);}
    }
    console.log("total",totalcount)
    useEffect(
        ()=>{
            setList(cartList);
            setSum(cartList.reduce((partialSum, a) => partialSum + a.price*a.count, 0));
            setWholePizzaNumber(cartList.reduce((partialNumber:number,pizza) => partialNumber + pizza.count, 0));
        },
        [totalcount]
    )
    useEffect(()=>{if(!wholePizzaNumber) setIsCart(false)}
        ,[wholePizzaNumber])

    return <CartContainer>
        <CartWrapper onClick={toggleCart}>
            <PizzasNumberContainer>
                {wholePizzaNumber < 10 && <PizzasNumber>0{wholePizzaNumber}</PizzasNumber>}
                {wholePizzaNumber >= 10 && <PizzasNumber>{wholePizzaNumber}</PizzasNumber>}
                <SvgIcon type={'cart'} viewBox={'0 0 510 510'}/>
            </PizzasNumberContainer>
            {!!wholePizzaNumber && <TotalPrice>{sum} грн</TotalPrice>}
            <MakeOrderButton>Замовити</MakeOrderButton>
        </CartWrapper>
        {isCart && <DropList cart={true}>{list.map(el => !!el.count ? <CartDropListItem key={el.id} pizza={el}/> : null)}</DropList>}
    </CartContainer>
}