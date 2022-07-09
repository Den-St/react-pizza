import React from "react";
import {PizzaType, PizzasDirectoryContainer} from "./style";
import {pizzaTypes, TPizza} from "../../../types/pizza";
import {PizzaTypesNames} from "../../../helpers/pizza";
import {PizzaItem} from "../../PizzaItem";

type Props = {
    pType:pizzaTypes;
    items:TPizza[];
}

export const PizzasDirectory: React.FC<Props> = ({pType,items}) =>{
    return <PizzasDirectoryContainer>
            <PizzaType>Піца: {PizzaTypesNames[pType]}</PizzaType>
            {items.map(el => <PizzaItem key={el.id} pizza={el}/>)}
    </PizzasDirectoryContainer>
}