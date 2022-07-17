import React from "react";
import {Pain} from "../Layout/styles";
import {Slider} from "./Slider";
import {PizzasDirectory} from "./PizzasDirectory";
import {pizzaTypes, TPizza} from "../../types/pizza";
import pizzasList from '../../assets/db.json'
import {useDispatch} from "react-redux";

export const HomePage = () => {
    const meat = pizzasList.items.filter(el => el.type.includes(pizzaTypes.meat)) as TPizza[];
    const cheesy = pizzasList.items.filter(el => el.type.includes(pizzaTypes.cheesy)) as TPizza[];
    const vegetable = pizzasList.items.filter(el => el.type.includes(pizzaTypes.vegetable)) as TPizza[];
    const bestprice = pizzasList.items.filter(el => el.type.includes(pizzaTypes.bestprice)) as TPizza[];
    const premium = pizzasList.items.filter(el => el.type.includes(pizzaTypes.premium)) as TPizza[];

    const onDispatch = useDispatch();
    const onAdd = () => onDispatch({type: 'addToCart'})
    return <Pain>
        <Slider/>
        <hr/>
        <button onClick={onAdd}>dispatch</button>
        <hr/>
        <PizzasDirectory pType={pizzaTypes.meat} items={meat} />
        <PizzasDirectory pType={pizzaTypes.cheesy} items={cheesy} />
        <PizzasDirectory pType={pizzaTypes.vegetable} items={vegetable} />
        <PizzasDirectory pType={pizzaTypes.bestprice} items={bestprice} />
        <PizzasDirectory pType={pizzaTypes.premium} items={premium} />
        <span>* вага щойно приготовленого продукту. Вага у замовленнях на доставку може відрізнятися через дегідратацію продукту.</span>
    </Pain>
}