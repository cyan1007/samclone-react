import { useEffect, useState } from "react";
import "../styles/header/header.css";

const Header = () => {
 const [isSticky, setIsSticky] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY > 50) {
    setIsSticky(true);
   } else {
    setIsSticky(false);
   }
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 return (
  <header className="header">
   <div className="header-top">
    <div className="inner">
     <div className="header-top-left">
      <ul>
       <li>
        <a href="#">기업보험</a>
       </li>
       <li>
        <a href="#">삼성화재 다이렉트</a>
       </li>
       <li>
        <a href="#">회사소개</a>
       </li>
       <li>
        <a href="#">IR</a>
       </li>
       <li>
        <a href="#">공시실</a>
       </li>
       <li>
        <a href="#">소비자포털</a>
       </li>
       <li>
        <a href="#">RC(보험설계사)</a>
       </li>
      </ul>
     </div>
     <div className="header-top-right">
      <ul>
       <li>
        <a href="#">회원가입</a>
       </li>
       <li>
        <a href="#">로그인</a>
       </li>
      </ul>
     </div>
    </div>
   </div>

   <div className={`header-bottom ${isSticky ? "sticky" : ""}`}>
    <div className="inner">
     <div className="logo">
      <a href="index.html">
       <img src="images/common/header-logo.svg" alt="삼성화재 로고" />
      </a>
     </div>

     <nav className="gnb">
      <ul>
       <li>
        <a href="#">계약관리</a>
       </li>
       <li>
        <a href="#">보험상품</a>
       </li>
       <li>
        <a href="#">보상</a>
       </li>
       <li>
        <a href="#">대출</a>
       </li>
       <li>
        <a href="#">퇴직연금</a>
       </li>
       <li>
        <a href="#">혜택/서비스</a>
       </li>
       <li>
        <a href="#">고객센터</a>
       </li>
      </ul>
     </nav>

     <div className="etc-menu">
      <ul>
       <li>
        <a href="#">
         <img src="images/common/ico-gnb-my-pc.svg" alt="프로필아이콘" />
        </a>
       </li>
       <li>
        <a href="#">
         <img src="images/common/ico-gnb-search-pc.svg" alt="검색아이콘" />
        </a>
       </li>
       <li className="modal-menu-btn">
        <a href="#">
         <img src="images/common/ico-gnb-menu-pc.svg" alt="메뉴아이콘" />
        </a>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </header>
 );
};

export default Header;
