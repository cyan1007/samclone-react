import "../styles/footer/footer.css";

const Footer = () => {
 return (
  <footer className="footer">
   <div className="footer-top">
    <div className="inner">
     <ul>
      <li>
       <a href="#">
        <span>소비자보호</span>
        <img src="images/common/ico-common-fold-arr.svg" alt="소비자보호" />
       </a>
       <ul className="submenu">
        <li>
         <a href="#">휴면보험금 출연 안내</a>
        </li>
        <li>
         <a href="#">자동차 간접손해보험금 안내</a>
        </li>
        <li>
         <a href="#">과납보험료 환급신청</a>
        </li>
        <li>
         <a href="#">서민금융 1332</a>
        </li>
        <li>
         <a href="#">자동차리콜센터</a>
        </li>
        <li>
         <a href="#">신용정보활용체제공시</a>
        </li>
        <li>
         <a href="#">전자금융거래 유의사항</a>
        </li>
        <li>
         <a href="#">이메일 무단수집 거부</a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#">
        <span>신고센터</span>
        <img src="images/common/ico-common-fold-arr.svg" alt="신고센터" />
       </a>
       <ul className="submenu">
        <li>
         <a href="#">Comming Soon</a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#">
        <span>해외법인</span>
        <img src="images/common/ico-common-fold-arr.svg" alt="해외법인" />
       </a>
       <ul className="submenu">
        <li>
         <a href="#">Comming Soon</a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#">
        <span>패밀리사이트</span>
        <img src="images/common/ico-common-fold-arr.svg" alt="패밀리사이트" />
       </a>
       <ul className="submenu">
        <li>
         <a href="#">Comming Soon</a>
        </li>
       </ul>
      </li>
      <li>
       <a href="#">
        <span>삼성화재 SNS</span>
        <img src="images/common/ico-common-fold-arr.svg" alt="삼성화재 SNS" />
       </a>
       <ul className="submenu">
        <li>
         <a href="#">Comming Soon</a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
   </div>
   <div className="footer-bottom">
    <div className="inner">
     <div className="policy">
      <a href="#">상품공시</a>
      <a href="#">보험가격공시</a>
      <a href="#">보험금융상품등록부</a>
      <a href="#">회원가입약관</a>
      <a href="#">소비자포털</a>
      <a href="#">개인정보관리책임자</a>
      <a href="#">개인정보처리방침</a>
      <a href="#">고객정보취급방침</a>
     </div>
     {/* <!-- 푸터 모바일 SNS 영역 --> */}
     <div className="sns-wrap-mb">
      <ul>
       <li>
        <a href="#">
         <img src="images/common/footer-sns1.svg" alt="유튜브" />
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/common/footer-sns2.svg" alt="인스타그램" />
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/common/footer-sns3.svg" alt="페이스북" />
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/common/footer-sns4.svg" alt="네이버" />
        </a>
       </li>
      </ul>
     </div>
     {/* <!-- 푸터 모바일 정책 영역 --> */}
     <div className="policy-wrap-mp">
      <div className="policy-item">
       <a href="#">회사소개</a>
      </div>
      <div className="policy-item">
       <a href="#">IR</a>
      </div>
      <div className="policy-item">
       <a href="#">공시실</a>
      </div>
      <div className="policy-item">
       <a href="#">소비자포털</a>
      </div>
      <div className="policy-item">
       <a href="#">RC(보험설계사)</a>
      </div>
      <div className="policy-item-br"></div>
      <div className="policy-item">
       <a href="#">개인정보처리방침</a>
      </div>
      <div className="policy-item">
       <a href="#">고객정보취급방침</a>
      </div>
      <div className="policy-item-br"></div>
      <div className="policy-item">
       <a href="#">위치기반서비스이용약관</a>
      </div>
     </div>
     <div className="info">
      <div className="info-right">
       <a href="#">
        <img src="images/common/ico-footer-tell.svg" alt="삼성화재 업무별 콜센터 안내" />
        <span>삼성화재 업무별 콜센터 안내</span>
       </a>
      </div>
      <div className="info-left">
       <ul>
        <li>삼성화재해상보험주식회사</li>
        <li>대표이사 사장 이문화</li>
        <li className="flex-full">서울특별시 서초구 서초대로 74길 14</li>
        <li className="flex-full">사업자등록번호 202-81-45617</li>
       </ul>
       <div className="copyright">
        <span>
         © Samsung Fire & Marine Insurance Co., Ltd.
         <br className="mb-only" />
         All Rights Reserved.
        </span>
       </div>
      </div>
     </div>
     <div className="footer-logo-wrap">
      <div className="footer-logo">
       <img src="images/common/footer-logo.svg" alt="하단로고" />
      </div>
      <div className="footer-mark">
       <ul>
        <li>
         <a href="#">
          <img src="images/common/footer-mark1.png" alt="국가고객만족도-NCSI" />
         </a>
        </li>
        <li>
         <a href="#">
          <img src="images/common/footer-mark2.png" alt="한국산업 고객만족도-KCSI" />
         </a>
        </li>
        <li>
         <a href="#">
          <img src="images/common/footer-mark3.png" alt="개인정보보호인증-ePRIVACY PLUS" />
         </a>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
};
export default Footer;
