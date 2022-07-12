import React, {createContext, useState} from 'react';
import {Layout} from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import {Home} from "./containers/Home";
import {Cart} from "./containers/Cart";
import {DetailedPizza} from "./containers/DetailedPizza";
import {Normalize} from "styled-normalize";
import {Category} from "./containers/Category";
import {PizzaInCart} from "./types/pizza";

export type PizzaContextT = {
    list: PizzaInCart[]
    addToCart?: (pizza:PizzaInCart)=> void,
    deletePizza?:(id:number) => void
}
export const PizzaContext = React.createContext<PizzaContextT>({list: []});

function App() {
    const [addedPizza,setAddedPizza] = useState<PizzaInCart[]>([])
    // const comparePizzas = (pizza1:PizzaInCart,pizza2:PizzaInCart) =>{
    //     if(pizza1.id === pizza2.id && pizza1.doughTypeName === pizza2.doughTypeName && pizza1.sizeTypeName === pizza2.sizeTypeName)return true;
    //     else return false;
    // }
    const addToCart = (pizza:PizzaInCart) =>{
        // addedPizza.map(el => {if(comparePizzas(el,pizza)){
        //     ++el.count;
        //     return}
        // })
        setAddedPizza(prevState => [...prevState,pizza]);
    }
    const deletePizza = (id:number) =>{
        setAddedPizza(prevState => prevState.filter(el => el.id != id))
    }
    return (
      <PizzaContext.Provider value={{list: addedPizza, addToCart, deletePizza}}>
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
