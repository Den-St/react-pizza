import React, {useState} from "react";
import {InputContainer, PlaceholderText} from "../components/OrderPage/style";

type inputProps = {
    placeholder:string,
    isComment?:boolean
}

export const Input:React.FC<inputProps> = ({placeholder,isComment}) =>{
    const [onFocus,setOnFocus] = useState(false);
    const [inputText,setInputText] = useState("");
    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value);
    const onChangeTextArea = (event:React.ChangeEvent<HTMLTextAreaElement>) => setInputText(event.target.value);
    const makeOnFocus = () => setOnFocus(true);
    const makeOnBlur = () => setOnFocus(false);

    return <InputContainer $isComment={isComment}>
        <PlaceholderText>{(onFocus || inputText) && placeholder}</PlaceholderText>
        {!isComment ? <input onFocus={makeOnFocus} onBlur={makeOnBlur} value={inputText} onChange={onChangeInput} placeholder={placeholder}/> : <textarea onFocus={makeOnFocus} onBlur={makeOnBlur} value={inputText} onChange={onChangeTextArea} placeholder={placeholder}/>}
    </InputContainer>
}