import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/main/sw-card.css";

const SwCard = () => {
 return (
  <div className="sw-card-section">
   {/* <!-- Swiper --> */}
   <Swiper
    className="swiper sw-card"
    centeredSlides={false}
    slidesPerView="auto"
    spaceBetween={30}
    pagination={{
     el: ".swiper-pagination",
     clickable: true,
    }}
    navigation={{
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
    }}
    breakpoints={{
     0: {
      centeredSlides: true,
      spaceBetween: 20,
     },
     768: {
      centeredSlides: false,
      spaceBetween: 30,
     },
     1220: {
      centeredSlides: false,
      spaceBetween: 30,
     },
    }}
    modules={[Pagination, Navigation]}
   >
    <div className="swiper-wrapper">
     <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
     <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
     <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
     <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
    </div>
    <div className="swiper-pagination"></div>
    <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div>
   </Swiper>
  </div>
 );
};

export default SwCard;
