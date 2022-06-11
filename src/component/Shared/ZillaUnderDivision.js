import { Link } from "react-router-dom";

const ZillaUnderDivision = ({ nameinfo }) => {
  return (
    <div class="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          /* gridTemplateRows: "repeat(3, 100px)", */
        }}
      >
        {nameinfo.map((pd) => {
          /*  console.log(pd); */
          return (
            <Link to={pd.distName}>
              <div class="bg-info m-2 p-1 text-center">{pd.distDName}</div>;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ZillaUnderDivision;
