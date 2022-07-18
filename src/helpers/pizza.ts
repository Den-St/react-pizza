import {PizzaInCart, pizzaTypes, TPizza} from "../types/pizza";

export const PizzaTypesNames = {
    [pizzaTypes.meat]: 'Мясная',
    [pizzaTypes.cheesy]: 'Сірная',
    [pizzaTypes.vegetable]: 'Овочна',
    [pizzaTypes.bestprice]: 'Краща ціна',
    [pizzaTypes.premium]: 'Преміум'
}

export const compareCartToHome = (args : {pizza1?:TPizza,pizza2?:PizzaInCart,dough?:number,size?:number}) =>{
    const {dough, size, pizza2, pizza1} = args;
    if(dough === undefined || size === undefined || pizza2 === undefined || pizza1 === undefined) {
        console.log("compareCartToHome1",args);
        return false;
    }

    if(pizza1?.id === pizza2?.id && pizza1?.doughTypesName[dough] === pizza2?.doughTypeName && pizza1?.sizeTypesName[size] === pizza2?.sizeTypeName) {
        return true;
    }
    return false;
}

export const comparePizzas = (pizza1?:PizzaInCart,pizza2?:PizzaInCart) =>{
    if(!pizza1 || !pizza2) return false
    if(pizza1.id === pizza2.id && pizza1.doughTypeName === pizza2.doughTypeName && pizza1.sizeTypeName === pizza2.sizeTypeName)return true;
    return false;
}