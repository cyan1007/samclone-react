import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
 return (
  <>
   <div className="wrap" style={{ width: "100%" }}>
    <Header />
    <Main />
    <Footer />
   </div>
   {/* 네비게이션 바 */}
   <Navbar />
   {/* 모달 */}
   <Modal />
  </>
 );
}

export default App;
