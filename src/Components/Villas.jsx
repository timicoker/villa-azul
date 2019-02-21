import React, { Component } from "react";

class Villas extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="menu add-flex add-padding">
            <div className="menu-images">
              <img
                src="/images/rooms/room1.jpg"
                data-aos="fade-down"
                data-aos-delay="300"
                alt="pic"
              />
              <img
                src="/images/rooms/room2.jpg"
                data-aos="fade-left"
                data-aos-delay="300"
                alt="pic"
              />
              <img
                src="/images/rooms/room3.jpg"
                data-aos="fade-right"
                data-aos-delay="300"
                alt="pic"
              />
              <img
                src="/images/rooms/room4.jpg"
                data-aos="fade-up"
                data-aos-delay="300"
                alt="pic"
              />
            </div>

            <div className="">
              <h1>
                <span className="custom-font alex-brush">
                  Villas and Apartments{" "}
                </span>
              </h1>
              <div className="menu-images">
                <p>
                  All of our units feature a private bathroom, living room,
                  flat-screen TV, A/C, and a fully-equipped kitchen and terrace.
                </p>
                <p>
                  Soak up the Domincan sun at Encuentro Beach in Cabarete or by
                  our year-round outdoor pool.
                </p>
                <p>
                  We can even help you explore more of the island with our
                  included car rental service.
                </p>
                <p>
                  Surf Blue Billa Cabarete provides all the accommodations you
                  could need, and of course: free WiFi.{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
        <section class="footer-background center-h1">
          <h1 class="custom-h1">
            <span class="custom-font-white alex-brush">More Stuff</span>
          </h1>
        </section>
      </div>
    );
  }
}

export default Villas;
