import React from "react";
import "./Checkoutproduct.css";
import { useStateValue } from "./StateProvider";

function Checkoutproduct({ id, image, rating, text, price }) {
  const [{ Basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_basket",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img src={image} alt="" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__text">{text}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from BasketButton</button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
