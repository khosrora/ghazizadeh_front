import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TitleSection from "../../sharedUi/TitleSection";
import Link from "next/link";
import BtnSwipper from "../../sharedUi/BtnSwipper";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../../store/blogs/BlogsSlice";


   

const BlogSection = () => {

    const dispatch = useDispatch();
    const { blogs } = useSelector(state => state.blogs)
    const swiperRef = useRef();


    useEffect(() => {
        dispatch(getBlogs('/blog/blogs'))
    }, [])

    return (
        <>
            <TitleSection
                title="جدیدترین مقالات"
                url="/blogs"
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
                        blogs.map((i, index) =>
                            <SwiperSlide key={index}>
                                <div key={index} className="bg-[#F8F9FA] rounded-xl">
                                    <figure className="px-4 pt-4 h-40">
                                        <img src={i.image.image} title={i.image.title} className="rounded-xl h-40 w-full object-cover" />
                                    </figure>
                                    <div className="card-body text-right w-full ">
                                        <h2 className="card-title font-bold text-[16px] mb-2">
                                            {
                                                i.title.length > 30 ?
                                                    `${i.title.substring(0, 30)}...` : i.title
                                            }
                                        </h2>
                                        <Link alt={i.title} href={`/blogs/${i.slug}`}>
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