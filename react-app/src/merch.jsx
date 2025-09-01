import { useState } from "react";
import merch1 from "./assets/Images/merch1.jpg";
import merch2 from "./assets/Images/merch2.jpg";
import merch3 from "./assets/Images/merch3.jpg";
import cart from "./assets/Images/shopping-cart.png";

function Merch() {
  const products = [
    { id: 1, name: "Merch 1", price: 300, img: merch1 },
    { id: 2, name: "Merch 2", price: 300, img: merch2 },
    { id: 3, name: "Merch 3", price: 300, img: merch3 },
  ];

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setCartOpen(!cartOpen);
  const closeCart = () => setCartOpen(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty } : item))
      );
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <section className="merchSection" id="merch">
        <div className="cartWrapper" onClick={toggleCart}>
          <div className="cart">
            <img src={cart} alt="cart" />
            {cartItems.length > 0 && (
              <span className="cartIndicator">{cartItems.length}</span>
            )}
          </div>
        </div>

        <div className="merchWrapper">
          {products.map((product) => (
            <div key={product.id} className="merch-box">
              <img src={product.img} alt={product.name} />
              <h1>₱ {product.price.toFixed(2)}</h1>
              <button onClick={() => addToCart(product)}>Buy</button>
            </div>
          ))}
        </div>

        {/* Cart Drawer */}
        <div className={`cartDrawer ${cartOpen ? "open" : ""}`}>
          <div className="cartHeader">
            <h2>Your Cart</h2>
            <button className="closeBtn" onClick={closeCart}>
              ✕
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cartItem">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>₱ {item.price}</p>
                    <div className="qtyControls">
                      <button
                        className="decrease"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="increase"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <h3>Total: ₱ {total.toFixed(2)}</h3>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Merch;
