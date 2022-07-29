import React, { useEffect, useState } from "react";
import DesignReview from "./DesignReview";

const ShowReview = ({ placeName }) => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let info = {
      placeNameEn: placeName,
    };
    console.log(info);
    fetch("http://localhost:5000/getComment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        review.map((data) => <DesignReview data={data}></DesignReview>)
      )}
    </>
  );
};

export default ShowReview;
