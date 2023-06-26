import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";
import Image from "next/image";
import BtnSwipper from "../../sharedUi/BtnSwipper";




const CarAccessories = () => {

    const swiperRef = useRef();

    return (
        <>
            <TitleSection
                title="لوازم خودرو بر اساس برند"
                url="/"
            />
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    740: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                    2000: {
                        slidesPerView: 10,
                    },
                }}
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i =>
                        <SwiperSlide key={i}>
                            <div className="border border-[#CCCCCC] rounded-xl p-2 h-[148px] sm:h-[248px] lg:p-6">
                                <div className="bg-[#222222] rounded-xl p-2 lg:mb-4 md:p-6">
                                    <Image
                                        src="/others/logo.png"
                                        width="150"
                                        height="150"
                                    />
                                </div>
                                <span className="text-[16px] font-bold">رنو</span>
                            </div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
            <BtnSwipper
                prev={() => swiperRef.current?.slidePrev()}
                next={() => swiperRef.current?.slideNext()}
            />
        </>
    );
}

export default CarAccessories;