/* eslint-disable jsx-a11y/img-redundant-alt */
import { divisions } from "../../../assets/Division.js";
import DivisionBody from "../../Division/DivisionBody.js";
import ZillaUnderDivision from "../ZillaUnderDivision";
import "./DivisionHead.css";
const DivisionHead = ({ division }) => {
  return (
    <>
      {divisions
        .filter((div) => div.divName === division)
        .map((pd) => (
          <>
            <div className="main-container bg-info bg-gradient">
              <div className="left-side">
                <div className="container bg-light">
                  <img
                    class="card-img-top rounded image"
                    src={pd.divImg}
                    alt="Card image cap"
                  />
                  <h2 class="card-text text-center p-3">{pd.disName} বিভাগ </h2><hr />
                </div>
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
      <DivisionBody></DivisionBody>
    </>
  );
};

export default DivisionHead;
