import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import slideImage1 from "../assets/images/astr.jpg";
import slideImage2 from "../assets/images/astro.png";
import slideImage3 from "../assets/images/fone.jpg";
import slideImage4 from "../assets/images/jbl.jpg";
import slideImage5 from "../assets/images/mous.jpg";
import slideImage6 from "../assets/images/mouse.jpg";
import slideImage7 from "../assets/images/tec.jpg";
import slideImage8 from "../assets/images/teclad.jpg";

export const Destaques = () => {
  return (
    <section>
      <h2 className="mt-24 font-bold text-5xl text-blue-950 flex justify-center">
        Destaques
      </h2>
      <div className="m-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container mt-10"
        >
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage7} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="dest-img-slide w-1/3">
            <img src={slideImage8} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler mt-20">
            <div className="swiper-button-prev slider-arrow">
              <IoIosArrowBack />
            </div>
            <div className="swiper-button-next slider-arrow">
              <IoIosArrowForward />
            </div>
            <div className="swiper-pagination relative mt-7"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Destaques;
