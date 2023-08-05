import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";
import Image from "next/image";
import BtnSwipper from "../../sharedUi/BtnSwipper";
import http from "../../../utils/httpService";




const CarAccessories = () => {

    const [load, setLoad] = useState(true);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await http.get('/brand/brands');
            setBrands(res.data.results)
            setLoad(false);
        })()
    }, [])

    const swiperRef = useRef();


    if (load) return null;
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
                        slidesPerView: 6,
                    }
                }}
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    brands.map(i =>
                        <SwiperSlide key={i}>
                            <div className="border border-[#CCCCCC] rounded-xl p-2 h-[148px] sm:h-[248px] lg:p-6 flex flex-col justify-center items-center">
                                <div className="bg-[#222222] h-1/2 w-full rounded-xl p-2 lg:mb-4 md:p-4 flex justify-center items-center">
                                    <img
                                        style={{ objectFit: 'contain' }}
                                        src={i.logo}
                                    />
                                </div>
                                <div className="h-1/2 w-full flex justify-center items-center">
                                    <span className="text-[16px] font-bold">{i.title}</span>
                                </div>
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