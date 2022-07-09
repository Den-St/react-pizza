import React from 'react';
import {icon} from "./types";
import {
    PhonePath,
    LocationPath,
    CartPath,
    StockPath,
    MessagePath,
    AppStore,
    GoogleStore,
    Visa,
    Master,
    Facebook, YoutubePath, Instagram, Telegram
} from './paths'

export const ChildrenSvg: React.FC<{type: icon}> = ({type}) => {
    if(type === 'phone') return <PhonePath/>;
    if(type === 'location') return <LocationPath/>
    if(type === 'cart') return <CartPath/>
    if(type === 'stock') return <StockPath/>
    if(type === 'message') return <MessagePath/>
    if(type === 'appstore') return <AppStore/>
    if(type === 'google') return <GoogleStore/>
    if(type === 'visa') return <Visa/>
    if(type === 'master') return <Master/>
    if(type === 'facebook') return <Facebook/>
    if(type === 'youtube') return <YoutubePath/>
    if(type === 'instagram') return <Instagram/>
    if(type === 'telegram') return <Telegram/>

    return null
}