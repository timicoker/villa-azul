import React, { Component } from "react";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Villas from "./Components/Villas";
import Map from "./Components/Map";
import Booking from "./Components/Booking";
import Carousel from "./Components/Slider";
import Footer from "./Components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <About />
        <Carousel />
        <Villas />
        <Map />
        <Booking />
        <Footer />
      </div>
    );
  }
}

export default Home;
