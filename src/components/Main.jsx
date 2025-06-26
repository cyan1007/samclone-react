import "../styles/main/main.css";
import "../styles/main/sw-banner.css";
import "../styles/main/sw-card.css";
import "../styles/main/sw-shortcut.css";
import SwBanner from "./SwBanner";

const Main = () => {
 return (
  <main className="main">
   <div className="inner">
    <div className="main-left">
     {/* <!-- 안녕하세요 로그인 모바일 --> */}
     <div className="login-wrap-mb">
      <div className="hello">
       <img src="images/notice/off2.png" alt="안녕하세요" />
       <span>안녕하세요!</span>
      </div>
     </div>

     {/* <!-- 메인 배너 스와이퍼 --> */}
     <SwBanner />

     {/* <!-- 자주찾는 메뉴 모바일 --> */}
     <div className="shortcut-wrap-mb">
      <div className="swiper sw-shortcut">
       <div className="swiper-wrapper">
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_1.svg" alt="계약내용확인" />
          <span>
           계약내용
           <br />
           확인
          </span>
         </a>
        </div>
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_2.svg" alt="보험금청구" />
          <span>
           보험금
           <br />
           청구
          </span>
         </a>
        </div>
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_3.svg" alt="보험계약대출" />
          <span>
           보험계약
           <br />
           대출
          </span>
         </a>
        </div>
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_4.svg" alt="보험료납입" />
          <span>
           보험료
           <br />
           납입
          </span>
         </a>
        </div>
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_5.svg" alt="증명서발급" />
          <span>
           증명서
           <br />
           발급
          </span>
         </a>
        </div>
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_6.svg" alt="완전판매모니터링" />
          <span>
           완전판매
           <br />
           모니터링
          </span>
         </a>
        </div>
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_7.svg" alt="임시운전자특약" />
          <span>
           임시운전자
           <br />
           특약
          </span>
         </a>
        </div>
        <div className="swiper-slide">
         <a href="#">
          <img src="images/main/homepage/menu_shortcut_8.svg" alt="필요서류안내" />
          <span>
           필요서류
           <br />
           안내
          </span>
         </a>
        </div>
       </div>
      </div>
     </div>
     {/* <!-- 자동차 고장출동, 사고접수 모바일 --> */}
     <div className="car-wrap-mb">
      <ul>
       <li>
        <a href="#">
         <img src="images/main/homepage/ico_emergency1.svg" alt="자동차고장출동" />
         <span>자동차 고장출동</span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/ico_emergency2.svg" alt="자동차사고접수" />
         <span>자동차 사고접수</span>
        </a>
       </li>
      </ul>
     </div>

     {/* <!-- 많은 분들이 선택한 상품이에요 제품 영역 --> */}
     <div className="product-section">
      <h4>
       <span>많은 분들이 선택한 상품이에요</span>
      </h4>
      <div className="product-wrap">
       <div className="product-left">
        <a href="#">
         <img src="images/main/homepage/product_tit_6.png" alt="보험상품 한눈에 보기" />
         <div className="text">
          <p>보험상품 한눈에 보기</p>
          <img src="images/common/ico-common-arrow-14-b.svg" alt="화살표" />
         </div>
        </a>
       </div>

       <div className="product-right">
        <a href="#" className="card">
         <img src="images/main/homepage/product_img_15.png" alt="다이렉트 해외여행보험" />
         <div className="text">
          <h5>다이렉트 해외여행보험</h5>
          <p>
           안전한
           <br />
           나의 여행을 위해!
          </p>
         </div>
        </a>
        <a href="#" className="card">
         <img src="images/main/homepage/product_img_7.png" alt="다이렉트 자동차보험" />
         <div className="text">
          <h5>다이렉트 자동차보험</h5>
          <p>
           다이렉트로 저렴하게
           <br />
           보상서비스는 그대로!
          </p>
         </div>
        </a>
        <a href="#" className="card">
         <img src="images/main/homepage/product_img_8.png" alt="다이렉트 운전자보험" />
         <div className="text">
          <h5>다이렉트 운전자보험</h5>
          <p>
           핵심담보만 가입하는
           <br />
           착한3천플랜!
          </p>
         </div>
        </a>
        <a href="#" className="card">
         <img src="images/main/homepage/product_img_10.png" alt="함께가는 요양건강보험" />
         <div className="text">
          <h5>함께가는 요양건강보험</h5>
          <p>
           합리적인 보험료로 <br />
           행복한 노후를 준비하세요
          </p>
         </div>
        </a>
        <a href="#" className="card">
         <img src="images/main/homepage/product_img_11.png" alt="마이핏 건강보험" />
         <div className="text">
          <h5>마이핏 건강보험</h5>
          <p>
           내 생애주기에 맞게 <br />
           필요한 보장을 선택하세요
          </p>
         </div>
        </a>
        <a href="#" className="card">
         <img src="images/main/homepage/product_img_12.png" alt="직장인신용대출" />
         <div className="text">
          <h5>직장인신용대출</h5>
          <p>
           대출 한도 확인부터 <br />
           지급까지 한 번에!
          </p>
         </div>
        </a>
       </div>
      </div>
     </div>

     {/* <!-- 카드 스와이퍼 --> */}
     <div className="sw-card-section">
      {/* <!-- Swiper --> */}
      <div className="swiper sw-card">
       <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 4</div>
       </div>
       <div className="swiper-pagination"></div>
       <div className="swiper-button-next"></div>
       <div className="swiper-button-prev"></div>
      </div>
     </div>

     {/* <!-- 사이드 배너 모바일 --> */}
     <div className="side-banner-wrap-mb">
      <div className="side-banner">
       <a href="#">
        <div className="text">
         <h5>보험 가입이 어렵다면?</h5>
         <p>
          보험 전문가와
          <br />
          간편하게 상담해 보세요
         </p>
        </div>
        <img src="images/main/homepage/side_banner_1.png" alt="보험 가입이 어렵다면" />
       </a>
      </div>
      <div className="side-banner">
       <a href="#">
        <div className="text">
         <h5>
          내보험 잘<br />
          보장받고 있을까요?
         </h5>
         <p>셀프 보장분석으로 알아보세요</p>
        </div>
        <img src="images/main/homepage/side_banner_2.png" alt="내보험 잘 보장받고 있을까요?" />
       </a>
      </div>
      <div className="side-banner">
       <a href="#">
        <div className="text">
         <h5>
          삼성화재 RC(보험설계사)에
          <br />
          도전해 보세요
         </h5>
         <p>
          정년 없는 안정적인 직업을
          <br />
          알아보세요
         </p>
        </div>
        <img
         src="images/main/homepage/btm_banner_img_1.png"
         alt="삼성화재 RC(보험설계사)에 도전해 보세요"
        />
       </a>
      </div>
     </div>

     {/* <!-- 알려드려요 고객지원 영역 --> */}
     <div className="notice-customer-section">
      <div className="notice">
       <div className="notice-header">
        <h4>알려드려요</h4>
        <a href="#">
         <span>더보기</span>
         <img src="images/common/ico-common-arrow-14.svg" alt="더보기" />
        </a>
       </div>

       <ul>
        <li>
         <a href="#">[안내] Super보험 보험계약대출 한도 조정</a>
        </li>
        <li>
         <a href="#">[알림] 2025년 5월 자동차 보험사기 피해자 할증보험료 환급 등 피해구제</a>
        </li>
        <li>
         <a href="#">[안내] SKT 이용자 피해 예방 수칙</a>
        </li>
       </ul>
      </div>

      <div className="customer">
       <div className="customer-header">
        <h4>고객지원</h4>
       </div>

       <ul>
        <li>
         <a href="#">자주하는 질문</a>
        </li>
        <li>
         <a href="#">지점/서비스망 찾기</a>
        </li>
        <li>
         <a href="#">칭찬한마디</a>
        </li>
        <li>
         <a href="#">금융소비자포털</a>
        </li>
       </ul>
      </div>
     </div>
    </div>

    <div className="main-right">
     {/* <!-- 안녕하세요 --> */}
     <div className="login-wrap">
      <div className="hello">
       <img src="images/notice/off2.png" alt="안녕하세요" />
       <span>안녕하세요!</span>
      </div>

      <div className="btn">
       <a href="#">로그인</a>
      </div>

      <ul className="etc">
       <li>
        <a href="#">회원가입</a>
       </li>
       <li>
        <a href="#">인증센터</a>
       </li>
      </ul>
     </div>

     {/* <!-- 자주찾는 메뉴 --> */}
     <div className="shortcut-wrap">
      <h4>자주찾는 메뉴</h4>
      <ul>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_1.svg" alt="계약내용확인" />
         <span>
          계약내용
          <br />
          확인
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_2.svg" alt="보험금청구" />
         <span>
          보험금
          <br />
          청구
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_3.svg" alt="보험계약대출" />
         <span>
          보험계약
          <br />
          대출
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_4.svg" alt="보험료납입" />
         <span>
          보험료
          <br />
          납입
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_5.svg" alt="증명서발급" />
         <span>
          증명서
          <br />
          발급
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_6.svg" alt="완전판매모니터링" />
         <span>
          완전판매
          <br />
          모니터링
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_7.svg" alt="임시운전자특약" />
         <span>
          임시운전자
          <br />
          특약
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_8.svg" alt="필요서류안내" />
         <span>
          필요서류
          <br />
          안내
         </span>
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/main/homepage/menu_shortcut_9.svg" alt="자동차사고접수" />
         <span>
          자동차사고
          <br />
          접수
         </span>
        </a>
       </li>
      </ul>
     </div>

     {/* <!-- 사이드 배너 --> */}
     <div className="side-banner-wrap">
      <div className="side-banner">
       <a href="#">
        <div className="text">
         <h5>보험 가입이 어렵다면?</h5>
         <p>
          보험 전문가와
          <br />
          간편하게 상담해 보세요
         </p>
        </div>
        <img src="images/main/homepage/side_banner_1.png" alt="보험 가입이 어렵다면" />
       </a>
      </div>
      <div className="side-banner">
       <a href="#">
        <div className="text">
         <h5>
          내보험 잘<br />
          보장받고 있을까요?
         </h5>
         <p>셀프 보장분석으로 알아보세요</p>
        </div>
        <img src="images/main/homepage/side_banner_2.png" alt="내보험 잘 보장받고 있을까요?" />
       </a>
      </div>
      <div className="side-banner">
       <a href="#">
        <div className="text">
         <h5>
          삼성화재 RC(보험설계사)에
          <br />
          도전해 보세요
         </h5>
         <p>
          정년 없는 안정적인 직업을
          <br />
          알아보세요
         </p>
        </div>
        <img
         src="images/main/homepage/btm_banner_img_1.png"
         alt="삼성화재 RC(보험설계사)에 도전해 보세요"
        />
       </a>
      </div>
     </div>
    </div>
   </div>
  </main>
 );
};
export default Main;
