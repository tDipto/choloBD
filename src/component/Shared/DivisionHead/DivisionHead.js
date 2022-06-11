/* eslint-disable jsx-a11y/img-redundant-alt */
import divisions from "../../../assets/Division.json";
import img1 from "../../../assets/images/13.jpg";
import ZillaUnderDivision from "../ZillaUnderDivision";
import "./DivisionHead.css";
const DivisionHead = ({ division }) => {
  return (
    <>
      {divisions
        .filter((div) => div.divName === division)
        .map((pd) => (
          <>
            <div className="main-container">
              <div className="left-side">
                <div className="container">
                  <img
                    class="card-img-top rounded image"
                    src={img1}
                    alt="Card image cap"
                  />
                  <h2 class="card-text text-center">{pd.disName}</h2>
                </div>
                <hr />
              </div>
              <div className="right-side">
                <div class="py-2">
                  <ZillaUnderDivision
                    nameinfo={pd.districts}
                  ></ZillaUnderDivision>
                </div>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default DivisionHead;
