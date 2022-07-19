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

type optionType = {
    value:string,
    label:string
}

export const optionsTime = ():optionType[] =>{
    const optionsTimeArr:optionType[] = [];
    for(let hours = 0;hours < 24;hours++){
        for(let minutes = 0;minutes<=60;minutes+=10){
            if (hours < 10 && minutes < 10){
                optionsTimeArr.push({value:"0"+hours+":0"+minutes,label:"0"+hours+":0"+minutes});
            }
            else if (hours < 10 && minutes >= 10){
                optionsTimeArr.push({value:"0"+hours+":"+minutes,label:"0"+hours+":"+minutes});
            }
            else if (hours > 10 && minutes < 10){
                optionsTimeArr.push({value:hours+":0"+minutes,label:hours+":0"+minutes});
            }
            else if (hours > 10 && minutes > 10){
                optionsTimeArr.push({value:hours+":"+minutes,label:hours+":"+minutes});
            }
            else optionsTimeArr.push({value:"",label:""});
        }
    }
    if(!optionsTimeArr[0]) optionsTimeArr.push({value:"",label:""});

    return [{value:"",label:""}];
}

export const optionsDay = [
    { value: 'Сьогодні', label: 'Сьогодні' },
    { value: '20.07 - СР', label: '20.07 - СР' },
    { value: '21.07 - ЧТ', label: '21.07 - ЧТ' },
    { value: '22.07 - ПТ', label: '22.07 - ПТ' },
    { value: '23.07 - СБ', label: '23.07 - СБ' },
    { value: '24.07 - ВС', label: '24.07 - ВС' },
    { value: '25.07 - ПН', label: '25.07 - ПН' },
    { value: '26.07 - ВТ', label: '26.07 - ВТ' },

]