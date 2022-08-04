import React, { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    overflowY: "scroll",
  },
};

Modal.setAppElement("#root");

const ReviewForm = ({ modalIsOpen, closeModal }) => {
  const params = useParams();
  const [rating, setRating] = useState(0);
  const [placeName, setName] = useState("");
  const [placeNameEn, setPlaceNameEn] = useState("");
  const [roadmap, setRoadmap] = useState();
  const [hotel, setHotel] = useState();
  const [placeDesc, setPlaceDesc] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(placeNameEn); */
    /* setPlaceName(placeNameEn); */

    let info = {
      placeNameEn,

      placeName,

      roadmap,
      hotel,
      placeDesc,
      rating: parseInt(rating),
    };
    console.log(info);
    // fetch("http://localhost:5000/addComment", {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(info),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  /*  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data); */
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}> close</button>
        <div
          className=""
          style={{ width: "110vh", position: "", margin: "0 auto" }}
        >
          <h2>{} সম্পর্কে মন্তব্য করুন </h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">আপনার নাম </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={placeName}
                placeholder="বাংলায় লিখুন"
                required
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">আপনার নাম </label>
              <input
                onChange={(e) => setPlaceNameEn(e.target.value)}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={placeNameEn}
                placeholder="PlaceNameEn"
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
                onChange={(e) => setRoadmap(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeName="comment"
                placeholder="বাংলায় লিখুন"
                value={roadmap}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">মতামত দিন </label>
              <textarea
                typeof="comment"
                onChange={(e) => setPlaceDesc(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeName="comment"
                placeholder="বাংলায় লিখুন"
                value={placeDesc}
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">মতামত দিন </label>
              <textarea
                typeof="comment"
                onChange={(e) => setHotel(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeName="comment"
                placeholder="বাংলায় লিখুন"
                value={hotel}
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              পোস্ট করুন
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ReviewForm;
