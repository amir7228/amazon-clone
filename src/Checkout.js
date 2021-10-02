import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Checkoutproduct from "./Checkoutproduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        src="https://m.media-amazon.com/images/I/51XVjwcuUCL._SX3000_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>your Shopping Basket is Empty</h2>
          <p>
            You have No Item in your Basket.To Buy one or more items,Click "Add
            To Basket"
          </p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
        </div>
      )}
      {basket.map((item) => (
        <Checkoutproduct
          id={item.id}
          text={item.text}
          image={item.image}
          price={item.price}
          rating={item.rating}
          Checkoutproduct
        />
      ))}
    </div>
  );
}

export default Checkout;
