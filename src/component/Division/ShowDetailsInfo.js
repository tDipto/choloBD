const ShowDetailsInfo = ({ location }) => {
  console.log(location);
  return (
    <>
      {" "}
      <div class="text-center">
        <div class="d-inline-block">
          <div
            class="card"
            style={{ width: "120vh", backgroundColor: "#EEEEEE" }}
          >
            <img
              class="card-img-top"
              src={location.state.placeImg}
              alt="Card"
            />
            <div class="card-body">
              <h4 className="text-left">{location.state.placeName}</h4>
              <p class="card-text text-justify">{location.state.placeDesc}</p>

              <h5 className="text-right">{location.state.distNameBn}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetailsInfo;
