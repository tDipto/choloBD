import React, { useEffect, useState } from "react";
/* import { useLocation, useParams } from "react-router-dom"; */
import bg_img from "../../../assets/bg-review.jpg";
import ShowDetailsInfo from "../../Division/ShowDetailsInfo";

const DistrictShow = () => {
  /*  const params = useParams();
  const location = useLocation(); */
  // const { division, zilla, id } = params;
  const [divisionData, serDivisionData] = useState([]);
  /* console.log(params); */
  useEffect(() => {
    fetch("http://localhost:5000/getReview")
      .then((res) => res.json())
      .then((data) => serDivisionData(data));
  }, []);

  return (
    <section>
      <div
        style={{
          /* backgroundColor: "#dbd8e3", */
          backgroundImage: `url(${bg_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {divisionData.map((data) => (
          <ShowDetailsInfo divisionData={data}></ShowDetailsInfo>
        ))}
      </div>
    </section>
  );
};

export default DistrictShow;
