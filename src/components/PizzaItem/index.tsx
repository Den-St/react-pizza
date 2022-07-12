import React, {useContext, useEffect, useState} from "react";
import {
    BottomDescription,
    ChangeRecipe, Count,
    Grn, Minus, NumberContainer,
    PizzaAddButton,
    PizzaDescriptionContainer,
    PizzaDough,
    PizzaImage, PizzaImageContainer,
    PizzaItemContainer,
    PizzaItemWrapper,
    PizzaName, PizzaPickDough, PizzaPickSize,
    PizzaPrice,
    PizzaRecipe, PizzaRecipeContainer,
    PizzaSizes, Plus,
    Price
} from "./style";
import {Dough, Sizes, TPizza} from "../../types/pizza";
import {PizzaContext} from "../../App";

type props = {
    pizza:TPizza;
}

export const PizzaItem:React.FC<props> = ({pizza}) =>{
    const [size,setSize] = useState(Sizes.standard);
    const [count,setCount] = useState(0);
    const [dough,setDough] = useState(Dough.standard);
    const [tempPrice,setTempPrice] = useState(pizza.priceSize?.[0]);
    const context = useContext(PizzaContext);
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
        setCount(prev=>++prev)
        context?.addToCart?.({id:pizza.id,name:pizza.name,price:tempPrice,description:pizza.description,
            doughTypeName:pizza.doughTypesName[dough],sizeTypeName:pizza.sizeTypesName[size]});
    }
    return <PizzaItemContainer>
        <PizzaItemWrapper>
            <PizzaImageContainer>
                <PizzaImage src={pizza.image}/>
            </PizzaImageContainer>
            <PizzaDescriptionContainer>
                <PizzaName to={link}>{pizza.name}</PizzaName>
                <PizzaRecipeContainer>
                    <PizzaRecipe>{pizza.description}</PizzaRecipe>
                    <ChangeRecipe to={link}>Змінити інгредієнти</ChangeRecipe>
                </PizzaRecipeContainer>
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
                    {!count && <PizzaAddButton onClick={addToCart}>В кошик</PizzaAddButton>}
                    {count>0 && <NumberContainer>
                        <Plus>-</Plus>
                        <Count>{count}</Count>
                        <Minus>+</Minus>
                    </NumberContainer>}
                </BottomDescription>
            </PizzaDescriptionContainer>
        </PizzaItemWrapper>
    </PizzaItemContainer>
}