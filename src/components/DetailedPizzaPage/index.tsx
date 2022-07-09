import React from "react";
import {PageContainer, PageWrapper} from "./styled";
import {TPizza} from "../../types/pizza";

type DetailedPizzaPageProps = {
    item:TPizza
}

export const DetailedPizzaPage:React.FC<DetailedPizzaPageProps> = ({item}) =>{
    return <PageContainer>
        <PageWrapper>
            <img src={item.detailedImage} alt={'aqwer'}/>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
            <h2>{item.name}</h2>
        </PageWrapper>
    </PageContainer>
}