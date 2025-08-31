import logo from "./assets/Images/nblogo.png";
import fb from "./assets/Images/fb.png";
import yt from "./assets/Images/youtube.png";
import ig from "./assets/Images/instagram.png";
import sp from "./assets/Images/spotify.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerWrapper">
          <div className="footer-image">
            <img src={logo} alt="" />
          </div>

          <div className="footer-title">
            <h1>we are the wasted ones</h1>
          </div>
        </div>

        <div className="outroWrapper">
          <div className="icons-footer">
            <img src={fb} alt="" />
            <img src={yt} alt="" />
            <img src={ig} alt="" />
            <img src={sp} alt="" />
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
