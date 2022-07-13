import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Navigation,Pagination} from 'swiper';
import 'swiper/css';
import {SlideItem, SliderContainer} from "./style";
import 'swiper/css/autoplay';
export const Slider = () =>{

    return <SliderContainer>
        <Swiper
        modules={[ Autoplay,Navigation,Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay:5000,
        disableOnInteraction:false
        }}
        pagination={{
            clickable: true,
        }}
    >
        <SwiperSlide><SlideItem src={'https://media.dominos.ua/slider/slide_image/2019/07/16/slider_5-pizzas.jpg'}/></SwiperSlide>
        <SwiperSlide><SlideItem src={'https://media.dominos.ua/slider/slide_image/2019/07/31/-40_1920x736.JPG'}/></SwiperSlide>
        <SwiperSlide><SlideItem src={'https://media.dominos.ua/slider/slide_image/2022/06/24/SLIDER-COMBO_WITH_FRIES_23.06.22_1280x488pix-UKR.jpg'}/></SwiperSlide>
        <SwiperSlide><SlideItem src={"https://media.dominos.ua/slider/slide_image/2022/05/14/woweekend_slider_ukr.jpg"}/></SwiperSlide>
        <SwiperSlide><SlideItem src={"https://media.dominos.ua/slider/slide_image/2022/07/07/SLIDER-NEW_YORKER_SIZE_04.07.22-UKR_1280x488_pix.jpg"}/></SwiperSlide>
    </Swiper>
    </SliderContainer>
}



