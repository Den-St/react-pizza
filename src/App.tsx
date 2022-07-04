import React from 'react';
import {Layout} from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import {Home} from "./containers/Home";
import {Cart} from "./containers/Cart";
import {DetailedPizza} from "./containers/DetailedPizza";
import {Normalize} from "styled-normalize";
import {Category} from "./containers/Category";

//@todo
// 1. регистрация
// 2. hover нижних строчек
// 3. hover menu

function App() {
  return (
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/detailed'} element={<DetailedPizza/>}/>
          <Route path={'/category/:type'} element={<Category/>}/>
        </Routes>
        <Normalize/>
      </Layout>
  );
}

export default App;
