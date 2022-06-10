import React from "react";
import Navbar from "../../Navbar/Navbar";
import DivisionHead from "../../Shared/DivisionHead/DivisionHead";

const data = [
  { id: 1, name: "d" },
  { id: 2, name: "a" },
  { id: 3, name: "s" },
  { id: 4, name: "f" },
  { id: 5, name: "t" },
];

const Barisal = () => {
  return (
    <>
      <Navbar></Navbar>
      <DivisionHead data={data}></DivisionHead>;{/* <p>Hello Barisal</p> */}
    </>
  );
};

export default Barisal;
