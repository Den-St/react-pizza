import React from "react";
import {useParams} from "react-router-dom";
import data from '../assets/db.json';
import pizzasList from "../assets/db.json";
import {pizzaTypes, TPizza} from "../types/pizza";
import {PizzasDirectory} from "../components/Home/PizzasDirectory";


export const Category = () => {
    const params = useParams();
    const type:string = String(params?.type);
    const typeOfPizza = pizzasList.items.filter(el => el.type.includes(type)) as TPizza[];

    return <PizzasDirectory pType={type as pizzaTypes} items={typeOfPizza} />

}