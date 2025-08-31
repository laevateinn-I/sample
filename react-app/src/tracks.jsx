import track1 from "./assets/Images/track1.jpg";
import track2 from "./assets/Images/track2.jpg";
import track3 from "./assets/Images/track3.jpg";
import track4 from "./assets/Images/track4.jpg";
function Tracks() {
  return (
    <>
      <section className="trackSection">
        <div className="trackWrapper">
          <div className="trackTitle">
            <h1>
              recent<span>-</span>tracks
            </h1>
          </div>
        </div>

        <div className="trackWrapper2">
          <div className="box-track">
            <img src={track1} alt="" />
            <h1>Existence</h1>
          </div>
          <div className="box-track">
            <img src={track4} alt="" />
            <h1>Blind</h1>
          </div>
          <div className="box-track">
            <img src={track3} alt="" />
            <h1>Counting Days</h1>
          </div>
          <div className="box-track">
            <img src={track2} alt="" />
            <h1>Duality</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracks;
