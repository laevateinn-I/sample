import logo from "./assets/Images/nblogo.png";
import fb from "./assets/Images/fb.png";
import yt from "./assets/Images/youtube.png";
import ig from "./assets/Images/instagram.png";
import sp from "./assets/Images/spotify.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerWrapper">
          <div className="footer-image">
            <Link to="home" smooth={true} duration={1000}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="footer-title">
            <h1>we are the wasted ones</h1>
          </div>
        </div>

        <div className="outroWrapper">
          <div className="icons-footer">
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

          <div className="footer-outro">
            <p>© 2025 Nobody's Burden. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
