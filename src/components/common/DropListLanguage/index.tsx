import React from "react";
import {languages} from "../../../constants";
import { DropListLanguageContainer,  ItemLanguage} from "./styles";

type DropListProps = {
    chooseCurrentLanguage: (index:number) => void,
}

export const DropListLanguage:React.FC<DropListProps> = ({chooseCurrentLanguage}) =>{
    return <DropListLanguageContainer>
        {languages.map((el) => <ItemLanguage key={el.id} onClick={() => chooseCurrentLanguage(el.id)}>{el.language}</ItemLanguage>)}
    </DropListLanguageContainer>
}