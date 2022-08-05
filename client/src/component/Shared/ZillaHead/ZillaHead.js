import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg_img from "../../../assets/bg-div.jpg";
import gif from "../../../assets/Loading.gif";
import ZillaShow from "../../Zilla/ZillaShow";
/* import { DivisionData } from "../../Division/DivisionData"; */
const ZillaHead = () => {
  const { division, zilla } = useParams();
  const [divisionData, serDivisionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/getReview")
      .then((res) => res.json())
      .then((data) => {
        serDivisionData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div
        style={{
          // backgroundColor: "#dbd8e3",
          backgroundImage: `url(${bg_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/*    {divisions
          .filter((pd) => pd.divName === division)
          .map((pd2) => (
            <ZillaShow zillaNames={pd2.districts} zillaTag={zilla}></ZillaShow>
          ))} */}
      </div>
      <h2 className="p-3 m-3 text-center">
        {params.zilla} জেলার জনপ্রিয় স্থানসমূহ
      </h2>
      <div className="division-container">
        {loading ? (
          <div>
            <img
              src={gif}
              alt="one"
              style={{ height: "300px", width: "400px" }}
            />
          </div>
        ) : (
          (console.log(divisionData),
          divisionData.map((data) => <ZillaShow data={data} />))
        )}
      </div>
      {/* <div
        style={{
          // backgroundColor: "#dbd8e3",
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
                            <img
                              style={{ width: "360px", height: "300px" }}
                              src={placeImg}
                              alt="one"
                            />
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
      </section> */}
    </>
  );
};

export default ZillaHead;
