import React from "react";
import ShowDetailsInfo from "../Division/ShowDetailsInfo";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ReviewMain = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>LOADING.....</div>
      <ShowDetailsInfo></ShowDetailsInfo>
      {/* <ZillaDataShow></ZillaDataShow> */}
      <Footer></Footer>
    </div>
  );
};

export default ReviewMain;
