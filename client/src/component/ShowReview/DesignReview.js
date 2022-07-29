import React from "react";

const DesignReview = ({ data }) => {
  return (
    <div>
      <p>Name : {data.name}</p>
      <p>Rating : {data.rating}</p>
      <p>Review : {data.comments}</p>
    </div>
  );
};

export default DesignReview;
