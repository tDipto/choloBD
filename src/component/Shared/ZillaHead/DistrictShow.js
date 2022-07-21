import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ShowDetailsInfo from "../../Division/ShowDetailsInfo";

const DistrictShow = () => {
  const params = useParams();
  const location = useLocation();
  // const { division, zilla, id } = params;
  console.log(params);

  return (
    <section>
      <div>
        <ShowDetailsInfo location={location}></ShowDetailsInfo>
      </div>
    </section>
  );
};

export default DistrictShow;
