import React from 'react'
import TitleSection from '../../../sharedUi/TitleSection';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useRouter } from 'next/router';


function BrandsIcons({ banners, setHasMore }) {

    const router = useRouter();

    const handleRoute = id => {
        setHasMore(true)
        if (id === null) router.push(`/all_cars`)
        else router.push(`/all_cars?brand=${id}`)
    }

    return (
        <div>
            <TitleSection
                span
                title="برند های خودرو"
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
                    }
                }}
                spaceBetween={10}
            >
                <SwiperSlide>
                    <div onClick={() => handleRoute(null)} className="badge p-4 w-28 text-[16px] cursor-pointer">همه</div>
                </SwiperSlide>
                {
                    banners.map(i =>
                        <SwiperSlide key={i.id}>
                            <div onClick={() => handleRoute(i.id)} className="badge p-4 w-28 text-[16px] cursor-pointer">{i.title}</div>
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </div>
    )
}

export default BrandsIcons