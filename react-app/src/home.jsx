import logo from "./assets/Images/nblogo.png";
import fb from "./assets/Images/fb.png";
import yt from "./assets/Images/youtube.png";
import ig from "./assets/Images/instagram.png";
import sp from "./assets/Images/spotify.png";
import compass from "./assets/Images/navigate.png";
import { Link } from "react-scroll";
import React, { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <section class="homeSection">
        <div class="homeWrapper">
          <div class="logo">
            <img src={logo} alt="" />
          </div>
          <div class="sideText">
            <h1 class="side-h1">we are the wasted ones</h1>
          </div>
        </div>

        <div class="homeWrapper2">
          <div class="icons">
            <img src={fb} alt="" />
            <img src={yt} alt="" />
            <img src={ig} alt="" />
            <img src={sp} alt="" />
          </div>
        </div>
        <div class="navLinks">
          <ul>
            <div class="navWrapper">
              <li>
                <a href="">biography</a>
              </li>
              <li>
                <a href="">tracks</a>
              </li>
              <li>
                <a href="">tour</a>
              </li>
              <li>
                <a href="">merch</a>
              </li>
            </div>
          </ul>
        </div>

        <div className="compassWrapper">
          <div className="compass" onClick={toggleMenu}>
            <img src={compass} alt="Compass" />
          </div>
        </div>

        <div className="offContainer">
          <div className={`off-screen-menu ${menuOpen ? "show" : ""}`}>
            <ul className="offUl">
              <li className="offLi">
                <Link
                  to="bio"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  biography
                </Link>
              </li>
              <li className="offLi">
                <Link
                  to="tracks"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  tracks
                </Link>
              </li>
              <li className="offLi">
                <Link
                  to="tour"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  tours
                </Link>
              </li>
              <li className="offLi">
                <Link
                  to="merch"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  merch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
