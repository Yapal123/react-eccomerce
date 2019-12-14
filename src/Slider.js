import React from "react";
import OwlCarousel from "react-owl-carousel2";
import './App.css';

function Slider(){
  const options = {
    items: 1,
    nav: true,
  };
    return (
      <OwlCarousel options={options} >
        <div>
          <img src="/img/fullimage1.jpg" alt="The Last of us" />
        </div>
        <div>
          <img src="/img/fullimage2.jpg" alt="GTA V" />
        </div>
        <div>
          <img src="/img/fullimage3.jpg" alt="Mirror Edge" />
        </div>
      </OwlCarousel>
    );
}

export default Slider;