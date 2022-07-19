import React from "react";
import {
    AdressHeader,
    DeliveryContainer,
    DeliveryFormContainer,
    Location,
    LocationInput, Street,
    StreetInput
} from "./style";
import {SvgIcon} from "../common/Icon/SvgIcon";
import {Input} from "../../containers/Input";

export const DeliveryForm = () =>{
    return <DeliveryContainer>
        <AdressHeader>Адреса</AdressHeader>
        <DeliveryFormContainer>
            <Street>Вулиця</Street>
            <Location><SvgIcon type={'location'}/>Одеса</Location>
            <StreetInput/>
            <Input placeholder={"Будинок"}/>
            <Input placeholder={"Квартира"}/>
            <Input placeholder={"Під'їзд"}/>
            <Input placeholder={"Код"}/>
            <Input placeholder={"Поверх"}/>
        </DeliveryFormContainer>
    </DeliveryContainer>
}