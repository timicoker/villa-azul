import React, { Component } from "react";
import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  render() {
    const settings = {
      fade: true,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 500,
      stopOnHover: true,
      centerMode: true
    };
    return (
      <div>
        <div className="slider">
          <Slider {...settings}>
            <div className="center">
              <img className="slide" src="/images/slider/1.jpg" alt={"pic"} />
            </div>
            <div className="center">
              <img className="slide" src="/images/slider/2.jpg" alt={"pic"} />
            </div>
            <div className="center">
              <img className="slide" src="/images/slider/3.jpg" alt={"pic"} />
            </div>
            <div className="center">
              <img className="slide" src="/images/slider/4.jpg" alt={"pic"} />
            </div>
            <div className="center">
              <img className="slide" src="/images/slider/5.jpg" alt={"pic"} />
            </div>
            <div className="center">
              <img className="slide" src="/images/slider/6.jpg" alt={"pic"} />
            </div>
            <div className="center">
              <img className="slide" src="/images/slider/7.jpg" alt={"pic"} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
