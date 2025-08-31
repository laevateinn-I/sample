import banner1 from "./assets/Images/tour1.jpg";
import banner2 from "./assets/Images/tour2.jpg";
import banner3 from "./assets/Images/tour3.jpg";
import banner4 from "./assets/Images/tour4.jpg";
import banner5 from "./assets/Images/tour5.jpg";
import banner6 from "./assets/Images/tour6.jpg";

function Tour() {
  return (
    <>
      <section className="tourSection">
        <div className="tourWrapper">
          <div className="box-tour">
            <img src={banner1} alt="" />
          </div>
          <div className="box-tour">
            <img src={banner2} alt="" />
          </div>
          <div className="box-tour">
            <img src={banner3} alt="" />
          </div>
          <div className="box-tour">
            <img src={banner4} alt="" />
          </div>
          <div className="box-tour">
            <img src={banner5} alt="" />
          </div>
          <div className="box-tour">
            <img src={banner6} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Tour;
