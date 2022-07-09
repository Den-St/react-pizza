import React, {useEffect, useState} from "react";
import {
    BottomDescription,
    ChangeRecipe,
    Grn,
    PizzaAddButton,
    PizzaDescriptionContainer,
    PizzaDough,
    PizzaImage, PizzaImageContainer,
    PizzaItemContainer,
    PizzaItemWrapper,
    PizzaName, PizzaPickDough, PizzaPickSize,
    PizzaPrice,
    PizzaRecipe,
    PizzaSizes,
    Price
} from "./style";
import {CartPizzaItem, Dough, Sizes, TPizza} from "../../types/pizza";
import {useGlobalContext} from "../../context/context";

type props = {
    pizza:TPizza;
}

export const PizzaItem:React.FC<props> = ({pizza}) =>{
    const [size,setSize] = useState(Sizes.standard);
    const [dough,setDough] = useState(Dough.standard);
    const [tempPrice,setTempPrice] = useState(pizza.priceSize?.[0]);
    const { setCart } = useGlobalContext()
    const changeSize = (s:Sizes) => () =>{
        setSize(s);
    }
    const changeDough = (d:Dough) => () =>{
        setDough(d);
    }
    const changeTempPrice = (size:number,dough:number) =>{
        setTempPrice((pizza.priceSize[size] + pizza.priceDough[size][dough]))
    }

    useEffect(()=>{
        changeTempPrice(size,dough);
    },[size,dough]);
    const link = `/pizza/${pizza.id}`;

    const addToCart = () =>{
        const item: CartPizzaItem = { id: pizza.id, price: tempPrice};
        setCart(item);
        // localStorage.setItem('cart', JSON.stringify(item));
    }
    return <PizzaItemContainer>
        <PizzaItemWrapper>
            <PizzaImageContainer>
                <PizzaImage src={pizza.image}/>
            </PizzaImageContainer>
            <PizzaDescriptionContainer>
                <PizzaName to={link}>{pizza.name}</PizzaName>
                <PizzaRecipe>{pizza.description}</PizzaRecipe>
                <ChangeRecipe to={link}>Змінити інгредієнти</ChangeRecipe>
                <PizzaSizes>
                    <PizzaPickSize $isPicked={size === Sizes.standard} onClick={changeSize(Sizes.standard)}>Cтандартна</PizzaPickSize>
                    <PizzaPickSize $isPicked={size === Sizes.big} onClick={changeSize(Sizes.big)}>Велика</PizzaPickSize>
                </PizzaSizes>
                <PizzaDough>
                    <PizzaPickDough $isPicked={dough === Dough.standard} onClick={changeDough(Dough.standard)}>Стандартне</PizzaPickDough>
                    <PizzaPickDough $isPicked={dough === Dough.thin} onClick={changeDough(Dough.thin)}>Тонке</PizzaPickDough>
                    <PizzaPickDough $isPicked={dough === Dough.phil} onClick={changeDough(Dough.phil)}>Борт Філадельфія</PizzaPickDough>
                    <PizzaPickDough $isPicked={dough === Dough.hotdog} onClick={changeDough(Dough.hotdog)}>Борт Хот-Дог</PizzaPickDough>
                </PizzaDough>
                <BottomDescription>
                    <PizzaPrice>
                        <Price>{tempPrice}</Price>
                        <Grn>грн</Grn>
                    </PizzaPrice>
                    <PizzaAddButton onClick={addToCart}>В кошик</PizzaAddButton>
                </BottomDescription>
            </PizzaDescriptionContainer>
        </PizzaItemWrapper>
    </PizzaItemContainer>
}