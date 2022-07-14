import React, {createContext, useState} from 'react';
import {Layout} from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import {Home} from "./containers/Home";
import {Cart} from "./containers/Cart";
import {DetailedPizza} from "./containers/DetailedPizza";
import {Normalize} from "styled-normalize";
import {Category} from "./containers/Category";
import {PizzaInCart, TPizza} from "./types/pizza";

export type PizzaContextT = {
    list: PizzaInCart[]
    addToCart?: (pizza:PizzaInCart) => void,
    deletePizza?:(pizza:PizzaInCart) => void,
    plusPizza?:(pizza:PizzaInCart) => void,
    minusPizzaInCart?:(pizza:PizzaInCart) => void,
    compareCartToHome?:(pizza1:TPizza,pizza2:PizzaInCart,dough:number,size:number) => void,
    minusPizzaAtHome?:(pizza:TPizza,dough:number,size:number,count:number) => void
}
export const PizzaContext = React.createContext<PizzaContextT>({list: []});

function App() {
    const [addedPizza,setAddedPizza] = useState<PizzaInCart[]>([])
    const comparePizzas = (pizza1:PizzaInCart,pizza2:PizzaInCart) =>{
        if(pizza1.id === pizza2.id && pizza1.doughTypeName === pizza2.doughTypeName && pizza1.sizeTypeName === pizza2.sizeTypeName)return true;
        return false;
    }
    const compareCartToHome = (pizza1:TPizza,pizza2:PizzaInCart,dough:number,size:number) =>{
        if(pizza1.id === pizza2.id && pizza1.doughTypesName[dough] === pizza2.doughTypeName && pizza1.sizeTypesName[size] === pizza2.sizeTypeName) {
            return true;
        }
        return false;
    }
    const addToCart = (pizza:PizzaInCart) =>{
        const exist = addedPizza.find(el => comparePizzas(el,pizza));
        const newList = exist ? addedPizza.map(el => comparePizzas(el,pizza) ? {...el, count: el.count + 1} : el ) : [...addedPizza, pizza]
        console.log(newList);
        setAddedPizza(newList);
    }
    const minusPizzaAtHome = (pizza:TPizza,dough:number,size:number,count:number) =>{
        if(!!count) setAddedPizza(addedPizza.map(el => compareCartToHome?.(pizza,el,dough,size) ? {...el,count: el.count - 1} : el));
        else deletePizzaAtHome(pizza,dough,size);
    }
    const deletePizzaAtHome = (pizza:TPizza,dough:number,size:number) =>{
        setAddedPizza(prevState => prevState.filter(el => !compareCartToHome?.(pizza,el,dough,size)));
    }
    const minusPizzaInCart = (pizza:PizzaInCart) =>{
        if(!!pizza.count) setAddedPizza(addedPizza.map(el => comparePizzas(el,pizza) ? {...el,count: el.count - 1} : el));
        else deletePizza(pizza);
    }
    const plusPizza = (pizza:PizzaInCart) =>{
        setAddedPizza(addedPizza.map(el => comparePizzas(el,pizza) ? {...el,count: el.count + 1} : el))
    }
    const deletePizza = (pizza:PizzaInCart) =>{
        setAddedPizza(prevState => prevState.filter(el => !comparePizzas(pizza,el)));
    }
    return (
      <PizzaContext.Provider value={{list: addedPizza, addToCart, deletePizza, plusPizza,minusPizzaInCart,compareCartToHome,minusPizzaAtHome}}>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/detailed'} element={<DetailedPizza/>}/>
          <Route path={'/category/:type'} element={<Category/>}/>
          <Route path={'/pizza/:id'} element={<DetailedPizza/>}/>
        </Routes>
        <Normalize/>
      </Layout>
      </PizzaContext.Provider>
    );
}

export default App;
