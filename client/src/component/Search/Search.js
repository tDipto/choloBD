import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gif from "../../assets/Loading.gif";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ZillaShow from "../Zilla/ZillaShow";

const Search = () => {
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
  const params = useParams();
  return (
    <>
      <Navbar></Navbar>
      <p>Show Result</p>
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
          (console.log(divisionData),
          divisionData.map((data) => <ZillaShow data={data} />))
        )}
      </div>

      <Footer></Footer>
    </>
  );
};

export default Search;
