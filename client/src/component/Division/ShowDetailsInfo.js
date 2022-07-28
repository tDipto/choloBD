<<<<<<< HEAD
/* import Ratings from "../Division/Ratings"; */
=======
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181
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
<<<<<<< HEAD
          <div class="card" style={{ width: "100%", backgroundColor: "#fff" }}>
=======
          <div
            class="card"
            style={{ width: "100%", backgroundColor: "#EEEEEE" }}
          >
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181
            <img
              class="card-img-top Image-place"
              src={location.state.placeImg}
              alt="Card"
            />
            <div class="card-body">
<<<<<<< HEAD
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
=======
              <h3 className="text-center">{location.state.placeName}</h3>
              <hr />
              <p class="card-text text-justify">{location.state.placeDesc}</p>
              <hr />
              <h5>যাওয়ার উপায়</h5>
              <p class="card-text text-justify">{location.state.roadmap}</p>

              <hr />
              <h5>থাকার ব্যবস্থা</h5>
              <p class="card-text text-justify">{location.state.hotel}</p>
              <p>
                <a href={location.state.hotelLink}>আরও হোটেল</a>
>>>>>>> 70eddc63c5f18736e25b4dc5020c1c6d33f88181
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
