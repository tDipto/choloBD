import { useState } from "react";

/* eslint-disable jsx-a11y/anchor-has-content */

const Footer = ({ placeNameBn, placeNameEn }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComment] = useState();
  const [placeName, setPlaceName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(placeNameEn); */
    /* setPlaceName(placeNameEn); */

    let info = {
      placeNameEn: placeName,
      userReview: { name, comments, rating },
    };
    console.log(info);
    fetch("http://localhost:5000/addComment", {
      method: "POST",
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
                required
                aria-describedby="emailHelp"
              />
            </div>
            {/*   <div class="form-group">
              <label for="exampleInputEmail1"> জায়গার নাম </label>
              <input
                onChange={(e) => setPlaceName(e.target.value)}
                type="text"
                required
                class="form-control"
                id="exampleInputEmail1"
                value={placeName}
                aria-describedby="emailHelp"
              />
            </div> */}
            <div class="form-group">
              <label for="exampleInputEmail1">রেটিং দিন </label>
              <input
                type="number"
                required
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">মতামত দিন </label>
              <textarea
                typeof="comment"
                required
                onChange={(e) => setComment(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="comment"
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

export default Footer;
