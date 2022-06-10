import React from "react";

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
        <div class="bg-info m-2 p-1 text-center">{nameinfo.name}</div>;
      </div>
    </div>
  );
};

export default ZillaUnderDivision;
