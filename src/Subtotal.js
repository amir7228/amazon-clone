import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dipatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({basket.length} item) :<strong>0</strong>
          </p>
        )}
        decimalScale={2}
        value0
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
