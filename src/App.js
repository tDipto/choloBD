import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Barisal from "./component/Division/Barisal/Barisal.js";
import Chittagong from "./component/Division/Chittagong/Chittagong.js";
import Dhaka from "./component/Division/Dhaka/Dhaka.js";
import Khulna from "./component/Division/Khulna/Khulna.js";
import Mymensingh from "./component/Division/Mymensingh/Mymensingh.js";
import Rajshahi from "./component/Division/Rajshahi/Rajshahi.js";
import Rangpur from "./component/Division/Rangpur/Rangpur.js";
import Sylhet from "./component/Division/Sylhet/Sylhet.js";
import Home from "./component/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route default path="/" element={<Home />} />
        <Route path="/dhaka" element={<Dhaka />} />
        <Route path="/chittagong" element={<Chittagong />} />
        <Route path="/khulna" element={<Khulna />} />
        <Route path="/mymensingh" element={<Mymensingh />} />
        <Route path="/rajshahi" element={<Rajshahi />} />
        <Route path="/rangpur" element={<Rangpur />} />
        <Route path="/sylhet" element={<Sylhet />} />
        <Route path="/barisal" element={<Barisal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
