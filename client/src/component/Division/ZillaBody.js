import React from "react";
import { DivisionData } from "./DivisionData";
import "./DivisionDataShow.css";
import ZillaDataShow from "./ZillaDataShow";

const ZillaBody = () => {
  return (
    <>
      <h2 className="p-3 m-3"> জনপ্রিয় স্থানসমূহ</h2>
      <div className="division-container">
        {DivisionData.map((data) => (
          <ZillaDataShow data={data} />
        ))}
      </div>
      <section>
        {/* eikhne oi division er most popular places gula dekhano lagbe */}
      </section>
    </>
  );
};

export default ZillaBody;
