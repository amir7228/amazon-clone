import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,"
          image="https://m.media-amazon.com/images/I/31WGpGeu1QL.jpg"
          price={59}
          rating={4}
        />
        <Product
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, "
          image="https://m.media-amazon.com/images/I/51OD6AmLNvL.jpg"
          price={59}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, "
          image="https://m.media-amazon.com/images/I/51jhDPNF6OS.jpg"
          price={59}
          rating={4}
        />
        <Product
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, "
          image="https://m.media-amazon.com/images/I/41C-54ftXhL.jpg"
          price={59}
          rating={4}
        />
        <Product
          text="Lorem ipsum dolor sit amet consectetur adipisicing e"
          image="https://m.media-amazon.com/images/I/4163JcCU1bL._AC_SY230_.jpg"
          price={59}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          text="Lorem ipsum dolor sit amet consectetur adipisicing e"
          image="https://m.media-amazon.com/images/I/61Se1CwF6YS._AC_SY200_.jpg"
          price={59}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
