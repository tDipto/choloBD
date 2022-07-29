import { Link, useParams } from "react-router-dom";
import bg_img from "../../../assets/bg-div.jpg";
import { divisions } from "../../../assets/Division";
import { DivisionData } from "../../Division/DivisionData";

import ZillaShow from "../../Zilla/ZillaShow";
const ZillaHead = () => {
  const { division, zilla } = useParams();

  return (
    <>
      <div
        style={{
          /* backgroundColor: "#dbd8e3", */
          backgroundImage: `url(${bg_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {divisions
          .filter((pd) => pd.divName === division)
          .map((pd2) => (
            <ZillaShow zillaNames={pd2.districts} zillaTag={zilla}></ZillaShow>
          ))}
      </div>

      <section className="bg-light">
        {DivisionData.filter((div) => div.divisionName === division).map(
          (place) => {
            const { places } = place;

            return (
              <>
                <h2 className="p-3 m-3">এ জেলার জনপ্রিয় স্থানসমূহ</h2>
                <div className="division-container">
                  {places
                    .filter((dis) => dis.distName === zilla)
                    .map((data) => {
                      const {
                        placeImg,
                        placeName,
                        placeNameEn,
                        distName,
                        distNameBn,
                        placeDesc,
                      } = data;
                      return (
                        <>
                          <div className="division-flex-items">
                            <img style={{width:"360px",height:"300px"}} src={placeImg} alt="one" />
                            <div className="division-flex-text">
                              <h3>{placeName}</h3>
                              <p>{distNameBn}</p>
                              <hr />
                              <p>{placeDesc.slice(0, 50)}</p>
                              <Link
                                to={placeNameEn}
                                // ei route set up kora lagbe
                                state={{ ...data }}
                              >
                                বিস্তারিত পড়ুন.....
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          }
        )}
      </section>
    </>
  );
};

export default ZillaHead;
