import React, {useContext} from "react";
import {
    BotContainer, CartDropListItemContainer,
    CrossButton, CrossImg, Grn, MinusButton,
    Name, Number, NumberContainer, PlusButton,
    Price,
    Recipe,
    SizeDough,
    TopContainer
} from "./style";
import {PizzaInCart} from "../../../types/pizza";
import {PizzaContext} from "../../../App";

type CartDropListItemProps = {
    pizza:PizzaInCart
}

export const CartDropListItem:React.FC<CartDropListItemProps> = ({pizza}) =>{
    const cart = useContext(PizzaContext);
    const minusPizzaInCart = () =>{
        cart.minusPizzaInCart?.(pizza);
    }
    const addToCart = () =>{
        cart.plusPizza?.(pizza);
    }
    const deletePizza = () =>{
        cart.deletePizza?.(pizza);
    }
    return <CartDropListItemContainer>
        <TopContainer>
            <Name>{pizza.name}</Name>
            <CrossButton onClick={deletePizza}><CrossImg src={"https://img.icons8.com/ios-filled/100/multiply.png"} alt={'cross'}/></CrossButton>
        </TopContainer>
        <Recipe>{pizza.description}</Recipe>
        <SizeDough>{pizza.sizeTypeName} {pizza.doughTypeName}</SizeDough>
        <BotContainer>
            <Price>{pizza.price} <Grn>грн.</Grn></Price>
            <NumberContainer>
                <MinusButton onClick={minusPizzaInCart}>-</MinusButton>
                <Number>{pizza.count}</Number>
                <PlusButton onClick={addToCart}>+</PlusButton>
            </NumberContainer>
        </BotContainer>
    </CartDropListItemContainer>
}