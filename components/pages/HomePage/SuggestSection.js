import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";




const SuggestSection = () => {

    const [screenSize, setScreenSize] = useState();
    const swiperRef = useRef();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setScreenSize(window.innerWidth)
        }
    }, [])

    if (screenSize === undefined) return;
    return (
        <>
            <TitleSection
                title="معرفی خودروها"
                url="/"
            />
            <Swiper
                slidesPerView={screenSize > 980 ? 2 : "auto"}
                spaceBetween={10}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div className="relative rounded-md overflow-hidden bg-cover p-4 bg-[url('https://freerangestock.com/sample/133112/unrecognizable-man-driving-car--bw.jpg')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <div className="z-20  w-full text-right gap-y-4 flex flex-col justify-center">
                            <p>تویوتا</p>
                            <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                            <Link href="/">
                                <span className='btn rounded-full'> مشاهده محصولات </span>
                            </Link>
                        </div>
                        <div className="bg-black-rgba-two absolute top-0 left-0 right-0 bottom-0 z-10"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-md overflow-hidden bg-cover p-4 bg-[url('https://www.ikcopress.ir/Files/View/26880')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <div className="z-20  w-full text-right gap-y-4 flex flex-col justify-center">
                            <p>تویوتا</p>
                            <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                            <Link href="/">
                                <span className='btn rounded-full'> مشاهده محصولات </span>
                            </Link>
                        </div>
                        <div className="bg-black-rgba-two absolute top-0 left-0 right-0 bottom-0 z-10"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-md overflow-hidden bg-cover p-4 bg-[url('https://www.focus2move.com/wp-content/uploads/2022/04/Peugeot-Landtrek-2021-1024-0d.jpg')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <div className="z-20  w-full text-right gap-y-4 flex flex-col justify-center">
                            <p>تویوتا</p>
                            <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                            <Link href="/">
                                <span className='btn rounded-full'> مشاهده محصولات </span>
                            </Link>
                        </div>
                        <div className="bg-black-rgba-two absolute top-0 left-0 right-0 bottom-0 z-10"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-md overflow-hidden bg-cover p-4 bg-[url('https://freerangestock.com/sample/133112/unrecognizable-man-driving-car--bw.jpg')] gap-y-4 h-52 flex flex-col justify-center items-start text-white lg:h-72">
                        <div className="z-20  w-full text-right gap-y-4 flex flex-col justify-center">
                            <p>تویوتا</p>
                            <p>نمایندگی نگین خودرو کد ۳۰۴</p>
                            <Link href="/">
                                <span className='btn rounded-full'> مشاهده محصولات </span>
                            </Link>
                        </div>
                        <div className="bg-black-rgba-two absolute top-0 left-0 right-0 bottom-0 z-10"></div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="w-full flex justify-center items-center gap-x-8 mt-4">
                <button className="bg-[#EEEEEE] rounded-full p-2" onClick={() => swiperRef.current?.slidePrev()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90997 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.90997 4.08" stroke="#888888" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="bg-[#EA0028] rounded-full p-2" onClick={() => swiperRef.current?.slideNext()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.08" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default SuggestSection;