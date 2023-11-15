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

export default function GalleryImage({ gallery, image }) {

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
        <SwiperSlide>
          <img className="object-cover h-full items-center" src={image} alt={image.title} />
        </SwiperSlide>
        {
          gallery.map(image =>
            <SwiperSlide key={image.id}>
              <img
                className="object-cover"
                src={image.image}
                alt={image.title}
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
        <SwiperSlide className="swiper-slide2">
          <img
            src={image}
          />
        </SwiperSlide>
        {
          gallery.map(image =>
            <SwiperSlide key={image.id}>
              <img
                className="object-cover"
                src={image.image}
                alt={image.title}
              />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
}