import React from "react";
import {
    AdressHeader,
    Comment,
    DeliveryContainer,
    DeliveryFormContainer,
    Location,
    LocationInput, Street,
    StreetInput
} from "./style";
import {SvgIcon} from "../common/Icon/SvgIcon";

export const DeliveryForm = () =>{
    return <DeliveryContainer>
        <AdressHeader>Адреса</AdressHeader>
        <DeliveryFormContainer>
            <Street>Вулиця</Street>
            <Location><SvgIcon type={'location'}/>Одеса</Location>
            <StreetInput/>
            <LocationInput/>
            <LocationInput/>
            <LocationInput/>
            <LocationInput/>
            <LocationInput/>
        </DeliveryFormContainer>
    </DeliveryContainer>
}