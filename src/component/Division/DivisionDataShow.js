import { Link, useParams } from "react-router-dom";
import "./DivisionDataShow.css";
const DivisionDataShow = ({ data }) => {
  const params = useParams();

  const { places, divisionName } = data;
  return (
    <>
      {params.division === divisionName &&
        places.map((place) => {
          const { placeImg, placeName, distName, distNameBn, placeDesc } =
            place;

          return (
            <div className="division-flex-items">
              <img src={placeImg} alt="one" />
              <div className="division-flex-text">
                <h2>{placeName}</h2>
                <p>{distNameBn}</p>
                <p>{placeDesc.slice(0, 50)}</p>
                <Link
                  to={distName}
                  /* call hosse zillashow te */

                  state={{ ...place }}
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DivisionDataShow;
