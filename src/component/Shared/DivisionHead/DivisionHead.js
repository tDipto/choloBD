import React from "react";
import img1 from "../../../assets/images/13.jpg";
import ZillaUnderDivision from "../ZillaUnderDivision";
const DivisionHead = ({ data }) => {
  return (
    <>
      <div class=" text-center">
        <div class="d-inline-block">
          <div class="card" style={{ width: "40rem", height: "20rem" }}>
            <img class="card-img-top" src={img1} alt="Card image cap" />
            <div class="card-body text-center">
              <p class="card-text">ছত্রগ্রাম</p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-5">
        {data.map((nameinfo) => (
          <ZillaUnderDivision nameinfo={nameinfo}></ZillaUnderDivision>
        ))}
      </div>
    </>
  );
};

export default DivisionHead;
