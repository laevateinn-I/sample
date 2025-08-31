import track1 from "./assets/Images/track1.jpg";
import track2 from "./assets/Images/track2.jpg";
import track3 from "./assets/Images/track3.jpg";
import track4 from "./assets/Images/track4.jpg";
function Tracks() {
  return (
    <>
      <section className="trackSection" id="tracks">
        <div className="trackWrapper">
          <div className="trackTitle">
            <h1>
              recent<span>-</span>tracks
            </h1>
          </div>
        </div>

        <div className="trackWrapper2">
          <div className="box-track">
            <a
              href="https://www.youtube.com/watch?v=-1lTxv8ljVs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={track1} alt="" />
              <h1>Existence</h1>
            </a>
          </div>
          <div className="box-track">
            <a
              href="https://www.youtube.com/watch?v=7KEa0RBlMZo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={track4} alt="" />
              <h1>Blind</h1>
            </a>
          </div>
          <div className="box-track">
            <a
              href="https://www.youtube.com/watch?v=2piOKk_eaAc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={track3} alt="" />
              <h1>Counting Days</h1>
            </a>
          </div>
          <div className="box-track">
            <a
              href="https://www.youtube.com/watch?v=n8VvJSth3ns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={track2} alt="" />
              <h1>Duality</h1>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracks;
