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

export default function GalleryImage() {
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
          <img className="object-cover" src="https://cdn.nody.ir/files/2021/09/12/nody-%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%B9%DA%A9%D8%B3-%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-1631419522.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://cdn.nody.ir/files/2021/08/21/nody-%D8%B9%DA%A9%D8%B3-%D8%A8%DB%8C-%D8%A7%D9%85-%D9%88-%D9%87%D8%A7%DB%8C-%D9%85%D9%88%D8%AC%D9%88%D8%AF-%D8%AF%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-1629548416.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://yadakyar.com/blog/wp-content/uploads/2022/10/%D8%A8%DB%8C-%D8%A7%D9%85-%D9%88-%D8%A7%D9%93%DB%8C-8.jpg" />
        </SwiperSlide>
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
            src="https://cdn.nody.ir/files/2021/09/12/nody-%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%B9%DA%A9%D8%B3-%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-1631419522.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.nody.ir/files/2021/08/21/nody-%D8%B9%DA%A9%D8%B3-%D8%A8%DB%8C-%D8%A7%D9%85-%D9%88-%D9%87%D8%A7%DB%8C-%D9%85%D9%88%D8%AC%D9%88%D8%AF-%D8%AF%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-1629548416.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://yadakyar.com/blog/wp-content/uploads/2022/10/%D8%A8%DB%8C-%D8%A7%D9%85-%D9%88-%D8%A7%D9%93%DB%8C-8.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}