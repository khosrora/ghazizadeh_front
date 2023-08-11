import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


function BannerStore({ banners }) {

    const swiperRef = useRef();

    return (
        <div className='px-4'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={{ clickable: true }}
            >
                {
                    banners &&
                    banners.map(i => {
                        return i.is_slider === false && (
                            <SwiperSlide key={i.id}>
                                <div className="h-full rounded-xl overflow-hidden lg:h-[320px]">
                                    <img
                                        src={i.image}
                                        className="object-cover h-full"
                                        width='200'
                                        height='200'
                                        alt="فروشگاه لوازم یدکی غازی زاده"
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    }
                    )
                }
            </Swiper>
        </div>
    )
}

export default BannerStore