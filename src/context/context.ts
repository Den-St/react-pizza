import { createContext, useContext } from "react"
import {CartPizzaItem} from "../types/pizza";

export type GlobalContent = {
    cart: CartPizzaItem[]
    setCart:(v: CartPizzaItem) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
    cart: [], // set a default value
    setCart: () => {}, // set a default value
})

export const useGlobalContext = () => useContext(MyGlobalContext)