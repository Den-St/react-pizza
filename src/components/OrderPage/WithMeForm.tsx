import React from "react";
import {SvgIcon} from "../common/Icon/SvgIcon";
import {ChooseRestorantForm, Location, Restorant, RestorantHeader, WithMeContainer} from "./style";

export const WithMeForm = () =>{
    return <WithMeContainer>
        <RestorantHeader>Ресторан</RestorantHeader>
        <Location><SvgIcon type={'location'}/>Одеса</Location>
        <Restorant>Ресторан</Restorant>
        <ChooseRestorantForm/>
    </WithMeContainer>
}