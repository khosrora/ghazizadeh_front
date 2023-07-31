import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import BtnAddToBasket from '../../sharedUi/BtnAddToBasket';
import TitleSection from '../../sharedUi/TitleSection';
import BtnSwipper from '../../sharedUi/BtnSwipper';
import Link from 'next/link';


const items = [
    {
        id: 1,
        image: 'https://dreamcharters.us/wp-content/uploads/2022/07/White-Rolls-Royce-Ghost-For-Rent-3-1024x683.webp',
        name: 'تویوتا'
    },
    {
        id: 2,
        image: 'https://all-andorra.com/wp-content/uploads/2018/09/Mercedes-AMG-GT-S-Coupe_-mat-grey-body.-4.0-LITER-V8-BITURBO-ENGINE-0-100-km_h-3.8-s.png',
        name: 'بنز'
    },
    {
        id: 3,
        image: 'https://www.topgear.com/sites/default/files/news-listicle/image/a80330.jpg',
        name: 'سانگ یانگ'
    },
    {
        id: 4,
        image: 'https://cfx-wp-images.imgix.net/2022/05/2022-Cadillac-CT4.jpg?auto=compress%2Cformat&fit=scale&h=682&ixlib=php-3.3.0&w=1024&wpsize=large&s=1e5bef1d726088e9362ebcca8019c683',
        name: 'کیا'
    },
    {
        id: 5,
        image: 'https://dreamcharters.us/wp-content/uploads/2022/07/White-Rolls-Royce-Ghost-For-Rent-3-1024x683.webp',
        name: 'ام جی'
    },
    {
        id: 6,
        image: 'https://images.opumo.com/wordpress/wp-content/uploads/2022/06/opumo-mercedes-1200x578.jpg',
        name: 'هیوندا'
    },
    {
        id: 7,
        image: 'https://dreamcharters.us/wp-content/uploads/2022/07/White-Rolls-Royce-Ghost-For-Rent-3-1024x683.webp',
        name: 'جک'
    },
    {
        id: 8,
        image: 'https://www.cartoq.com/wp-content/uploads/2022/06/yellow-bent-bentley-for-sale-1.jpg',
        name: 'لیفان'
    },
]

function SuggestProduct() {

    const swiperRef = useRef();

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
                        items.map(i =>
                            <SwiperSlide key={i}>
                                <div key={i.id} className="card bg-[#F8F9FA] h-[270px] lg:h-[324px]">
                                    <figure className='h-[180px] '>
                                        <img className='rounded-xl h-full w-full object-cover' src={i.image} alt="Shoes" />
                                    </figure>
                                    <div className="card-body p-2">
                                        <h2 className="card-title text-[14px]">{i.name}</h2>
                                        <p className='text-[12px]'>{i.name} مدل</p>
                                        <Link href="/all_cars/1">
                                            <div className="card-actions btn text-white rounded-full text-center bg-[#FFFFFF] flex justify-center items-center">
                                                <div className="card-actions w-full flex justify-center items-center">
                                                    <span className="text-[#EA0028] text-[12px]">مشاهده محصولات</span>
                                                </div>
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
    )
}

export default SuggestProduct