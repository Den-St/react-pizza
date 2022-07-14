import React, {useState} from "react";
import {
    Change,
    ChangeButtonCircle,
    ChangeButtonContainer,
    Comment,
    ContactForm,
    ContactHeader,
    ContactInput,
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
    PayHeader,
    Price,
    PriceContainer, RightContainer,
    Time,
    TimeForm,
    TypeOfPayment,
    UseCoupon,
    Whole,
    WithMeButton,
    WithoutChange
} from "./style";
import {DeliveryForm} from "./DeliveryForm";
import {WithMeForm} from "./WithMeForm";

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
                <DeliveryButton onClick={onDelivery}>Доставка</DeliveryButton>
                <WithMeButton onClick={onWithMe}>З собою</WithMeButton>
            </OrderingContainer>

            <ContactHeader>Контакты</ContactHeader>
            <ContactForm>
                <ContactInput/>
                <ContactInput/>
                <ContactInput/>
            </ContactForm>

            {isOnDelivery ? <DeliveryForm/> : <WithMeForm/>}
            <Comment/>

            <DateAndTimeHeader>Дата та час</DateAndTimeHeader>
            <DateAndTimeForm>
                <Date>Дата</Date>
                <Time>Час</Time>
                <DateSelect/>
                <TimeForm/>
            </DateAndTimeForm>

            <PayHeader>Оплата</PayHeader>
            <PayForm>
                <Coupon>Купон</Coupon>
                <UseCoupon/>
                <Change/>
                <ChangeButtonContainer><ChangeButtonCircle/></ChangeButtonContainer>
                <WithoutChange>Без решти</WithoutChange>
                <TypeOfPayment></TypeOfPayment>
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