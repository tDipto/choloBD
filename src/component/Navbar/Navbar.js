/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import divisons from "../../assets/Division.json";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-inverse position-sticky fixed-top">
      <p class="text-success">চলো ঘুরি বাংলাদেশ</p>

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
          <NavLink to="/" class="nav-item">
            <a class="nav-link" href="#">
              হোম
            </a>
          </NavLink>
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
              {divisons.map((pd) => {
                return (
                  <NavLink to={`/${pd.divName}`} end>
                    <a class="dropdown-item" href="#">
                      {pd.disName}
                    </a>
                  </NavLink>
                );
              })}
              {/* <NavLink to="/dhaka" end>
                <a class="dropdown-item" href="#">
                  ঢাকা
                </a>
              </NavLink>

              <NavLink to="/khulna" end>
                <a class="dropdown-item" href="#">
                  খুলনা
                </a>
              </NavLink>

              <NavLink to="/barisal" end>
                <a class="dropdown-item" href="#">
                  বরিশাল
                </a>
              </NavLink>

              <NavLink to="/chittagong" end>
                <a class="dropdown-item" href="#">
                  চট্টগ্রাম
                </a>
              </NavLink>

              <NavLink to="/rajshahi" end>
                <a class="dropdown-item" href="#">
                  রাজশাহী
                </a>
              </NavLink>

              <NavLink to="/sylhet" end>
                <a class="dropdown-item" href="#">
                  সিলেট
                </a>
              </NavLink>

              <NavLink to="/rangpur" end>
                <a class="dropdown-item" href="#">
                  রংপুর
                </a>
              </NavLink>

              <NavLink to="/mymanshingh" end>
                <a class="dropdown-item" href="#">
                  ময়মনসিংহ
                </a>
              </NavLink> */}
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
