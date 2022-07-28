import { useState } from "react";
import { useParams } from "react-router-dom";
/* import Footer from "../Footer/Footer"; */
import NavBar from "../Navbar/Navbar";
import "./ShowDetailsInfo.css";
const ShowDetailsInfo = ({ divisionData }) => {
  /*  console.log(divisionData); */
  const {
    placeName,
    distName,
    distNameBn,
    placeDesc,
    placeNameEn,
    divName,
    hotel,
    roadmap,
    userReview,
  } = divisionData;
  const params = useParams();
  const { division, zilla, _id } = params;
  const [sum, setSum] = useState(0);

  let k = 0;
  let xz = userReview?.length;
  for (let i = 0; i < xz; i++) {
    k += userReview[i]?.rating;
    /* k /= xz; */
    console.log(k);
  }

  /* console.log(k); */

  return (
    <>
      <NavBar></NavBar>
      {_id === placeNameEn && (
        <div class="text-center container">
          <div class="d-inline-block">
            <div
              class="card"
              style={{ width: "100%", backgroundColor: "#EEEEEE" }}
            >
              {/* <img
              class="card-img-top Image-place"
              src={placeImg}
              alt="Card"
            /> */}
              <div class="card-body">
                <h3 className="text-center">{placeName}</h3>
                <hr />
                <p class="card-text text-justify">{placeDesc}</p>
                <hr />
                <h5>যাওয়ার উপায়</h5>
                <p class="card-text text-justify">{roadmap}</p>

                <hr />
                <h5>থাকার ব্যবস্থা</h5>
                <p class="card-text text-justify">{hotel}</p>
                <p class="card-text text-justify">{k}</p>

                <hr />
                {}
                <h5 className="text-right">{distNameBn}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*  <Footer></Footer> */}
    </>
  );
};

export default ShowDetailsInfo;
