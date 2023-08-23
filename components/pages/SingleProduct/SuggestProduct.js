import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import BtnAddToBasket from '../../sharedUi/BtnAddToBasket';
import TitleSection from '../../sharedUi/TitleSection';
import BtnSwipper from '../../sharedUi/BtnSwipper';
import Link from 'next/link';

function SuggestProduct({ domain, relationalProducts }) {

    const swiperRef = useRef();
    console.log(domain);

    return (

        <>
            <TitleSection
                title="محصولات مرتبط"
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
                        relationalProducts.map(product =>
                            <SwiperSlide key={product.id}>
                                <Link href={`/products/${product.id}`}>
                                    <div className="bg-white rounded-xl">
                                        <figure className="p-2 h-[140px] md:h-[160px] lg:h-[220px]">
                                            <img
                                                src={domain + product.gallery[0].image}
                                                alt={product.title}
                                                width="200"
                                                height="200"
                                                className="rounded-xl object-cover object-center h-full w-full " />
                                        </figure>
                                        <div className="card-body text-right w-full ">
                                            <h2 className="card-title font-bold text-[14px]">{product.title}</h2>
                                            <p className="card-title font-bold text-[12px]">فرمون خودرو مدل TRETTF2</p>
                                            <div className="card-actions flex justify-between items-center">
                                                <span className='text-[12px]'>{new Intl.NumberFormat().format(product.price)} <span className='text-[8px]'>تومان</span></span>
                                                {/* <BtnAddToBasket product={product} /> */}
                                            </div>
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

export default SuggestProduct