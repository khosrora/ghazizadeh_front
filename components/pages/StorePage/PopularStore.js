import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import BtnAddToBasket from '../../sharedUi/BtnAddToBasket';
import TitleSection from '../../sharedUi/TitleSection';
import BtnSwipper from '../../sharedUi/BtnSwipper';

function PopularStore() {

    const swiperRef = useRef();

    return (

        <>
            <TitleSection
                title="پر بازدیدترین ها"
            />
            <div className="rounded-xl">
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        740: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        2000: {
                            slidesPerView: 6,
                        },
                    }}
                    className="mySwiper"
                    spaceBetween={10}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i =>
                            <SwiperSlide key={i}>
                                <div className="bg-[#F8F9FA] rounded-xl">
                                    <figure className="p-2 h-[140px] md:h-[160px] lg:h-[220px]">
                                        <img
                                            src="https://www.finds.ir/photos/2022020530082437.jpg"
                                            alt="Shoes"
                                            className="rounded-xl object-contain" />
                                    </figure>
                                    <div className="card-body text-right w-full ">
                                        <h2 className="card-title font-bold text-[14px]">لیفان</h2>
                                        <p className="card-title font-bold text-[12px]">فرمون خودرو مدل TRETTF2</p>
                                        <div className="card-actions flex justify-between items-center">
                                            <span className='text-[12px]'>200/000 <span className='text-[8px]'>تومان</span></span>
                                            <BtnAddToBasket />
                                        </div>
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
            </div>
        </>
    )
}

export default PopularStore