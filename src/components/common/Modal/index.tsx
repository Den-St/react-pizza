import React from "react";
import {CloseButton, ModalBackground, ModalContainer, ModalWrapper} from "./style";

type ModalProps = {
    children?: React.ReactNode,
    onClose?: () => void;
    padding?:string
}

export const Modal:React.FC<ModalProps> = ({children, onClose,padding}) =>{
    document.body.style.overflow = 'hidden';
    return <ModalContainer>
        <ModalBackground onClick={onClose}/>
        <ModalWrapper padding={padding}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            {children}
        </ModalWrapper>
    </ModalContainer>
}