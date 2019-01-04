import React from "react";
import Map from "./Projects";
import axios from "axios";

const API_KEY = "1e90d005747d5d491d09b969b2b73da1";
const URL = "api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=";
class About extends React.Component {
  state = {
    temp: null,
    weather: "",
    humidity: null
  };

  async componentDidMount() {
    const api_call = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=19&lon=70&units=metric&APPID=${API_KEY}`
    );
    console.log(api_call);
    this.setState({
      temp: api_call.data.main.temp,
      humidity: api_call.data.main.humidity,
      weather: api_call.data.weather[0].description
    });
    console.log(api_call);
  }

  render() {
    const imageStyle = {
      width: "130px",
      height: "100px"
    };

    return (
      <div className="container" id="About">
        <Map />
        <hr />
        <div className="row">
          <div className="card" style={{ paddingBottom: 200 }}>
            <div className="ms-card col-s-4 col-m-6">
              <div className="ms-pic">
                <img
                  className="scale-up-center"
                  style={imageStyle}
                  src={"icons/temperature-2.svg"}
                  alt="pic"
                />
              </div>
              <div className="ms-title center">
                <h5>Current Weather</h5>
              </div>
              <div className="ms-text ms-text-gray-font">
                <p className="center"> {this.state.temp} celcuis</p>
                <p className="text-center"> {this.state.humidity} humidity </p>
                <p className="center"> With {this.state.weather} </p>
              </div>
            </div>
            <div className="ms-card col-s-4 col-m-6">
              <div className="ms-pic">
                <img
                  className="scale-up-center"
                  style={imageStyle}
                  src={"icons/placeholder.svg"}
                  alt="pic"
                />
              </div>
              <div className="ms-title center">
                <h5>Current Travel Times</h5>
              </div>
              <div className="ms-text ms-text-gray-font">
                <p className="center"> x minutes to Playa Encuentro</p>
                <p className="text-center"> x minutes to the airport </p>
                <p className="center"> x minutes to somewhere else </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default About;
