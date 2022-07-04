import React, {ChangeEvent, useEffect, useState} from 'react';
import {Modal} from "../Modal";
import {
    BackButton, ErrorList,
    InputEmail,
    InputParol, RegistrationButton,
    RegistrationForm,
    RegistrationHeader,
    RegistrationWrapper,
    RepeatInputParol
} from "./style";
import {ErrorT, RegFields, RegisterInitialState, RegisterValuesT} from "../../../types/auth";

type RegistrationModalProps = {
    Back: () => void
    onClose: () => void
    submitRegistration: () => void
}

const getErrors = (value:RegisterValuesT) =>{
    let errors:ErrorT[] = [];
    if(value.email.length < 6 || value.email.length > 12) errors.push({key: 'email', message:'Логін повинен бути довше 6 символів та не довше 12'});
    if(value.password.length < 6 || value.password.length > 12) errors.push({key: 'password', message:'Пароль повинен бути довше 6 символів та не довше 12'});
    if(value.confirmPass !== value.password) errors.push({key: 'confirmPass', message:'Паролі не співпадають'});
    return errors
}

export const RegistrationModal:React.FC<RegistrationModalProps> = ({Back,onClose,submitRegistration}) =>{

    const [values,setValues] = useState(RegisterInitialState);
    const [errors,setErrors] = useState<ErrorT[]>([]);
    const [isPressed,setIsPressed] = useState(false);
    const onSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        const errs = getErrors(values);
        setErrors(errs);
        setIsPressed(true);
        if(!errs.length) submitRegistration();
    }
    const onChange = (field:RegFields) => (e:ChangeEvent<HTMLInputElement>) => {
        setValues((prevState) => ({...prevState, [field]: e.target.value}))
    }

    useEffect(() => {
            if(isPressed){
                const errs = getErrors(values);
                setErrors(errs);
            }
    }, [values,isPressed])

    return <Modal onClose={onClose}>
            <RegistrationWrapper>
                <RegistrationHeader>
                    Реєстрація
                </RegistrationHeader>
                <RegistrationForm>
                    <InputEmail placeholder={'Ваш email'} onChange={onChange('email')}/>
                    <InputParol placeholder={'Пароль'} onChange={onChange('password')}/>
                    <RepeatInputParol placeholder={'Повторіть ваш пароль'} onChange={onChange('confirmPass')}/>
                    {!!errors.length && errors.map((el,index) => <ErrorList key={el.message}>{index + 1}){el.message}</ErrorList>)}
                    <RegistrationButton onClick={onSubmit}>Зареєструватися</RegistrationButton>
                </RegistrationForm>
                <BackButton onClick={Back}>Повернутися до входу</BackButton>
            </RegistrationWrapper>
        </Modal>
}