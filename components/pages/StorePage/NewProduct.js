import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import BtnAddToBasket from '../../sharedUi/BtnAddToBasket';
import TitleSection from '../../sharedUi/TitleSection';
import BtnSwipper from '../../sharedUi/BtnSwipper';
import Link from 'next/link';

function NewProduct({ latestProducts }) {

    const swiperRef = useRef();

    return (

        <>
            <TitleSection
                title="جدیدترین محصولات"
                url='/products?ordering=-created_date'
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
                        latestProducts.map(i =>
                            <SwiperSlide key={i.id}>
                                <Link href={`/products/${i.id}`} className="bg-[#F8F9FA] rounded-xl">
                                    <figure className="p-2 h-[140px] md:h-[160px] lg:h-[220px]">
                                        <img
                                            src={i.gallery[0].image}                                            
                                            alt="Shoes"
                                            className="rounded-xl object-contain" />
                                    </figure>
                                    <div className="card-body text-right w-full ">
                                        <h2 className="card-title font-bold text-[14px]">{i.brand.title}</h2>
                                        <p className="card-title font-bold text-[12px]">{i.title}</p>
                                        <div className="card-actions flex justify-between items-center">
                                            <span className='text-[12px]'>{new Intl.NumberFormat().format(i.price)} <span className='text-[8px]'>تومان</span></span>
                                            <BtnAddToBasket product={i} />
                                        </div>
                                    </div>
                                </Link>
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

export default NewProduct