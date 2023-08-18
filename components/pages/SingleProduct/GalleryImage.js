import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function GalleryImage({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mt-4 lg:mt-0">
      <Swiper
        spaceBetween={10}
        // navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 swiper-slide2 rounded-md"
      >
        {
          images.map(image =>
            <SwiperSlide key={image.id}>
              <img className=" "
                src={image.image}
                width='100'
                height='100'
                alt={images.title}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper2 rounded-md mt-4 h-[10px]"
      >
        {
          images.map(image =>
            <SwiperSlide key={image.id} className="swiper-slide2">
              <img
                src={image.image}
                className='object-center object-cover'
                width='50'
                height='50'
                alt={images.title}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
}