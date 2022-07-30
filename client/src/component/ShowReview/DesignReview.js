import React from "react";
import "./DesignReview.css";
const DesignReview = ({ data }) => {
  return (
    <>
      {" "}
      {/* <div className="designreview">
        <p className="reviewer"> মন্তব্যকারীর নাম : {data.name}</p>
        <p className="reviewer-rating">রেটিং দিয়েছেন : {data.rating}</p>
        <p className="reviewer-comments">মন্তব্য : {data.comments}</p>
      </div> */}
      <div>
        <div class="card" style={{ width: "25rem", margin: "10px" }}>
          <div class="card-body">
            <h5 class="card-title">নাম : {data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              রেটিং দিয়েছেন : {data.rating}
            </h6>
            <p class="card-text">মন্তব্য : {data.comments}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignReview;
