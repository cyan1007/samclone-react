import { useState } from "react";
import "../styles/modal.css";

const Modal = ({ isOpen, onClose }) => {
 const [openIndex, setOpenIndex] = useState(null);

 const handleDepth2Click = (index) => {
  setOpenIndex(openIndex === index ? null : index);
 };

 return (
  <div
   className="modal-wrap"
   style={{
    right: isOpen ? "0" : "-100%",
   }}
  >
   <div className="modal-inner">
    {/* <!-- 모달 헤더 --> */}
    <div className="modal-header">
     <h3 className="modal-nav-logo">
      <div className="logo">
       <a href="#">
        <span>삼성화재</span>
       </a>
      </div>
      <div className="login-btn">
       <a href="#">
        <span>로그인</span>
       </a>
      </div>
     </h3>
    </div>
    {/* <!-- 모달 닫기 버튼 --> */}
    <div className="modal-close-btn" onClick={onClose}></div>
    {/* <!-- 모달 메뉴 --> */}
    <div className="modal-menu-wrap">
     {/* <!-- 모달 검색 --> */}
     <div className="modal-searchbar">
      <input type="text" placeholder="삼성화재 메뉴 검색" />
     </div>
     {/* <!-- 모달 메뉴 리스트 --> */}
     <div className="modal-menu">
      <div className="modal-menu-nav">
       <ul>
        <li className="on">
         <a href="#contract">계약관리</a>
        </li>
        <li>
         <a href="#insurance">보험상품</a>
        </li>
        <li>
         <a href="#reward">보상</a>
        </li>
        <li>
         <a href="#loan">대출</a>
        </li>
        <li>
         <a href="#retirement">퇴직연금</a>
        </li>
        <li>
         <a href="#services">혜택/서비스</a>
        </li>
        <li>
         <a href="#customer">고객센터</a>
        </li>
       </ul>
      </div>
      <div className="modal-menu-list">
       <div id="contract">
        <h4>계약관리</h4>
        <ul className="modal-submenu depth2">
         <li>
          <a href="#">보험계약</a>
          <ul className="depth3">
           <li>
            <a href="#">계약내용 확인</a>
           </li>
           <li>
            <a href="#">대리운전자보험계약 확인</a>
           </li>
           <li>
            <a href="#">TM계약 녹취 확인/신청</a>
           </li>
           <li>
            <a href="#">4세대 실손의료비 할인/할증 확인</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">장기보험</a>
          <ul>
           <li>
            <a href="#">계약자 변경</a>
           </li>
           <li>
            <a href="#">수익자 변경</a>
           </li>
           <li>
            <a href="#">피보험자 직업 변경</a>
           </li>
           <li>
            <a href="#">이륜차 알릴사항 변경</a>
           </li>
           <li>
            <a href="#">자녀 등록(태아확정)</a>
           </li>
           <li>
            <a href="#">소재지 변경</a>
           </li>
           <li>
            <a href="#">연금보험료 변경</a>
           </li>
           <li>
            <a href="#">연금납입한도 설정</a>
           </li>
           <li>
            <a href="#">실손의료비 중지/재개 신청</a>
           </li>
           <li>
            <a href="#">해외장기체류자 실손의료비 납입 중지 신청</a>
           </li>
           <li>
            <a href="#">무사고 보험계약 전환</a>
           </li>
           <li>
            <a href="#">완전판매모니터링</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">자동차보험</a>
          <ul>
           <li>
            <a href="#">가입금액/특약 변경</a>
           </li>
           <li>
            <a href="#">운전자 범위/연령 변경</a>
           </li>
           <li>
            <a href="#">임시운전자 특약 가입</a>
           </li>
           <li>
            <a href="#">임시운전자 특약 해지</a>
           </li>
           <li>
            <a href="#">마일리지 특약 가입</a>
           </li>
           <li>
            <a href="#">최종 주행거리 사진 등록</a>
           </li>
           <li>
            <a href="#">자동차번호 등록</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">여행보험</a>
          <ul>
           <li>
            <a href="#">여행보험 기간 변경</a>
           </li>
           <li>
            <a href="#">여행보험 계약자 영문명 변경</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">납입</a>
          <ul>
           <li>
            <a href="#">보험료 납입</a>
           </li>
           <li>
            <a href="#">연금(저축)보험료 추가 납입</a>
           </li>
           <li>
            <a href="#">효력상실예정계약 보험료 납입</a>
           </li>
           <li>
            <a href="#">보험료 납입방법 변경</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">환급/해지</a>
          <ul>
           <li>
            <a href="#">환급내역 확인</a>
           </li>
           <li>
            <a href="#">환급금 수령계좌 변경</a>
           </li>
           <li>
            <a href="#">환급금/휴면보험금 신청</a>
           </li>
           <li>
            <a href="#">중도인출 신청</a>
           </li>
           <li>
            <a href="#">장기보험 해지</a>
           </li>
           <li>
            <a href="#">자동차보험 양도/말소해지</a>
           </li>
           <li>
            <a href="#">자동차보험 해지서류 제출</a>
           </li>
           <li>
            <a href="#">청약철회/개시 전 취소</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">펀드</a>
          <ul>
           <li>
            <a href="#">펀드상품 안내</a>
           </li>
           <li>
            <a href="#">보유펀드 확인</a>
           </li>
           <li>
            <a href="#">펀드매매</a>
           </li>
           <li>
            <a href="#">출금가능금액 확인/출금</a>
           </li>
           <li>
            <a href="#">펀드계좌 관리</a>
           </li>
           <li>
            <a href="#">펀드 이용가이드</a>
           </li>
           <li>
            <a href="#">펀드상품 수시공시</a>
           </li>
          </ul>
         </li>
        </ul>
       </div>
       <div id="insurance">
        <h4>보험상품</h4>
        <ul className="modal-submenu">
         <li>
          <a href="#">보험가이드</a>
          <ul>
           <li>
            <a href="#">셀프 보장분석</a>
           </li>
           <li>
            <a href="#">보험상품 한눈에 보기</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">자동차보험</a>
          <ul>
           <li>
            <a href="#">애니카 자동차보험</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">운전자/상해보험</a>
          <ul>
           <li>
            <a href="#">안전운전 파트너 플러스</a>
           </li>
           <li>
            <a href="#">행복한 안심파트너</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">실손의료비보험</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">자녀보험</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">건강보험</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">치아보험</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">주택화재/풍수해보험</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">사업장화재/재물보험</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">연금보험</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">외국어 가입 상담(English/中文)</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
        </ul>
       </div>
       <div id="reward">
        <h4>보상</h4>
        <ul className="modal-submenu">
         <li>
          <a href="#">질병/상해</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">자동차</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">반려동물</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">재물/배상책임</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">보상가이드</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
        </ul>
       </div>
       <div id="loan">
        <h4>대출</h4>
        <ul className="modal-submenu">
         <li>
          <a href="#">보험계약대출</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">신용대출</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">담보대출</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">대출계약</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">금융소비자의 권리</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
        </ul>
       </div>
       <div id="retirement">
        <h4>퇴직연금</h4>
        <ul className="modal-submenu">
         <li>
          <a href="#">퇴직연금계약</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">상품운용</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">개인형퇴직연금(IRP)</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">확정연금</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">확정기여형퇴직연금(DC)</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">실물이전</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">퇴직연금제도</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">고객지원</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">PLUS 서비스</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
        </ul>
       </div>
       <div id="services">
        <h4>혜택/서비스</h4>
        <ul className="modal-submenu">
         <li>
          <a href="#">피크닉 서비스</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">애니포인트</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">헬스케어서비스</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">Car케어서비스</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">착!한생활서비스</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">생활부가서비스</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">라이프케어</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">소셜미디어</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">이벤트</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
        </ul>
       </div>
       <div id="customer">
        <h4>고객센터</h4>
        <ul className="modal-submenu">
         <li>
          <a href="#">내정보</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">증명서</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">고객지원</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">공지사항</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">고객의소리</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">인증센터</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">홈페이지이용약관</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
         <li>
          <a href="#">개인정보보호</a>
          <ul>
           <li>
            <a href="#">Comming Soon</a>
           </li>
          </ul>
         </li>
        </ul>
       </div>
      </div>
     </div>
     {/* <!-- 모달 푸터 --> */}
     <div className="modal-footer">
      <div className="modal-footer-inner">
       <a href="#">회사소개</a>
       <a href="#">공시실</a>
       <a href="#">소비자포털</a>
       <a href="#">RC(보험설계사)</a>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Modal;
