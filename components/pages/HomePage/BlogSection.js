import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";
import Link from "next/link";




const BlogSection = () => {

    const swiperRef = useRef();

    return (
        <>
            <TitleSection
                title="جدیدترین مقالات"
                url="/"
            />
            <div className="bg-[#FFFFFF] p-4 py-6 rounded-xl">
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
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
                    spaceBetween={10}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i =>
                            <SwiperSlide key={i}>
                                <div className="bg-[#F8F9FA] rounded-xl">
                                    <figure className="px-4 pt-4">
                                        <img src="https://azernews.az/media/2019/07/15/peugeot-301-facelift-3.jpg" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body text-right w-full ">
                                        <h2 className="card-title font-bold text-[16px]">جدیدترین ماشین تویوتا</h2>
                                        <Link href="/">
                                            <div className="card-actions">
                                                <span className="btn bg-[#FFFFFF] w-full text-[#EA0028] rounded-full text-[12px]">مشاهده محصولات</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }


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
            </div>
        </>
    );
}

export default BlogSection;