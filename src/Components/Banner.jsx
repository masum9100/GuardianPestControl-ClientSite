import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mt-10'>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="./banner1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./banner2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./banner3.jpg" alt="" /></SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default Banner;