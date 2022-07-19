import React from "react";
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
import {useDispatch} from "react-redux";

type CartDropListItemProps = {
    pizza:PizzaInCart
}

export const CartDropListItem:React.FC<CartDropListItemProps> = ({pizza}) =>{
    //const cart = useContext(PizzaContext);
    const onDispatch = useDispatch();
    // const minusPizzaInCart = () =>{
    //     cart.minusPizzaInCart?.(pizza);
    // }
    const minusPizzaInCart = () => onDispatch({type:"minusPizzaInCart",payload:{minusPizzaInCart:{pizzaInCart:pizza}}});

    // const addToCart = () =>{
    //     cart.plusPizza?.(pizza);
    // }
    const addToCart = () => onDispatch({type:"plusPizzaInCart",payload:{plusPizzaInCart:{pizzaInCart:pizza}}});
    // const deletePizza = () =>{
    //     cart.deletePizza?.(pizza);
    // }
    const deletePizza = () => onDispatch({type:"deletePizzaInCart",payload:{deletePizzaInCart:{pizzaInCart:pizza}}});

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
                {pizza.count < 10 && <Number>0{pizza.count}</Number>}
                {pizza.count >= 10 && <Number>{pizza.count}</Number>}
                <PlusButton onClick={addToCart}>+</PlusButton>
            </NumberContainer>
        </BotContainer>
    </CartDropListItemContainer>
}