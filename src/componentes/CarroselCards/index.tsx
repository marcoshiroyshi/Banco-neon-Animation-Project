'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination, Navigation, Scrollbar} from 'swiper/modules';
import CardTwitter from '../Card/CardTwitter';


const Carrosel = () => {
    return(
        <>
            <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Navigation]}
                    navigation
                    className="mySwiper"
                    breakpoints={{
                        1440: {
                            slidesPerView: 3
                        },

                        1000: {
                            slidesPerView: 2.5
                        },

                        800: {
                            slidesPerView: 1.8,
                            
                        },

                        768: {
                            slidesPerView: 1.9,
                            spaceBetween: 1
                        },

                        375: {
                            slidesPerView: 1.2,
                            spaceBetween: 200
                        }
                    }}
                >
                <div>
                    <SwiperSlide>
                        <CardTwitter usuario='@marciogurka' comentario='Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor por esse banco #bancoNeon'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTwitter usuario='@kleriene18' comentario='Eu uso o Neon pra render o pouquinho que eu tenho. Como disse minha amiga Bruna, um dia eu abro o app de novo e PA: tô rica.'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTwitter usuario='@mzltweet' comentario=' Só por ter um cartão virtual com bloqueio fácil no app, já ganha e muito na segurançã pro cliente.'/>
                    </SwiperSlide>            
                    <SwiperSlide>
                        <CardTwitter usuario='@mzltweet' comentario=' Só por ter um cartão virtual com bloqueio fácil no app, já ganha e muito na segurançã pro cliente.'/>
                    </SwiperSlide>   
                </div>         
            </Swiper>
        </>
    );
}

export default Carrosel