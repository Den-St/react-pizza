import React, {useState} from 'react';
import {Layout} from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import {Home} from "./containers/Home";
import {Cart} from "./containers/Cart";
import {DetailedPizza} from "./containers/DetailedPizza";
import {Normalize} from "styled-normalize";
import {Category} from "./containers/Category";
import {MyGlobalContext} from "./context/context";
import {CartPizzaItem} from "./types/pizza";


function App() {
  const [cart, setCart] = useState<CartPizzaItem[]>([])
  const handleAddToCart = (cartItem: CartPizzaItem) => setCart(prev => ([...prev, cartItem]));

  return (
      <MyGlobalContext.Provider value= {{ cart, setCart: handleAddToCart }}>
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
      </MyGlobalContext.Provider>
  );
}

export default App;
