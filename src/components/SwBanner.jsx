// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/main/sw-banner.css";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// 슬라이드 초기 데이터
const slideData = [
 { id: 1, title: "첫 번째 배너" },
 { id: 2, title: "두 번째 배너" },
 { id: 3, title: "세 번째 배너" },
 { id: 4, title: "새로운 이벤트 배너" },
 { id: 5, title: "네 번째 배너" },
 { id: 6, title: "다섯 번째 배너" },
 { id: 7, title: "여섯 번째 배너" },
 { id: 8, title: "일곱 번째 배너" },
];

const SwBanner = () => {
 const swiperRef = useRef(null);
 const [isStop, setIsStop] = useState(false);

 // 커스텀 fraction 렌더링 함수
 const renderFraction = (currentClass, totalClass) => {
  return `
    <span class="${currentClass}"></span>
    <span class="${totalClass}"></span>`;
 };

 // 슬라이드 정지/재생 함수
 const handlePlayStop = () => {
  if (!swiperRef.current) return;
  if (!isStop) {
   swiperRef.current.swiper.autoplay.stop();
   setIsStop(true);
  } else {
   swiperRef.current.swiper.autoplay.start();
   setIsStop(false);
  }
 };

 return (
  <div className="sw-banner-section">
   {/* <!-- Swiper --> */}
   <Swiper
    ref={swiperRef}
    centeredSlides={true}
    loop={true}
    speed={500}
    autoplay={{
     delay: 2500,
     disableOnInteraction: false,
    }}
    pagination={{
     el: ".banner-pagination",
     type: "fraction",
     renderFraction: renderFraction,
    }}
    navigation={{
     nextEl: ".next-bnt",
     prevEl: ".prev-btn",
    }}
    modules={[Pagination, Navigation, Autoplay]}
    className="swiper sw-banner"
   >
    <div className="swiper-wrapper">
     {slideData.map((slide) => (
      <SwiperSlide key={slide.id} className="swiper-slide">
       {slide.title}
      </SwiperSlide>
     ))}
    </div>
    <div className="page-nav">
     <div className="prev-btn">
      <a href="#">
       <img src="images/main/homepage/slider_prev.svg" alt="이전" />
      </a>
     </div>
     <div className="banner-pagination"></div>
     <div className="next-bnt">
      <a href="#">
       <img src="images/main/homepage/slider_next.svg" alt="다음" />
      </a>
     </div>
     <div
      className="play-stop-btn"
      onClick={handlePlayStop}
      style={{
       backgroundImage: `url(${
        isStop ? "images/main/homepage/slider_play.svg" : "images/main/homepage/slider_stop.svg"
       })`,
      }}
     ></div>
    </div>
   </Swiper>
  </div>
 );
};
export default SwBanner;
