import "../styles/footer/navbar.css";

const Navbar = () => {
 return (
  <aside className="bt-navbar">
   <div className="bt-navbar-bg">
    <span className="round"></span>
   </div>
   <div className="bt-navbar-inner">
    <ul>
     <li>
      <a href="#">
       <p>홈</p>
      </a>
     </li>
     <li>
      <a href="#">
       <p>상품</p>
      </a>
     </li>
     <li className="consultant">
      <a href="#">
       <p>가입상담</p>
      </a>
     </li>
     <li>
      <a href="#">
       <p>혜택</p>
      </a>
     </li>
     <li>
      <a href="#">
       <p>마이</p>
      </a>
     </li>
    </ul>
   </div>
  </aside>
 );
};

export default Navbar;
