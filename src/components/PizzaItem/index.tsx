import React, { useEffect, useState} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {addedPizzaType} from "../../store/AddedPizza";
import {compareCartToHome} from "../../helpers/pizza";

type props = {
    pizza:TPizza;
}

export const PizzaItem:React.FC<props> = ({pizza}) =>{
    const [size,setSize] = useState(0);
    const [count,setCount] = useState(0);
    const [dough,setDough] = useState(0);
    const [tempPrice,setTempPrice] = useState(pizza.priceSize?.[0]);
    const onDispatch = useDispatch();
    const list = useSelector(state => state) as addedPizzaType;
    const totalcount = list.addedPizza.map(el => compareCartToHome({pizza1:pizza,pizza2:el,dough,size}) ? el.count : '').join('');
    console.log("asdf",list.addedPizza);

    // const minusPizzaAtHome = () =>{
    //     context.minusPizzaAtHome?.(pizza,dough,size,count);
    // }
    const minusPizzaAtHome = () => onDispatch({type:"minusPizzaAtHome",payload:{pizza,parameter:{dough:dough,size:size,count:count}}})

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
        const exist = list.addedPizza.find(el => compareCartToHome({pizza1:pizza,pizza2:el,dough,size}));
        if(exist) {
            exist ? setCount(exist.count) : setCount(0);
        }
            if(!totalcount) setCount(0)
        },
        [totalcount]
    )
    useEffect(()=>{
        changeTempPrice(size,dough);
    },[size,dough]);
    const link = `/pizza/${pizza.id}`;

    const addToCart = () => onDispatch({type: 'addToCart',payload:{addToCart: {pizzaInCart : {id:pizza.id,name:pizza.name,price:tempPrice,description:pizza.description,
                    doughTypeName:pizza.doughTypesName[dough],sizeTypeName:pizza.sizeTypesName[size],count:1}}}});
    // const addToCart = () =>{
    //     context?.addToCart?.({id:pizza.id,name:pizza.name,price:tempPrice,description:pizza.description,
    //         doughTypeName:pizza.doughTypesName[dough],sizeTypeName:pizza.sizeTypesName[size],count:1});
    // }
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
                    {!!count && <NumberContainer>
                        <Minus onClick={minusPizzaAtHome}>-</Minus>
                        <Count>{count}</Count>
                        <Plus onClick={addToCart}>+</Plus>
                    </NumberContainer>}
                </BottomDescription>
            </PizzaDescriptionContainer>
        </PizzaItemWrapper>
    </PizzaItemContainer>
}