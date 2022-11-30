import React, { useState } from "react";
import axios from "axios";

function App() {
  setTimeout(() => {
    update();
  }, 1000);
  const [price, setprice] = useState([]);
  function update() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=XMR,INR"
      )
      .then((responce) => {
        setprice(responce.data);
      });
  }
  let priceINR = (0.021639733645 * price.INR - 299.92).toFixed(4);
If(isNaN(priceINR))
{return(<h1>loading<h1>);}
else{
  return (
    <div className="container">
      <h1 style={{ color: priceINR > 0 ? "green" : "red", fontSize: "300%" }}>
        YourP/L:{priceINR}
      </h1>
      <h4>one coin: {price.INR}</h4>
    </div>
  );}
}
export default App;
