import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import "./ShowDetailsInfo.css";
const ShowDetailsInfo = ({ location }) => {
  console.log(location);
  return (
    <>
      {" "}
      <NavBar></NavBar>
      <div class="text-center container">
        <div class="d-inline-block">
          <div class="card" style={{ width: "100%", backgroundColor: "#fff" }}>
            <img
              class="card-img-top Image-place"
              src={location.state.placeImg}
              alt="Card"
            />
            <div class="card-body">
              <div className="d-float">
                {" "}
                <h3 className="text-left float-left font-weight-bold ">
                  {location.state.placeName}
                </h3>
                <h4 className="float-right mx-5 p-2">
                  {/* <Ratings></Ratings> */}
                </h4>
                <div className="div-float"></div>
              </div>
              <hr />
              <p class="card-text text-justify">{location.state.placeDesc}</p>
              <hr />
              <h5 className="font-weight-bold text-left">
                ঢাকা থেকে যাওয়ার উপায়
              </h5>{" "}
              <br />
              <p class="card-text text-justify">{location.state.roadmap}</p>
              <hr />
              <h5 className="font-weight-bold text-left">
                থাকার ব্যবস্থা
              </h5>{" "}
              <br />
              <p class="card-text text-justify">{location.state.hotel}</p>
              <p>
                <a href={location.state.hotelLink}>
                  অন্যান্য হোটেলের তথ্য জানতে এখানে ক্লিক করুন{" "}
                </a>
              </p>
              <hr />
              <h5 className="text-right">{location.state.distNameBn}</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ShowDetailsInfo;
