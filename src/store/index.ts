import {legacy_createStore as createStore } from "redux";
import {pizzaReducer} from "./AddedPizza";

export const store = createStore(pizzaReducer);