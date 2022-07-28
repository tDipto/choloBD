import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DivisionDataShow.css";

const ZillaDataShow = ({ data }) => {
  const { division, zilla, place } = useParams();
  const { places, divisionName } = data;
  return (
    <>
      {division === divisionName &&
        places.map((place) => {
          const {
            placeImg,
            placeName,
            distName,
            distNameBn,
            placeDesc,
            placeNameBn,
          } = place;
          if (distName === zilla)
            return (
              <div className="division-flex-items">
                <img src={placeImg} alt="one" />
                <div className="division-flex-text">
                  <h3>{placeNameBn}</h3>
                  <hr />
                  <p>{distNameBn}</p>
                  <p>{placeDesc.slice(0, 50)}</p>
                  <Link
                    to={placeName}
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

export default ZillaDataShow;
