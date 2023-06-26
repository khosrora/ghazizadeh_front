import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";
import BtnSwipper from "../../sharedUi/BtnSwipper";




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
                url="/all_cars"
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
            <BtnSwipper
                prev={() => swiperRef.current?.slidePrev()}
                next={() => swiperRef.current?.slideNext()}
            />
        </>
    );
}

export default SuggestSection;