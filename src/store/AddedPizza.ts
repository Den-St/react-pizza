import {PizzaInCart, TPizza} from "../types/pizza";
import {
    AddToCart,
    DeletePizzaAtHome,
    DeletePizzaInCart,
    MinusPizzaAtHome,
    MinusPizzaInCart,
    PlusPizza
} from "./actions";

export interface addedPizzaType {
    addedPizza:PizzaInCart[]
}

const defaultState:addedPizzaType = {
    addedPizza: [],
}

export type parameter = {
    dough?:number,
    size?:number,
    count?:number
}

type addToCart = {
    pizzaInCart:PizzaInCart,

}
type minusPizzaAtHome = {
    pizzaAtHome:TPizza,
    parameter:parameter
}

type deletePizzaAtHome = {
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
            return {...state,addedPizza:DeletePizzaInCart({state,payload:action?.payload?.deletePizzaInCart})}
        default:
            return state;
    }
}