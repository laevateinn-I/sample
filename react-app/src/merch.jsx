import merch1 from "./assets/Images/merch1.jpg";
import merch2 from "./assets/Images/merch2.jpg";
import merch3 from "./assets/Images/merch3.jpg";
import cart from "./assets/Images/shopping-cart.png";

function Merch() {
  return (
    <>
      <section className="merchSection" id="merch">
        <div className="cartWrapper">
          <div className="cart">
            <img src={cart} alt="" />
          </div>
        </div>

        <div className="merchWrapper">
          <div className="merch-box">
            <img src={merch1} alt="" />
            <h1>₱ 0.00</h1>
            <button>Buy</button>
          </div>
          <div className="merch-box">
            <img src={merch2} alt="" />
            <h1>₱ 0.00</h1>
            <button>Buy</button>
          </div>
          <div className="merch-box">
            <img src={merch3} alt="" />
            <h1>₱ 0.00</h1>
            <button>Buy</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Merch;
