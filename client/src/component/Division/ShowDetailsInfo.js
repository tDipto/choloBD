import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import ReviewForm from "../ReviewForm/ReviewForm";
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
                  src={placeData.placeImg}
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
                    <a href={placeData.hotelLink}>
                      অন্যান্য হোটেলের তথ্য জানতে এখানে ক্লিক করুন{" "}
                    </a>
                  </p>
                  <hr />
                  <p></p>
                  <p>
                    rating :{k}/{total}= {k / total ? 1 : 0}
                  </p>
                  <h5 className="text-right">{placeData.distNameBn}</h5>
                </div>
              </div>
            </div>
          </div>
          <ReviewForm
            placeNameBn={placeData.placeName}
            placeNameEn={placeData.placeNameEn}
          ></ReviewForm>
          <h2>সব রিভিউ</h2>
          <ShowReview placeName={placeData.placeNameEn}></ShowReview>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default ShowDetailsInfo;
