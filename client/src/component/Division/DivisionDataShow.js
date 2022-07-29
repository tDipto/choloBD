import { Link, useParams } from "react-router-dom";
import "./DivisionDataShow.css";
const DivisionDataShow = ({ data }) => {
  const params = useParams();

  const { placeName, distName, distNameBn, placeDesc, placeNameEn, divName } =
    data;

  let k = 0;
  let total = data.userReview?.length;
  for (let i = 0; i < total; i++) {
    k += data.userReview[i]?.rating;
  }
  return (
    <>
      {params.division === divName && (
        <div className="division-flex-items">
          {/* <img
            src={placeImg}
            alt="one"
            style={{ height: "300px", width: "400px" }}
          /> */}
          <div className="division-flex-text">
            <div>
              <h3>{placeName}</h3>
              {/*  <Ratings></Ratings> */}
            </div>

            <hr />
            <p>{distNameBn}</p>
            <p>
              rating : {k}/{total}= {k / total ? 1 : 0}
            </p>
            <p>{placeDesc.slice(0, 50)}</p>
            <Link
              to={distName + "/" + placeNameEn}
              /* call hosse zillashow te */

              /* state={{ ...place }} */
            >
              বিস্তারিত পড়ুন......
            </Link>
          </div>
        </div>
      )}
      )
    </>
  );
};

export default DivisionDataShow;
