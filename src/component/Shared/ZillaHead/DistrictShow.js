import React from "react";
import { useParams } from "react-router-dom";

const DistrictShow = () => {
  const params = useParams();
  const { division, zilla, id } = params;
  console.log(params);

  return (
    <section>
      <div>Loading......</div>
    </section>
  );
};

export default DistrictShow;
