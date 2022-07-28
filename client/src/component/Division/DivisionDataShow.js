import { Link, useParams } from "react-router-dom";
import "./DivisionDataShow.css";
const DivisionDataShow = ({ data }) => {
  const params = useParams();

  const { places, divisionName } = data;
  return (
    <>
      {" "}
      {params.division === divisionName &&
        places.map((place) => {
          const {
            placeImg,
            placeName,
            distName,
            distNameBn,
            placeDesc,
            placeNameEn,
          } = place;

          return (
            <div className="division-flex-items">
              <img
                src={placeImg}
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
                <p>{placeDesc.slice(0, 50)}</p>
                <Link
                  to={distName + "/" + placeNameEn}
                  /* call hosse zillashow te */

                  state={{ ...place }}
                >
                  বিস্তারিত পড়ুন......
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DivisionDataShow;
