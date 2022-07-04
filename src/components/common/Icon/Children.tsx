import React from 'react';
import {icon} from "./types";
import {PhonePath, LocationPath, CartPath, StockPath} from './paths'

export const ChildrenSvg: React.FC<{type: icon}> = ({type}) => {
    if(type === 'phone') return <PhonePath/>;
    if(type === 'location') return <LocationPath/>
    if(type === 'cart') return <CartPath/>
    if(type === 'stock') return <StockPath/>
    return null
}