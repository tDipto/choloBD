import React from "react";

const ShowHotel = ({ dataHotel }) => {
  return (
    <>
      {dataHotel.hotels.map((data) => {
        return (
          <>
            <div>
              <h1>{data.name}</h1>
              <h1>{data.address}</h1>
              <p>Rating {data.rating}</p>
              <button>
                <a href={data.bookLink}>Book</a>
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ShowHotel;
