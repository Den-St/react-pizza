import {SvgIcon} from "../common/Icon/SvgIcon";
import React, {useEffect, useState} from "react";
import {CartContainer,CartWrapper,PizzasNumberContainer,PizzasNumber,MakeOrderButton,TotalPrice} from './styles'
import {DropList} from "../common/DropListLanguage";
import {CartDropListItem} from "../common/CartDropListItem";
import {useSelector} from "react-redux";
import {addedPizzaType} from "../../store/AddedPizza";

export const HeaderCart = () =>{
    //const [list,setList] = useState<PizzaInCart[]>([]);
    const [isCart,setIsCart] = useState(false)
    const [sum,setSum] = useState(0);
    const [wholePizzaNumber,setWholePizzaNumber] = useState(0);
    //const cartList = useContext(PizzaContext).list;
    const cartList = useSelector(state=>state) as addedPizzaType;
    const totalcount = cartList.addedPizza.map(el => el.count).join('');
    const toggleCart = () =>{
        if(wholePizzaNumber){setIsCart(prevState => !prevState);}
    }
    useEffect(
        ()=>{
            //setList(cartList);
            setSum(cartList.addedPizza.reduce((partialSum, a) => partialSum + a.price*a.count, 0));
            setWholePizzaNumber(cartList.addedPizza.reduce((partialNumber:number,pizza) => partialNumber + pizza.count, 0));
        },
        [totalcount]
    )
    useEffect(()=>{if(!wholePizzaNumber) setIsCart(false)}
        ,[wholePizzaNumber])

    return <CartContainer>
        <CartWrapper >
            <PizzasNumberContainer onClick={toggleCart}>
                {wholePizzaNumber < 10 && <PizzasNumber>0{wholePizzaNumber}</PizzasNumber>}
                {wholePizzaNumber >= 10 && <PizzasNumber>{wholePizzaNumber}</PizzasNumber>}
                <SvgIcon type={'cart'} viewBox={'0 0 510 510'}/>
            </PizzasNumberContainer>
            {!!wholePizzaNumber && <TotalPrice onClick={toggleCart}>{sum} грн</TotalPrice>}
            <MakeOrderButton to={'/cart'} $isCart={!!wholePizzaNumber}>Замовити</MakeOrderButton>
        </CartWrapper>
        {isCart && <DropList cart={true}>{cartList.addedPizza.map(el => !!el.count ? <CartDropListItem key={el.id+el.doughTypeName+el.sizeTypeName+el.name} pizza={el}/> : null)}</DropList>}
    </CartContainer>
}