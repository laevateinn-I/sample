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
      <section class="homeSection" id="home">
        <div class="homeWrapper">
          <div class="logo">
            <img src={logo} alt="" />
          </div>
          <div class="sideText">
            <h1 class="side-h1">we are the wasted ones</h1>
          </div>
        </div>

        <div class="homeWrapper2">
          <div className="compass" onClick={toggleMenu}>
            <img src={compass} alt="Compass" />
          </div>
          <div class="icons">
            <a
              href="https://www.facebook.com/nobodysburden2021/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" />
            </a>
            <a
              href="https://www.youtube.com/@nobodysburden5037"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yt} alt="YouTube" />
            </a>
            <a
              href="https://www.instagram.com/nobodysburden/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram" />
            </a>
            <a
              href="https://open.spotify.com/artist/1mlIdiAomqKPNakzW8T8gi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sp} alt="Spotify" />
            </a>
          </div>
        </div>
        <div class="navLinks">
          <ul>
            <div class="navWrapper">
              <li>
                <Link
                  to="bio"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  biography
                </Link>
              </li>
              <li>
                <Link
                  to="tracks"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  tracks
                </Link>
              </li>
              <li>
                <Link
                  to="tour"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  tours
                </Link>
              </li>
              <li>
                <Link
                  to="merch"
                  smooth={true}
                  duration={1000}
                  onClick={() => setMenuOpen(false)}
                >
                  merch
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className="compassWrapper"></div>

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
