import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './App.css';

function Slider(){
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav items={1}>
        <div className="item-promo">
          <h4>1</h4>
        </div>
        <div className="item-promo">
          <h4>2</h4>
        </div>
        <div className="item-promo">
          <h4>3</h4>
        </div>
        <div className="item-promo">
          <h4>4</h4>
        </div>
        <div className="item-promo">
          <h4>5</h4>
        </div>
        <div className="item-promo">
          <h4>6</h4>
        </div>
        <div className="item-promo">
          <h4>7</h4>
        </div>
        <div className="item-promo">
          <h4>8</h4>
        </div>
        <div className="item-promo">
          <h4>9</h4>
        </div>
        <div className="item-promo">
          <h4>10</h4>
        </div>
        <div className="item-promo">
          <h4>11</h4>
        </div>
        <div className="item-promo">
          <h4>12</h4>
        </div>
      </OwlCarousel>
    );
}

export default Slider;