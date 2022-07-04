import React, {useState} from 'react'
import {LayoutWrapper, Main} from "./styles";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {SideMenu} from "../common/SideMenu";

type withChildren = {
    children?: React.ReactNode;
}

export const Layout: React.FC<withChildren> = ({children}) => {
    const [isMenuOpened,setMenuOpened] = useState(false);
    const toggle = () => setMenuOpened(prevState => !prevState)
    const onSideBarBlur = () => setTimeout(()=>setMenuOpened(false),300)

    return <LayoutWrapper>
        <Header toggle={toggle} isMenuOpened={isMenuOpened} onSideBarBlur={onSideBarBlur}/>
        {isMenuOpened && <SideMenu/>}
        <Main>{children}</Main>
        <Footer/>
    </LayoutWrapper>
}