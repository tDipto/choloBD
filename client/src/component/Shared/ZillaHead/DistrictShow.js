import React from "react";
import { useLocation, useParams } from "react-router-dom";
import bg_img from "../../../assets/lovepik.jpg";
import ShowDetailsInfo from "../../Division/ShowDetailsInfo";

const DistrictShow = () => {
  const params = useParams();
  const location = useLocation();
  // const { division, zilla, id } = params;
  console.log(params);

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
        <ShowDetailsInfo location={location}></ShowDetailsInfo>
      </div>
    </section>
  );
};

export default DistrictShow;
