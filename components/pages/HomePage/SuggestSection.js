import React, { useRef } from "react";
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";




const SuggestSection = () => {

    const swiperRef = useRef();

    return (
        <>
            <TitleSection
                title="معرفی خودروها"
                url="/"
            />
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div className="rounded-md overflow-hidden bg-cover p-4 bg-[url('/others/test.png')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <p>تویوتا</p>
                        <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                        <Link href="/">
                            <span className='btn rounded-full'> مشاهده محصولات </span>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-md overflow-hidden bg-cover p-4 bg-[url('/others/test2.png')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <p>تویوتا</p>
                        <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                        <Link href="/">
                            <span className='btn rounded-full'> مشاهده محصولات </span>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-md overflow-hidden bg-cover p-4 bg-[url('/others/test.png')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <p>تویوتا</p>
                        <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                        <Link href="/">
                            <span className='btn rounded-full'> مشاهده محصولات </span>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-md overflow-hidden bg-cover p-4 bg-[url('/others/test2.png')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <p>تویوتا</p>
                        <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                        <Link href="/">
                            <span className='btn rounded-full'> مشاهده محصولات </span>
                        </Link>
                    </div>
                </SwiperSlide>
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

export default SuggestSection;