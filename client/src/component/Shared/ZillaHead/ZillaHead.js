import { Link, useParams } from "react-router-dom";
import { divisions } from "../../../assets/Division";
import { DivisionData } from "../../Division/DivisionData";

import ZillaShow from "../../Zilla/ZillaShow";
const ZillaHead = () => {
  const { division, zilla } = useParams();

  return (
    <>
      <div
        style={{
          backgroundColor: "#dbd8e3",
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

                        distName,
                        distNameBn,
                        placeDesc,
                      } = data;
                      return (
                        <>
                          <div className="division-flex-items">
                            <img src={placeImg} alt="one" />
                            <div className="division-flex-text">
                              <h3>{placeName}</h3>
                              <p>{distNameBn}</p>
                              <hr />
                              <p>{placeDesc.slice(0, 50)}</p>
                              <Link
                                to={distName}
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
