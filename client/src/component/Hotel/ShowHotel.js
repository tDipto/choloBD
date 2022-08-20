import React from "react";
import "../Division/DivisionDataShow.css";
import HalfRating from "../Shared/Ratings";
import "./ShowHotel.css";
const ShowHotel = ({ dataHotel }) => {
  return (
    <>
      {dataHotel.hotels.map((data) => {
        const { name, address, rating, bookLink, pic } = data;
        console.log(data);
        return (
          <>
            <div className="hotel-flex-items">
              {/* <img
                src={pic}
                alt="one"
                style={{ height: "250px", width: "350px" }}
              /> */}
              <div className="hotel-flex-text">
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

                <button type="button" class="btn btn-lg ">
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
