import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-inverse position-sticky fixed-top">
      <a class="navbar-brand" href="#">
        <p class="text-success">চলো ঘুরি বাংলাদেশ</p>
      </a>
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
        <ul class="navbar-nav mr-auto text-light">
          <li class="nav-item">
            <a class="nav-link" href="#">
              হোম
            </a>
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
              <a class="dropdown-item" href="#">
                ঢাকা
              </a>
              <a class="dropdown-item" href="#">
                খুলনা
              </a>

              <a class="dropdown-item" href="#">
                বরিশাল
              </a>
              <a class="dropdown-item" href="#">
                চট্টগ্রাম
              </a>
              <a class="dropdown-item" href="#">
                রাজশাহী
              </a>
              <a class="dropdown-item" href="#">
                সিলেট
              </a>
              <a class="dropdown-item" href="#">
                রংপুর
              </a>
              <a class="dropdown-item" href="#">
                ময়মনসিংহ
              </a>
              <a class="dropdown-item" href="#">
                বরিশাল
              </a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="খুঁজুন"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
