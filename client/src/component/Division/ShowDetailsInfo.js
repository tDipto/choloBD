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
          <div
            class="card"
            style={{ width: "100%", backgroundColor: "#EEEEEE" }}
          >
            <img
              class="card-img-top Image-place"
              src={location.state.placeImg}
              alt="Card"
            />
            <div class="card-body">
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
