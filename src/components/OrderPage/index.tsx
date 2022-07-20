import React, {useState} from "react";
import {
    ChangeButtonCircle,
    ChangeButtonContainer,
    ContactForm,
    ContactHeader,
    Coupon,
    Date,
    DateAndTimeForm,
    DateAndTimeHeader,
    DateSelect,
    DeliveryButton, Grn,
    LeftContainer,
    OrderButton,
    OrderingContainer,
    OrderingHeader,
    OrderPageContainer,
    PayBlock,
    PayForm,
    PayHeader, PaymentType, PaymentTypeSelect,
    Price,
    PriceContainer, RightContainer,
    Time,
    TimeSelect,
    UseCoupon,
    Whole,
    WithMeButton,
    WithoutChange
} from "./style";
import {DeliveryForm} from "./DeliveryForm";
import {WithMeForm} from "./WithMeForm";
import {Input} from "../../containers/Input";
import Select from 'react-select'
import {optionsDay, optionsTime} from "../../helpers/pizza";

export const OrderPage = () =>{
    const [isOnDelivery,setIsOnDelivery] = useState(true);
    const onDelivery = () =>{
        if(!isOnDelivery)setIsOnDelivery(true);
    }
    const onWithMe = () =>{
        if(isOnDelivery)setIsOnDelivery(false);
    }


    return <OrderPageContainer>
        <LeftContainer>

            <OrderingHeader>Оформлення замовлення</OrderingHeader>
            <OrderingContainer>
                <DeliveryButton $isActive={isOnDelivery} onClick={onDelivery}>Доставка</DeliveryButton>
                <WithMeButton $isActive={!isOnDelivery} onClick={onWithMe}>З собою</WithMeButton>
            </OrderingContainer>

            <ContactHeader>Контакты</ContactHeader>
            <ContactForm>
                <Input placeholder={"Ім'я"}/>
                <Input placeholder={"Телефон"}/>
                <Input placeholder={"Email"}/>
            </ContactForm>

            {isOnDelivery ? <DeliveryForm/> : <WithMeForm/>}
            <Input placeholder={"Коментар"} isComment={true}/>

            <DateAndTimeHeader>Дата та час</DateAndTimeHeader>
            <DateAndTimeForm>
                <Date>Дата</Date>
                <Time>Час</Time>
                <DateSelect defaultValue={optionsDay[0]} options={optionsDay}/>
                <TimeSelect defaultValue={optionsTime()[0]} options={optionsTime()}/>
            </DateAndTimeForm>

            <PayForm>
                <PayHeader>Оплата</PayHeader>
                <Coupon>Купон</Coupon>
                <UseCoupon/>
                <Input placeholder={"Решта"}/>
                <ChangeButtonContainer><ChangeButtonCircle/></ChangeButtonContainer>
                <WithoutChange>Без решти</WithoutChange>
                <PaymentType>Тип оплати</PaymentType>
                <PaymentTypeSelect/>
            </PayForm>

            <PayBlock>
                <Whole>Усього</Whole>
                <PriceContainer><Price>0</Price><Grn>грн</Grn></PriceContainer>
                <OrderButton></OrderButton>
            </PayBlock>
        </LeftContainer>
        <RightContainer>

        </RightContainer>
    </OrderPageContainer>
}