/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/chologhuribd.png";
import { divisions } from "../../assets/Division.js";
import ReviewForm from "../Review/Review/ReviewForm";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  /* console.log(search); */
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(placeNameEn); */
    /* setPlaceName(placeNameEn); */

    /*  let info = {
      placeNameEn: params._id,
      userReview: { name, comments, rating: parseInt(rating) },
    }; */
    console.log(search);
    navigate(`/search/${search}`);
    /* fetch("http://localhost:5000/addComment", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); */
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-inverse position-sticky fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto  text-light">
          <li>
            <NavLink to="/" class="nav-item">
              <a class="nav-link text-success" href="#">
                <img
                  style={{ maxWidth: "50px", maxHeight: "100px" }}
                  src={logo}
                  alt=""
                />
                চলো ঘুরি বাংলাদেশ
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" class="nav-item">
              <a class="nav-link" href="#">
                হোম
              </a>
            </NavLink>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              বিভাগ
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {divisions.map((pd) => {
                return (
                  <NavLink to={`/${pd.divName}`} end>
                    <a class="dropdown-item" href="#">
                      {pd.disName}
                    </a>
                  </NavLink>
                );
              })}
            </div>
          </li>

          <button
            style={{ backgroundColor: "#F8F9FA" }}
            class=" btn text-dark"
            onClick={openModal}
          >
            <strong style={{ fontSize: "18px", color: "blue" }}>
              যোগ করুন
            </strong>
          </button>

          <ReviewForm
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          ></ReviewForm>
        </ul>
        <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="জায়গার নাম লিখুন!"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            {/* <Link to={"/search/" + { search }}> */}খুঁজুন{/* </Link> */}
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
