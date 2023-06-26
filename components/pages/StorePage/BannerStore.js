import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';

const items = [
    {
        id: 2,
        url: 'https://wallpapercave.com/dwp2x/wp8301190.jpg'
    },
    {
        id: 3,
        url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-sale-banner-design-template-f3025e019370db68e4ddb97ae9a10178_screen.jpg?ts=1639355203'
    },
    {
        id: 4,
        url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-sale-banner-design-template-f3025e019370db68e4ddb97ae9a10178_screen.jpg?ts=1639355203'
    },
]


function BannerStore() {

    const swiperRef = useRef();

    return (
        <div className='px-4'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={{ clickable: true }}
            >
                {
                    items.map(i =>
                        <SwiperSlide key={i.id}>
                            <Link href='/'>
                                <div className="h-full rounded-xl overflow-hidden lg:h-[320px]">
                                    <img
                                        src={i.url}
                                        className="object-cover h-full"
                                        width='200'
                                        height='200'
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default BannerStore