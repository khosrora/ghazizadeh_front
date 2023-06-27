import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
import BtnSwipper from '../../sharedUi/BtnSwipper';

function CommentsProduct() {

    const swiperRef = useRef();

    return (
        <div className='px-4'>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    740: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    2000: {
                        slidesPerView: 6,
                    },
                }}
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={{ clickable: true }}
            >
                {
                    [1,2,3,4,5,6,7,8,9].map(i =>
                        <SwiperSlide key={i.id}>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl w-full">
                                <div className="flex flex-col justify-between items-start gap-y-6">
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex justify-start items-center gap-x-2">
                                            <div className="bg-[#F8F9FA] rounded-full p-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#222222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className='font-bold text-[12px] text-[#444444]'>امیرحسین محتشم بخشایش</p>
                                        </div>
                                        <span className='text-[#888888] text-xs'> 1 روز پیش </span>
                                    </div>
                                    <p className='font-bold text-[14px]'>
                                        این محصول را پیشنهاد می کنم
                                    </p>
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
    )
}

export default CommentsProduct