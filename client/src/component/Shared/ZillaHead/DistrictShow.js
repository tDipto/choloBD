import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import gif from "../../../assets/Loading.gif";
import bg_img from "../../../assets/lovepik.jpg";
import ShowDetailsInfo from "../../Division/ShowDetailsInfo";

const DistrictShow = () => {
  const params = useParams();
  const location = useLocation();
  // const { division, zilla, id } = params;
  const [divisionData, serDivisionData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/getReview")
      .then((res) => res.json())
      .then((data) => {
        serDivisionData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <img
            src={gif}
            alt="one"
            style={{ height: "300px", width: "400px" }}
          />
        </div>
      ) : (
        <div
          style={{
            /* backgroundColor: "#dbd8e3", */
            backgroundImage: `url(${bg_img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {divisionData.map((data) => (
            <ShowDetailsInfo placeData={data}></ShowDetailsInfo>
          ))}
        </div>
      )}
    </>
  );
};

export default DistrictShow;
