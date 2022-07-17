import {PizzaInCart, TPizza} from "../types/pizza";
import {AddToCart, DeletePizzaAtHome, MinusPizzaAtHome, MinusPizzaInCart, PlusPizza} from "./actions";

export interface addedPizzaType {
    addedPizza:PizzaInCart[]
}

const defaultState:addedPizzaType = {
    addedPizza: [],
}

type comparePizzas = {
    pizzaInCart:PizzaInCart,
    pizzaAtHome:TPizza
}

export type parameter = {
    dough?:number,
    size?:number,
    count?:number
}

type compareCartToHome = {
    pizzaInCart:PizzaInCart,
    pizzaAtHome:TPizza,
    parameter:parameter
}

type addToCart = {
    pizzaInCart:PizzaInCart,

}
type minusPizzaAtHome = {
    pizzaInCart:PizzaInCart,
    pizzaAtHome:TPizza,
    parameter:parameter
}

type deletePizzaAtHome = {
    pizzaInCart:PizzaInCart,
    pizzaAtHome:TPizza,
    parameter:parameter
}

type minusPizzaInCart = {
    pizzaInCart:PizzaInCart,
}

type plusPizza = {
    pizzaInCart:PizzaInCart,
}

type deletePizzaInCart = {
    pizzaInCart:PizzaInCart,
}

type actionType = {
    type: 'addToCart' | 'minusPizzaAtHome' | 'deletePizzaAtHome' | 'minusPizzaInCart' | 'plusPizza' | 'deletePizzaInCart',
    payload:{
        addToCart?: addToCart;
        minusPizzaAtHome?: minusPizzaAtHome;
        deletePizzaAtHome?: deletePizzaAtHome;
        minusPizzaInCart?:minusPizzaInCart;
        plusPizza?:plusPizza;
        deletePizzaInCart?:deletePizzaInCart;
    }
}


const comparePizzas = (pizza1?:PizzaInCart,pizza2?:PizzaInCart) =>{
    if(!pizza1 || !pizza2) return false
    if(pizza1.id === pizza2.id && pizza1.doughTypeName === pizza2.doughTypeName && pizza1.sizeTypeName === pizza2.sizeTypeName)return true;
    return false;
}
const compareCartToHome = (args : {pizza1?:TPizza,pizza2?:PizzaInCart,dough?:number,size?:number}) =>{
    const {dough, size, pizza2, pizza1} = args;
    if(!dough || !size || !pizza2 || !pizza1) return false;

    if(pizza1?.id === pizza2?.id && pizza1?.doughTypesName[dough] === pizza2?.doughTypeName && pizza1?.sizeTypesName[size] === pizza2?.sizeTypeName) {
        return true;
    }
    return false;
}
const addToCart = (pizza:PizzaInCart) =>{
    const exist = defaultState.addedPizza.find(el => comparePizzas(el,pizza));
    const newList = exist ? defaultState.addedPizza.map(el => comparePizzas(el,pizza) ? {...el, count: el.count + 1} : el ) : [...defaultState.addedPizza, pizza]
    return {...defaultState,addedPizza:newList};
}
const minusPizzaAtHome = (pizza:TPizza,dough:number,size:number,count:number) =>{
    if(!!count) {
        const newList = defaultState.addedPizza.map(el => compareCartToHome?.({pizza1:pizza,pizza2:el,dough,size}) ? {...el,count: el.count - 1} : el);
        return {...defaultState,addedPizza:newList};
    }
    else deletePizzaAtHome(pizza,dough,size);
}
const deletePizzaAtHome = (pizza:TPizza,dough:number,size:number) =>{
    const newList = defaultState.addedPizza.filter(el => !compareCartToHome?.({pizza1:pizza,pizza2:el,dough,size}));
    return {...defaultState,addedPizza:newList};
}
const minusPizzaInCart = (pizza:PizzaInCart) =>{
    if(!!pizza.count) {
        const newList = defaultState.addedPizza.map(el => comparePizzas(el,pizza) ? {...el,count: el.count - 1} : el);
        return {...defaultState,addedPizza:newList}
    }
    else deletePizzaInCart(pizza);
}
const plusPizza = (pizza:PizzaInCart) =>{
    const newList = defaultState.addedPizza.map(el => comparePizzas(el,pizza) ? {...el,count: el.count + 1} : el);
    return {...defaultState,addedPizza:newList};
}
const deletePizzaInCart = (pizza:PizzaInCart) =>{
    const newList = defaultState.addedPizza.filter(el => !comparePizzas(pizza,el));
    return {...defaultState,addedPizza:newList};
}


export const pizzaReducer = (state = defaultState,action: actionType): addedPizzaType =>{
    switch (action.type) {
        case "addToCart":
            return {...state, addedPizza: AddToCart({state,payload: action?.payload?.addToCart})};
        case "minusPizzaAtHome":
            return {...state, addedPizza: MinusPizzaAtHome({state,payload: action?.payload?.minusPizzaAtHome})};
        case "deletePizzaAtHome":
            return {...state,addedPizza:DeletePizzaAtHome({state, payload: action?.payload?.deletePizzaAtHome})};
        case "minusPizzaInCart":
            return {...state,addedPizza:MinusPizzaInCart({state, payload: action?.payload?.minusPizzaInCart})};
        case "plusPizza":
            return {...state,addedPizza:PlusPizza({state,payload:action?.payload?.plusPizza})};
        case "deletePizzaInCart":
            break;
        default:
            return state;
    }
}