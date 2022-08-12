import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import ReviewForm from "../ReviewForm/ReviewForm";
import HalfRating from "../Shared/Ratings";
import ShowReview from "../ShowReview/ShowReview";
import "./ShowDetailsInfo.css";
const ShowDetailsInfo = ({ placeData }) => {
  const params = useParams();
  /* console.log(placeData); */
  const [sum, setSum] = useState(0);
  let k = 0;
  let total = placeData.userReview?.length;
  for (let i = 0; i < total; i++) {
    k += placeData.userReview[i]?.rating;
  }
  let showk = parseFloat((k / (total ? total : 1)).toFixed(2));
  return (
    <>
      {params._id === placeData.placeNameEn && (
        <>
          <NavBar></NavBar>
          <div class="text-center container">
            <div class="d-inline-block">
              <div
                class="card"
                style={{ width: "100%", backgroundColor: "#fff" }}
              >
                <img
                  class="card-img-top Image-place"
                  src={`http://localhost:5000/${placeData.pic}`}
                  alt="Card"
                />
                <div class="card-body">
                  <div className="d-float">
                    {" "}
                    <h3 className="text-left float-left font-weight-bold ">
                      {placeData.placeName}
                    </h3>
                    <h4 className="float-right mx-5 p-2">
                      {/* <Ratings></Ratings> */}
                    </h4>
                    <div className="div-float"></div>
                  </div>
                  <hr />
                  <p class="card-text text-justify">{placeData.placeDesc}</p>
                  <hr />
                  <h5 className="font-weight-bold text-left">
                    ঢাকা থেকে যাওয়ার উপায়
                  </h5>{" "}
                  <br />
                  <p class="card-text text-justify">{placeData.roadmap}</p>
                  <hr />
                  <h5 className="font-weight-bold text-left">
                    থাকার ব্যবস্থা
                  </h5>{" "}
                  <br />
                  <p class="card-text text-justify">{placeData.hotel}</p>
                  <p>
                    <Link to={"/hotel/" + placeData.distNameBn}>
                      অন্যান্য হোটেলের তথ্য জানতে এখানে ক্লিক করুন{" "}
                    </Link>
                  </p>
                  <hr />
                  <div className="d-flex flex-direction-row">
                    <HalfRating value={showk}></HalfRating>
                    <strong className="px-3">{showk}</strong>
                  </div>
                  <h5 className="text-right">{placeData.distNameBn}</h5>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              backgroundColor: "#",
              opacity: "1",
            }}
          >
            <h2 style={{ padding: "10px" }}>
              মন্তব্যকারীর নাম, রেটিং এবং মন্তব্য দেখুন
            </h2>
            <div
              className=" d-flex flex-wrap p-3 justify-content-evenly align-content-stretch"
              // style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr" }}
            >
              <ShowReview placeName={placeData.placeNameEn}></ShowReview>
            </div>
          </div>
          <ReviewForm
            placeNameBn={placeData.placeName}
            placeNameEn={placeData.placeNameEn}
          ></ReviewForm>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default ShowDetailsInfo;
