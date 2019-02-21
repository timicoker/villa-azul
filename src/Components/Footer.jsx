import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="restaurant-info">
            <div class="locations">
              <h4>LOCATIONS</h4>
              <div class="location-1">
                <h5>
                  376 Van Brun St
                  <br />
                  Brooklyn, NY &#8212; 11231
                </h5>
              </div>
              <div class="location-2">
                <h5>
                  25 Union Square West
                  <br />
                  New York, NY &#8212; 10003
                </h5>
              </div>
            </div>

            <div class="hours">
              <h4>HOURS</h4>
              <div class="weekdays">
                <h5>
                  Monday - Thursday
                  <br />
                  5:30pm - 10:00pm
                </h5>
              </div>

              <div class="weekends">
                <h5>
                  Friday & Saturday
                  <br />
                  5:30pm - 11:00pm
                </h5>
              </div>

              <div class="private-events">
                <h5>
                  Available for private
                  <br />
                  events on Sunday
                </h5>
              </div>
            </div>
          </div>

          <div class="copyright">
            <p>
              <small>something</small>
            </p>
            <p>
              <small>something else</small>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
