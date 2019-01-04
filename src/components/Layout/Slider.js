import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//import {beach4, house} from "";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      fade: true,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 1300,
      stopOnHover: true ,
      centerMode: true   
    };
    return (
      <div className="slider">
        <Slider {...settings}>
           <div className="center">
            <img className="slide" src="/images/beach.png" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/beach2.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/beach3.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/bed.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/bed2.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/dining.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/dining2.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/garden2.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/house.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/living.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/living2.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/pool.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/pool2.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/pool3.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/sun.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/table.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/table4.jpg" alt={"pic"}/>
          </div>
          <div className="center">
            <img className="slide" src="/images/yard.jpg" alt={"pic"}/>
          </div>
        </Slider>
        
      </div>
    );
  }
}
