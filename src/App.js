import "./App.css";
import BakeryItem from "./components/BakeryItem.js";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState(new Map());
  const [cost, setCost] = useState(0);

  const modifyCart = (item, price) => {
    setCart(new Map(cart.set(item, cart.get(item) ? cart.get(item) + 1 : 1)))
    setCost(Math.round(100 * (cost + price))/100)
  }

  return (
    <div className="App">
      <div className="left">
      <h1 className="title">Blue Room</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="items">
      {bakeryData.map((item, index) => (
        <BakeryItem item={item} setCart={modifyCart} key={index}></BakeryItem>
      ))}
      </div>
      </div>
      <div className="cart">
        <h2 id="title2">Cart</h2>
        {cost == 0 ? <p>Nothing here just yet!</p> : 
          <div>
            {Array.from(cart.entries()).map((entry) => (
              <div>
                <p>{entry[1]}x {entry[0]}</p>
              </div>
          ))}
          <strong>Total: {cost}</strong>
          </div>
}
      </div>
    </div>
  );
}

export default App;