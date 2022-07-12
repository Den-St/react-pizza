export enum pizzaTypes {
    meat = 'meat',
    cheesy = 'cheesy',
    vegetable = 'vegetable',
    bestprice = 'bestprice',
    premium = 'premium',
}

export type TPizza = {
    "id": number
    "name": string
    "description": string
    "image": string
    "detailedImage":string,
    "price": number,
    "type":pizzaTypes[],
    "size": number[],
    "priceSize": number[],
    "priceDough": number[][]
    "doughTypesName":string[]
    "sizeTypesName":string[]
}

export enum Sizes {
    standard = 0,
    big = 1
}

export enum Dough{
    standard =0,
    thin = 1,
    phil = 2,
    hotdog = 3
}

export type PizzaInCart = {
    id:number,
    name: string,
    price:number
    description: string
    doughTypeName:string
    sizeTypeName:string
}