import React from "react";
import {useParams} from "react-router-dom";
import pizzasList from '../assets/db.json'
import {pizzaTypes, TPizza} from "../types/pizza";
import {DetailedPizzaPage} from "../components/DetailedPizzaPage";

export const DetailedPizza = () => {
    const params = useParams();
    const id = params?.id
    const item = pizzasList.items.filter(el => el.id === Number(id))?.[0] as TPizza;
    return <DetailedPizzaPage item={item}/>
}