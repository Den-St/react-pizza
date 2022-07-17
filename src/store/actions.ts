import {addedPizzaType, parameter} from "./AddedPizza";
import {PizzaInCart, TPizza} from "../types/pizza";
import {compareCartToHome, comparePizzas} from "../helpers/pizza";

type DeletePizzaAtHome = {
    state: addedPizzaType,
    payload?: {pizzaInCart:PizzaInCart,
        pizzaAtHome:TPizza,
        parameter:parameter}
}

type AddToCart = {
    state:addedPizzaType,
    payload?: {pizzaInCart:PizzaInCart},
}

type MinusPizzaAtHome = {
    state:addedPizzaType,
    payload?:{pizzaInCart:PizzaInCart,
        pizzaAtHome:TPizza,
        parameter:parameter}
}

type MinusPizzaInCart = {
    state:addedPizzaType,
    payload?:{
        pizzaInCart:PizzaInCart,
    }
}

type DeletePizza = {
    state:addedPizzaType,
    payload?:{
        pizzaInCart:PizzaInCart,
    }
}

type PlusPizza = {
    state:addedPizzaType,
    payload?:{
        pizzaInCart:PizzaInCart,
    }
}

export const DeletePizzaAtHome = ({state, payload}:DeletePizzaAtHome) => {
    const payload_d = payload;
    const pizzaAtHome_d = payload_d?.pizzaAtHome;
    const parameter_d = payload_d?.parameter;

    const newList = state.addedPizza.filter(el => !compareCartToHome?.({pizza1:pizzaAtHome_d,pizza2:el,dough:parameter_d?.dough,size:parameter_d?.size}));
    return newList
}

export const AddToCart = ({state,payload}:AddToCart) =>{
    const exist = state.addedPizza.find(el => comparePizzas(el,payload?.pizzaInCart));
    const newList = exist ? state.addedPizza.map(el => comparePizzas(el,payload?.pizzaInCart) ? {...el, count: el.count + 1} : el ) : [...state.addedPizza, payload?.pizzaInCart] as PizzaInCart[]
    return newList;
}

export const MinusPizzaAtHome = ({state,payload}:MinusPizzaAtHome) =>{
    const pizzaAtHome = payload?.pizzaAtHome;
    const parameter = payload?.parameter;
    if(!!payload?.parameter.count) {
        const newList = state.addedPizza.map(el => compareCartToHome?.({pizza1:pizzaAtHome,pizza2:el,dough:parameter?.dough,size:parameter?.size}) ? {...el,count: el.count - 1} : el);
        return newList;
    }
    else {
        const newList = DeletePizzaAtHome({state, payload: payload});
        return newList;
    }
}

export const DeletePizzaInCart = ({state,payload}:DeletePizza) =>{
    const pizzaInCart = payload?.pizzaInCart;
    const newList = state.addedPizza.filter(el => !comparePizzas(pizzaInCart,el));
    return newList;
}

export const MinusPizzaInCart = ({state,payload}:MinusPizzaInCart) =>{
    const pizzaInCart = payload?.pizzaInCart;
    if(!!pizzaInCart?.count) {
        const newList = state.addedPizza.map(el => comparePizzas(el,pizzaInCart) ? {...el,count: el.count - 1} : el);
        return newList;
    }
    else return DeletePizzaInCart({state,payload});
}

export const PlusPizza = ({state,payload}:PlusPizza) =>{
    const pizzaInCart = payload?.pizzaInCart;
    const newList = state.addedPizza.map(el => comparePizzas(el,pizzaInCart) ? {...el,count: el.count + 1} : el);
    return newList;
}
