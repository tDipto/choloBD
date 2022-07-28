import React from "react";
import { useLocation, useParams } from "react-router-dom";
<<<<<<< HEAD
import bg_img from "../../../assets/lovepik.jpg";
=======
import bg_img from "../../../assets/bg-review.jpg";
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181
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
