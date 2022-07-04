import React, {ChangeEvent, useState} from 'react';
import {Modal} from "../Modal";
import {
    Button, ButtonContainer, ErrorList,
    FacebookButton, GoogleButton, Input,
    LogInForm,
    LogInHeader,
    ReferencesContainer, RegistrationButton,
} from "./style";

type LoginModalProps = {
    onClose: () => void
    onRegistration: () => void
}

type ErrorT = {key: string, message: string};

const getErrors = (login:string,password:string): ErrorT[] =>{
    let errors = []
    if(login.length < 6 || login.length > 12) errors.push({key: 'login', message:'Логін повинен бути довше 6 символів та не довше 12'});
    if(password.length < 6 || password.length > 12) errors.push({key: 'password', message:'Пароль повинен бути довше 6 символів та не довше 12'});
    return errors
}

export const LogInModal:React.FC<LoginModalProps> = ({onClose,onRegistration}) =>{
    const [inputLogin,setInputLogin] = useState('');
    const [inputPassword,setInputPassword] = useState('');
    const [errors, setErrors] = useState<ErrorT[]>([]);
    console.log('Errors:', errors);
    const changeInputLogin = (e:ChangeEvent<HTMLInputElement>) =>{
        const errs = getErrors(inputLogin,inputPassword);
        if(!errs.filter(el => el.key === 'login').length) setErrors(prevState => prevState.filter(el => el.key !== 'login'));
        setInputLogin(e.target.value);
    }
    const changeInputPassword = (e:ChangeEvent<HTMLInputElement>) =>{
        const errs = getErrors(inputLogin,inputPassword);
        if(!errs.filter(el => el.key === 'password').length) setErrors(prevState => prevState.filter(el => el.key !== 'password'));
        setInputPassword(e.target.value);
    }

    const onSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        const errs = getErrors(inputLogin,inputPassword);
        setErrors(errs);
        if(!!!errs.length) onClose();
    }

    const onPopupClose = () => onClose();




    return <Modal padding={'15px 120px'} onClose={onPopupClose}>

        <LogInHeader>Увійти</LogInHeader>
        <LogInForm>
            <Input placeholder={"Логін"} type={"email"} value={inputLogin} onChange={(e) => changeInputLogin(e)} ></Input>
            <Input placeholder={'Пароль'} type={"password"} value={inputPassword} onChange={(e) => changeInputPassword(e)}></Input>
            <span>Забули пароль?</span>
            {!!errors.length && errors.map((el,index) => <ErrorList key={el.key}>{index + 1}){el.message}</ErrorList>)}
            <Button onClick={onSubmit}>Увійти</Button>
            <RegistrationButton onClick={onRegistration}>Реєстрація</RegistrationButton>
        </LogInForm>

        <ReferencesContainer>
            <span>Увійти через соц. мережу</span>
            <ButtonContainer>
                <FacebookButton>f</FacebookButton>
                <GoogleButton>G</GoogleButton>
            </ButtonContainer>
        </ReferencesContainer>

    </Modal>
}