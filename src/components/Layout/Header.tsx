import React, {useEffect, useState} from 'react';
import {HeaderBottomContainer,
    HeaderContainer,
    LogInButton,
    TopPartRightBar,
    FakeDiv,
    HeaderTopContainer,
    PhoneContainer,
    PhoneNumber,
    TopPartContent,
    Language,
    LocationContainer,
    Location,
    LanguageContainer,
    BottomPartContent,
} from './styles'

import {SvgIcon} from "../common/Icon/SvgIcon";
import {HeaderMenu, Logo} from "./Navigation";
import {HeaderCart} from "./HeaderCart";
import {BurgerButton} from "../common/Button";
import {LocationModal} from "../common/LocationModal";
import {LocationT} from "../../types/common";
import {languages, locations} from "../../constants";
import {DropList} from "../common/DropListLanguage";
import {LogInModal} from "../common/LoginModal";
import {RegistrationModal} from "../common/RegistrationModal";
import {ItemLanguage} from "../common/DropListLanguage/styles";

type HeaderProps ={
    toggle?:() => void,
    onSideBarBlur?:() => void
    isMenuOpened?: boolean
}

export const Header:React.FC<HeaderProps> = ({toggle,onSideBarBlur,isMenuOpened}) =>{
    const [fixed, setFixed] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            document.documentElement.scrollTop > 50 ? setFixed(true) : setFixed(false)
        }
        window.addEventListener("scroll", onScroll, false);
    },[]);

    return <HeaderContainer>
        <HeaderTopPart/>
        <HeaderBottomPart isMenuOpened={isMenuOpened} toggle={toggle} onSideBarBlur={onSideBarBlur} fixed={fixed}/>
    </HeaderContainer>
}


const HeaderTopPart = () => {
    const [activeLocationModal,setActiveLocationModal] = useState(false);
    const onActive = () =>{
        setActiveLocationModal(true);
    }
    const onBlur = () =>{
        document.body.style.overflow = 'unset';
        setActiveLocationModal(false);
    }

    const [currentLocation,setCurrentLocation] = useState<LocationT>(locations[0]);

    const chooseLocation = (location: LocationT) =>{
        setCurrentLocation(location);
        setTimeout(() => onBlur(),50);
    }

    const [currentLanguage, setCurrentLanguage] = useState(languages[0].language)
    const [isActiveLanguage,setActiveLanguage] = useState(false);
    const chooseCurrentLanguage = (index:number) =>{
        setCurrentLanguage(languages[index].language);
    }

    const toggleLanguages = () =>{
        setActiveLanguage(prevState => !prevState);
    }
    const onBlurLanguage = () =>{
        setTimeout(() => setActiveLanguage(false),100);
    }

    const [isActiveLogIn,setActiveLogIn] = useState(false);
    const onActiveLogIn = () =>{
        setActiveLogIn(true);
    }

    const onBlurLogIn = () =>{
        document.body.style.overflow = 'unset';
        setActiveLogIn(false);
    }


    const [isRegistration,setIsRegistration] = useState(false);
    const onRegistration = () =>{
        setActiveLogIn(false);
        setIsRegistration(true);
    }

    const submitRegistration = () =>{
        setIsRegistration(false);
    }
    const onRegistrationClose =() =>{
        setIsRegistration(false);
    }

    const Back = () =>{
        setIsRegistration(false);
        setActiveLogIn(true);
    }

    return  <HeaderTopContainer>
        <TopPartContent>

            <PhoneContainer>
                <SvgIcon type={'phone'} viewBox={'0 0 14 20'}/>
                <PhoneNumber>048 702 11 11</PhoneNumber>
            </PhoneContainer>

            <LocationContainer>
                <SvgIcon type={'location'} viewBox={'0 0 14 20'}/>
                <Location onClick={onActive}>{currentLocation.location}</Location>
            </LocationContainer>
            {activeLocationModal && <LocationModal onClose={onBlur} currentLocation={currentLocation} chooseLocation={chooseLocation}/>}
            <FakeDiv></FakeDiv>

            <TopPartRightBar>
                <LanguageContainer tabIndex={-1} onClick={toggleLanguages} onBlur={onBlurLanguage} $isActiveLanguage={isActiveLanguage}>
                    <Language>{currentLanguage}</Language>
                    <SvgIcon type={'location'}/>
                </LanguageContainer>
                {isActiveLanguage && <DropList cart={false} chooseCurrentLanguage={chooseCurrentLanguage}>{languages.map((el) => <ItemLanguage key={el.id} onClick={() => chooseCurrentLanguage(el.id)}>{el.language}</ItemLanguage>)}</DropList>}

                <LogInButton onClick={onActiveLogIn}>Увійти</LogInButton>
                {isActiveLogIn && <LogInModal onRegistration={onRegistration} onClose={onBlurLogIn}/>}
                {isRegistration && <RegistrationModal onClose={onRegistrationClose} submitRegistration={submitRegistration} Back={Back}/>}
            </TopPartRightBar>

        </TopPartContent>
    </HeaderTopContainer>
}

type HeaderBottomProps = {
    toggle?:() => void,
    onSideBarBlur?:() => void,
    fixed:boolean,
    isMenuOpened?:boolean
}
const HeaderBottomPart:React.FC<HeaderBottomProps> = ({fixed,toggle,onSideBarBlur,isMenuOpened}) => {
    return <HeaderBottomContainer $fixed={fixed}>
        <BottomPartContent>

            <Logo/>

            <HeaderMenu/>

            <HeaderCart/>

            <BurgerButton onBlur={onSideBarBlur} onClick={toggle} isOpened={isMenuOpened}/>
        </BottomPartContent>
    </HeaderBottomContainer>
}

