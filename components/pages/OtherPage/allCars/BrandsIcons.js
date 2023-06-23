import React from 'react'
import TitleSection from '../../../sharedUi/TitleSection';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


let items = [
    {
        id: 1,
        name: 'لیفان'
    },
    {
        id: 2,
        name: 'تویوتا'
    },
    {
        id: 3,
        name: 'جی ای اس'
    },
    {
        id: 4,
        name: 'هیوندای'
    },
    {
        id: 5,
        name: 'پی وای دی'
    },
    {
        id: 6,
        name: 'ام جی'
    },
    {
        id: 7,
        name: 'سانگ یانگ'
    },
]

function BrandsIcons() {
    return (
        <div>
            <TitleSection
                span
                title="لوازم خودرو بر اساس برند"
            />
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    740: {
                        slidesPerView: 7,
                    },
                    1200: {
                        slidesPerView: 10,
                    },
                    2000: {
                        slidesPerView: 12,
                    },
                }}
                spaceBetween={10}
            >
                {
                    items.map(i =>
                        <SwiperSlide key={i.id}>
                            <div className="badge p-4 w-28 text-[16px]">{i.name}</div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    )
}

export default BrandsIcons