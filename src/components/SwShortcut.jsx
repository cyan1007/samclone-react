import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/main/sw-shortcut.css";

const SwShortcut = () => {
 return (
  <div className="shortcut-wrap-mb">
   <Swiper className="swiper sw-shortcut" centeredSlides={false} slidesPerView="auto">
    <div className="swiper-wrapper">
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_1.svg" alt="계약내용확인" />
       <span>
        계약내용
        <br />
        확인
       </span>
      </a>
     </SwiperSlide>
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_2.svg" alt="보험금청구" />
       <span>
        보험금
        <br />
        청구
       </span>
      </a>
     </SwiperSlide>
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_3.svg" alt="보험계약대출" />
       <span>
        보험계약
        <br />
        대출
       </span>
      </a>
     </SwiperSlide>
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_4.svg" alt="보험료납입" />
       <span>
        보험료
        <br />
        납입
       </span>
      </a>
     </SwiperSlide>
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_5.svg" alt="증명서발급" />
       <span>
        증명서
        <br />
        발급
       </span>
      </a>
     </SwiperSlide>
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_6.svg" alt="완전판매모니터링" />
       <span>
        완전판매
        <br />
        모니터링
       </span>
      </a>
     </SwiperSlide>
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_7.svg" alt="임시운전자특약" />
       <span>
        임시운전자
        <br />
        특약
       </span>
      </a>
     </SwiperSlide>
     <SwiperSlide className="swiper-slide">
      <a href="#">
       <img src="images/main/homepage/menu_shortcut_8.svg" alt="필요서류안내" />
       <span>
        필요서류
        <br />
        안내
       </span>
      </a>
     </SwiperSlide>
    </div>
   </Swiper>
  </div>
 );
};

export default SwShortcut;
