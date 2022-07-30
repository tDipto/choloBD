import { useState } from "react";
import { useParams } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-has-content */

const ReviewForm = ({ placeNameBn, placeNameEn }) => {
  const params = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComment] = useState();
  const [placeName, setPlaceName] = useState();

  const handleSubmit = (e) => {
    // e.preventDefault();
    /* console.log(placeNameEn); */
    /* setPlaceName(placeNameEn); */

    let info = {
      placeNameEn: params._id,
      userReview: { name, comments, rating: parseInt(rating) },
    };
    console.log(info);
    fetch("http://localhost:5000/addComment", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "#000000",
          color: "#fff",
          width: "",
          position: "relative",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        <div
          className=""
          style={{ width: "110vh", position: "", margin: "0 auto" }}
        >
          <h2>{placeNameBn} সম্পর্কে মন্তব্য করুন </h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">আপনার নাম </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={name}
                placeholder="বাংলায় লিখুন"
                required
                aria-describedby="emailHelp"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">রেটিং দিন </label>
              <select
                required
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">মতামত দিন </label>
              <textarea
                typeof="comment"
                onChange={(e) => setComment(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="comment"
                placeholder="বাংলায় লিখুন"
                value={comments}
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              পোস্ট করুন
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
