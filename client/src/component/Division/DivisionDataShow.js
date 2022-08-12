import { Link, useParams } from "react-router-dom";
import HalfRating from "../Shared/Ratings";
import "./DivisionDataShow.css";
const DivisionDataShow = ({ data }) => {
  const params = useParams();

  const {
    placeName,
    distName,
    divName,
    roadmap,
    placeNameEn,
    distNameBn,
    hotel,
    placeDesc,
    pic,
  } = data;
  console.log(data);

  let k = 0;
  let total = data.userReview?.length;
  for (let i = 0; i < total; i++) {
    k += data.userReview[i]?.rating;
  }
  let showk = parseFloat((k / (total ? total : 1)).toFixed(2));
  return (
    <>
      {params.division === divName && (
        <div className="division-flex-items">
          <img
            src={`http://localhost:5000/${pic}`}
            alt="one"
            style={{ height: "300px", width: "400px" }}
          />
          <div className="division-flex-text">
            <div>
              <h3>{placeName}</h3>
              {/*  <Ratings></Ratings> */}
            </div>
            <hr />
            <p>{distNameBn}</p>
            {console.log(showk)}
            {/* <p>রেটিং :{showk}</p> */}
            <div className="d-flex flex-direction-row">
              <HalfRating value={showk}></HalfRating>
              <strong className="px-3">{showk}</strong>
            </div>{" "}
            <br />
            <p>{placeDesc.slice(0, 50)}</p>
            <Link
              to={distNameBn + "/" + placeNameEn}
              /* call hosse zillashow te */

              /* state={{ ...place }} */
            >
              বিস্তারিত পড়ুন......
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DivisionDataShow;
