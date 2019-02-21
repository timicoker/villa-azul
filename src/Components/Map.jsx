import React, { Component } from "react";
import SimpleMap from "./Googlemap";

class Map extends Component {
  render() {
    return (
      <div>
        <section class="add-flex reservation-section">
          <div class="center-text add-padding">
            <h1>
              <span class="custom-font alex-brush">The Dominican</span>
              <br />
              Google maps
            </h1>
            <h2>*</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              animi odit in dignissimos neque ratione, laboriosam rerum!
              Deleniti accusamus non, aliquam tempora, mollitia laborum ad,
              fugiat at explicabo esse aut. Lorem ipsum dolor sit amet,
              adipisicing elit.
            </p>
            <a href="#">make a reservation</a>
          </div>

          <SimpleMap />
          {/* <img
              src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo11.jpg"
              data-aos="fade-up"
              data-aos-delay="300"
              alt="pic"
            /> */}
        </section>
        <section class="footer-background center-h1">
          <h1 class="custom-h1">
            <span class="custom-font-white alex-brush">
              Book With Us Below!
            </span>
          </h1>
        </section>
      </div>
    );
  }
}

export default Map;
