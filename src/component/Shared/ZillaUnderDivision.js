import { Link } from "react-router-dom";

const ZillaUnderDivision = ({ nameinfo }) => {
  return (
    <div class="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          width: "auto",
          height: "auto",
          margin: "10px",
          padding: "10px",
        
        }}
      >
        {nameinfo.map((pd) => {
          /*  console.log(pd); */
          return (
            <Link to={pd.distName}>
              <div class="bg-dark m-3 p-2 text-center text-white rounded">{pd.distDName}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ZillaUnderDivision;
