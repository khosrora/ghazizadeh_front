import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";
import Link from "next/link";
import BtnSwipper from "../../sharedUi/BtnSwipper";




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
                <BtnSwipper
                    prev={() => swiperRef.current?.slidePrev()}
                    next={() => swiperRef.current?.slideNext()}
                />
            </div>
        </>
    );
}

export default BlogSection;