import React from "react";
import { useParams } from "react-router-dom";
import { CollectionHotel } from "../../assets/Hotel.js";
import Footer from "../Footer/Footer.js";
import Navbar from "../Navbar/Navbar.js";
import ShowHotel from "./ShowHotel.js";
const Hotel = () => {
  const params = useParams();
  /* console.log(params.zilla); */
  /* console.log(CollectionHotel.distNameBn); */
  return (
    <>
      <Navbar></Navbar>
      {CollectionHotel.filter((dist) => dist.distNameBn === params.zilla).map(
        (dataHotel) => (
          <ShowHotel dataHotel={dataHotel}></ShowHotel>
        )
      )}
      <Footer></Footer>
    </>
  );
};

export default Hotel;
