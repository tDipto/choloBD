import { useLocation } from "react-router-dom";
import bg_img from "../../assets/bg-div.jpg";
import ShowDetailsInfo from "../Division/ShowDetailsInfo";

/* eslint-disable jsx-a11y/img-redundant-alt */
const ZillaShow = ({ zillaNames, zillaTag }) => {
  const location = useLocation();

  if (location.state === null) {
    return (
      <>
        {zillaNames
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
          ))}
      </>
    );
  } else {
    return (
      <>
        <ShowDetailsInfo location={location}></ShowDetailsInfo>
      </>
    );
  }
};

export default ZillaShow;
