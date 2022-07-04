import React from 'react';
import {BurgerContainer,BurgerSecondLine,BurgerFirstLine,BurgerThirdLine} from './styles'
type BurgerProps = {
    isOpened?:boolean,
    onClick?: () => void;
    onBlur?: () => void
}

export const BurgerButton:React.FC<BurgerProps> = ({isOpened,onClick,onBlur}) =>{
    return <BurgerContainer tabIndex={-1} onBlur={onBlur} onClick={onClick}>
        <BurgerFirstLine $isOpened={isOpened}/>
        <BurgerSecondLine $isOpened={isOpened}/>
        <BurgerThirdLine $isOpened={isOpened}/>
    </BurgerContainer>
}