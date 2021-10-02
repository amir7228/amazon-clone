import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="header__input">
        <input type="text" />
        <SearchIcon className="header__icon" />
      </div>

      <div className="header__left">
        <Link to="/" className="header__link">
          <div className="header__option">
            <p className="header__option1">Helli Amir</p>
            <p className="header__option2">Acountant & List</p>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <p className="header__option1">Returns</p>
            <p className="header__option2">&orders</p>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <p className="header__option1">Your</p>
            <p className="header__option2">Prime</p>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />
            <p className="header__option2 header__basketcount">
              {basket.length}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
