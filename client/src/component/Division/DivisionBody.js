/* import { DivisionData } from "./DivisionData"; */
import { useEffect, useState } from "react";
import DivisionDataShow from "./DivisionDataShow";
import "./DivisionDataShow.css";
const DivisionBody = () => {
  const [divisionData, serDivisionData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getReview")
      .then((res) => res.json())
      .then((data) => serDivisionData(data));
  }, []);
  return (
    <>
      {/*     {console.log(divisionData)} */}
      <h2 className="p-3 m-3 text-center"> জনপ্রিয় স্থানসমূহ</h2>
      <div className="division-container">
        {divisionData.map((data) => (
          <DivisionDataShow data={data} />
        ))}
      </div>
      <section>
        {/* eikhne oi division er most popular places gula dekhano lagbe */}
      </section>
    </>
  );
};

export default DivisionBody;
