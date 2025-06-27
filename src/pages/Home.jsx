import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";

function Home() {
 const [isModalOpen, setIsModalOpen] = useState(false);

 // 모달 메뉴 열기
 const handleModalOpen = (e) => {
  e.preventDefault();
  setIsModalOpen(true);
  document.documentElement.style.overflowY = "hidden"; // 스크롤 비활성화
 };
 // 모달 메뉴 닫기
 const handleModalClose = () => {
  setIsModalOpen(false);
  document.documentElement.style.overflowY = "auto"; // 스크롤 활성화
 };

 return (
  <>
   <div className="wrap" style={{ width: "100%" }}>
    <Header handleModalOpen={handleModalOpen} />
    <Main />
    <Footer />
   </div>
   {/* 네비게이션 바 */}
   <Navbar />
   {/* 모달 */}
   <Modal isOpen={isModalOpen} onClose={handleModalClose} />
  </>
 );
}

export default Home;
