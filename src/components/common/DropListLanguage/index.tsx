import React from "react";
import {DropListContainer} from "./styles";

type DropListProps = {
    chooseCurrentLanguage?: (index:number) => void,
    children:React.ReactNode,
    cart:boolean
}

export const DropList:React.FC<DropListProps> = ({chooseCurrentLanguage,children,cart}) =>{
    return <DropListContainer $cart={cart}>
        {children}
    </DropListContainer>
}