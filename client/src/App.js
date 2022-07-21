import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Division from "./component/Division/Division";
import Home from "./component/Home/Home";
import Zilla from "./component/Zilla/Zilla";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route default path="/" element={<Home />} />
        {/* <Route path="/dhaka" element={<Dhaka />} />
        <Route path="/chittagong" element={<Chittagong />} />
        <Route path="/khulna" element={<Khulna />} />
        <Route path="/mymensingh" element={<Mymensingh />} />
        <Route path="/rajshahi" element={<Rajshahi />} />
        <Route path="/rangpur" element={<Rangpur />} />
        <Route path="/sylhet" element={<Sylhet />} /> */}
        {/*    <Route path="/barisal" element={<Barisal />} /> */}
        <Route path="/:division" element={<Division />} />
        <Route path="/:division/:zilla" element={<Zilla />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
