import divisions from "../../../assets/Division.json";
import img1 from "../../../assets/images/13.jpg";
import ZillaUnderDivision from "../ZillaUnderDivision";
const DivisionHead = ({ division }) => {
  return (
    <>
      {divisions
        .filter((div) => div.divName === division)
        .map((pd) => (
          <>
            {console.log(pd.disName)}
            <div class=" text-center">
              <div class="d-inline-block">
                <div class="card" style={{ width: "40rem", height: "20rem" }}>
                  <img class="card-img-top" src={img1} alt="Card image cap" />
                  <div class="card-body text-center">
                    <p class="card-text">{pd.disName}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5">
              <ZillaUnderDivision nameinfo={pd.districts}></ZillaUnderDivision>
            </div>
          </>
        ))}
    </>
  );
};

export default DivisionHead;
