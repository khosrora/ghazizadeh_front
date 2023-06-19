import React, { useRef } from "react";
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";
import Image from "next/image";




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
            <div className="w-full flex justify-center items-center gap-x-8 mt-4">
                <button className="bg-[#EEEEEE] rounded-full p-4" onClick={() => swiperRef.current?.slidePrev()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90997 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.90997 4.08" stroke="#888888" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="bg-[#EA0028] rounded-full p-4" onClick={() => swiperRef.current?.slideNext()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default CarAccessories;