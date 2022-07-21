import "./ShowDetailsInfo.css";
const ShowDetailsInfo = ({ location }) => {
  console.log(location);
  return (
    <>
      {" "}
      <div class="text-center">
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
              <h5 className="text-right">{location.state.distNameBn}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetailsInfo;
