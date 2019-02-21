import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="add-padding add-flex">
          <div className="center-text">
            <h1 className="custom-font  alex-brush">About Us</h1>
            <h2>*</h2>
            <p>
              Surf Blue Villa is a collection of villas located on the northern
              side of the Dominican Republic. Located in Caberate only minutes
              away from Encuentro Beach, the Surf Blue villas has all the
              amenities you could want (and more), to ensure that you have all
              your vacation needs met. Our wonderful staff are there to make
              sure your vacation is relaxing, fun and stress-free.
            </p>{" "}
          </div>
          <div
            className="about-img"
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </section>
      </div>
    );
  }
}

export default About;
