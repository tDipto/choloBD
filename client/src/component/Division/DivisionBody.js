import { useEffect, useState } from "react";
/* import { DivisionData } from "./DivisionData"; */
import gif from "../../assets/Loading.gif";
import DivisionDataShow from "./DivisionDataShow";
import "./DivisionDataShow.css";
const DivisionBody = () => {
  const [divisionData, serDivisionData] = useState([]);
  const [loading, setLoading] = useState(true);
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
      {/*  {console.log(loading)} */}
      <h2 className="p-3 m-3 text-center"> জনপ্রিয় স্থানসমূহ</h2>
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
          divisionData.map((data) => <DivisionDataShow data={data} />)
        )}
      </div>
      <section>
        {/* eikhne oi division er most popular places gula dekhano lagbe */}
      </section>
    </>
  );
};

export default DivisionBody;
