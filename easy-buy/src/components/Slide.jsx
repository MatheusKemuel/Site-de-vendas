import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/images/slide-bg.png";
import slide2 from "../assets/images/teclado-slider.png";
// import slide3 from '../assets/images/'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

export const Slide = () => {
  return (
    <section>
      <div className="slide  mt-14">
        <Swiper
     
          loop={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide >
            <div className="slide-content">
              <img className="slideimg m-auto" src={slide1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              
              <img className="slideimg m-auto" src={slide2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              
              <img className="slideimg m-auto" src={slide1} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slide;
