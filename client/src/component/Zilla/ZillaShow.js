import { Link, useParams } from "react-router-dom";
import HalfRating from "../Shared/Ratings";

/* eslint-disable jsx-a11y/img-redundant-alt */
const ZillaShow = ({ data }) => {
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
  /*  console.log(data); */
  let k = 0;
  let total = data.userReview?.length;
  for (let i = 0; i < total; i++) {
    k += data.userReview[i]?.rating;
  }
  /* const location = useLocation();

  if (location.state === null) { */
  /* console.log(params.zilla);
  console.log(distName.split(",")[0]); */
  let showk = parseFloat((k / (total ? total : 1)).toFixed(2));
  return (
    <>
      {params.zilla === distNameBn && (
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
            <div className="d-flex flex-direction-row">
              <HalfRating value={showk}></HalfRating>
              <strong className="px-3">{showk}</strong>
            </div>{" "}
            <br />
            {/* <p>রেটিং :{showk}</p> */}
            <p>{placeDesc.slice(0, 50)}</p>
            <Link
              to={placeNameEn}
              /* call hosse zillashow te */

              /* state={{ ...place }} */
            >
              বিস্তারিত পড়ুন......
            </Link>
          </div>
        </div>
      )}
      {/* {zillaNames
          .filter((pd) => pd.distName === zillaTag)
          .map((pd2) => (
            <div class="text-center">
              <div class="d-inline-block">
                <div
                  class="card"
                  style={{
                    width: "90vh",
                    height: "auto",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {console.log(pd2)}
                  <img
                    class="card-img-top"
                    src={pd2.disImg}
                    alt="Card image cap"
                  />
                  <div
                    class="card-body text-center"
                    style={{
                      backgroundImage: `url(${bg_img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      fontWeight: "bold",
                    }}
                  >
                    <p class="card-text">{pd2.distDName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
    </>
  );
  /*   } else {
    return (
      <>
        <ShowDetailsInfo location={location}></ShowDetailsInfo>
      </>
    );
  } */
};

export default ZillaShow;
