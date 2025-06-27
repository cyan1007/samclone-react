import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
 return (
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
 );
}

export default App;
