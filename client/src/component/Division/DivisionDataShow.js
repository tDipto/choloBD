import { Link, useParams } from "react-router-dom";
import "./DivisionDataShow.css";
const DivisionDataShow = ({ data }) => {
  const params = useParams();
  /* console.log(data); */
  const { placeName, distName, distNameBn, placeDesc, placeNameEn, divName } =
    data;
  return (
    <>
      {/* {console.log(data)} */}

      {params.division === divName && (
        <div className="division-flex-items">
          {console.log(placeName)}
          {/* <img src={placeImg} alt="one" /> */}
          <div className="division-flex-text">
            <h3>{placeName}</h3>
            <hr />
            <p>{distNameBn}</p>
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
    </>
  );
};

export default DivisionDataShow;
