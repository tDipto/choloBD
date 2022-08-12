import React from "react";
import "../Division/DivisionDataShow.css";
import HalfRating from "../Shared/Ratings";
const ShowHotel = ({ dataHotel }) => {
  return (
    <>
      {dataHotel.hotels.map((data) => {
        const { name, address, rating, bookLink, pic } = data;
        console.log(data);
        return (
          <>
            {/* <div>
              <h1>{data.name}</h1>
              <h1>{data.address}</h1>
              <p>Rating {data.rating}</p>
              <button>
                <a href={data.bookLink}>Book</a>
              </button>
            </div> */}

            <div className="division-flex-items">
              <img
                src={pic}
                alt="one"
                style={{ height: "250px", width: "350px" }}
              />
              <div className="division-flex-text">
                <div>
                  <h3>{name}</h3>
                </div>
                <hr />
                <p>{address}</p>
                <div className="d-flex flex-direction-row">
                  <HalfRating value={rating}></HalfRating>
                  <strong className="px-3">{rating}</strong>
                </div>
                <br />
                <button type="button" class="btn btn-danger btn-lg ">
                  <a href={bookLink}>Book Now</a>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ShowHotel;
