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

  const [placeName, setName] = useState("");
  const [placeNameEn, setPlaceNameEn] = useState("");
  const [distName, setdistName] = useState("");
  const [distNameBn, setdistNameBn] = useState("");
  const [divName, setDivName] = useState("");
  const [roadmap, setRoadmap] = useState();
  const [hotel, setHotel] = useState();
  const [placeDesc, setPlaceDesc] = useState();
  const handleSubmit = (e) => {
    // e.preventDefault();
    /* console.log(placeNameEn); */
    /* setPlaceName(placeNameEn); */
    /*  const dist = distName.split(" ");
    setdistName(dist[0]);
    setdistNameBn(dist[1]); */
    /* console.log(dist[1]); */

    let info = {
      placeName,
      divName,
      placeNameEn,
      distName,
      distNameBn,
      roadmap,
      hotel,
      placeDesc,
    };
    console.log(info);
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
          style={{ width: "110vh",height: "90vh", position: "", margin: "0 auto" }}
        >
          <h2>{} সম্পর্কে মন্তব্য করুন </h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">placeName bangla </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={placeName}
                placeholder="বাংলায় লিখুন"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">placeName eng </label>
              <input
                onChange={(e) =>
                  setPlaceNameEn(
                    e.target.value.replace(/\s+/g, "").toLowerCase()
                  )
                }
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                value={placeNameEn}
                placeholder="PlaceNameEn"
                aria-describedby="emailHelp"
              />
            </div>
            ////////////////////////////// ///////////////////////
            <div class="form-group">
              <label for="exampleInputEmail1">বিভাগ</label>
              <select
                required
                onChange={(e) => setDivName(e.target.value)}
                value={divName}
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="dhaka">ঢাকা</option>
                <option value="sylhet">সিলেট</option>
                <option value="rajshahi">রাজশাহী</option>
                <option value="khulna">খুলনা</option>
                <option value="rangpur">রংপুর</option>
                <option value="chittagong">চট্টগ্রাম</option>
                <option value="mymensingh">ময়মনসিংহ</option>
                <option value="barisal">বরিশাল</option>
              </select>
              {divName === "dhaka" && (
                <>
                  <label for="1">জেলা </label>
                  <select
                    required
                    onChange={(e) => {
                      {
                        setdistName(e.target.value);
                        /* setdistName(e.target.value.split(" ")[0]); */
                        setdistNameBn(e.target.value.split(",")[1]);
                        /*    let dist = distName.split(" ");
                        console.log(dist);
                        setdistName(dist[0]);
                        setdistNameBn(dist[1]); */
                      }
                    }}
                    value={distName}
                    class="form-control"
                    id="11"
                  >
                    <option value="dhaka,ঢাকা">ঢাকা</option>
                    <option value="gajipur,গাজীপুর">গাজীপুর</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </>
              )}
              {divName === "sylhet" && (
                <>
                  <label for="22">জেলা </label>
                  <select
                    required
                    onChange={(e) => {
                      setdistName(e.target.value);
                      /* setdistName(e.target.value.split(" ")[0]); */
                      setdistNameBn(e.target.value.split(",")[1]);
                    }}
                    value={distName}
                    class="form-control"
                    id="2"
                  >
                    <option value="sylhet,সিলেট">সিলেট</option>
                    <option value="sunamganj,সুনামগঞ্জ">সুনামগঞ্জ</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </>
              )}
            </div>
            ////////////////////////////////////
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Road Map </label>
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
              <label for="exampleFormControlTextarea1">Description </label>
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
              <label for="exampleFormControlTextarea1">Hotel</label>
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
