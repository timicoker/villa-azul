import React, { Component } from "react";
//import DatePicker from "./DatePicker";
import Calendar from "./Calendar";
import "../index.css";

class Booking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      email: '',
      message: '',
      formSent: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(startDate, endDate, email, message) {
    this.setState({
      startDate: startDate,
      endDate: endDate,
      email: email,
      message: message,
    });
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('init');
    if(this.state.email === '' && this.state.message === ''){
      console.log('Error');
      return;
    }
    fetch('/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        message: this.state.message
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({formSent: true})
      }
      else this.setState({formSent: false})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="container" id="Booking">
        <form onSubmit={this.handleSubmit}>
          <div className="DatePickerContainer">
              <div className="center">
                  <Calendar/>
              </div>
              <input className="input-field" placeholder="Email" name="email" type="text" onChange={this.handleChange} />
              <textarea type="text" placeholder="Tell us a little about yourself..."  name="message" type="text" onChange={this.handleChange} />
              <div className="center">
              <button className="btn booking-btn" type="submit" onClick={this.handleSubmit}>Send Us A Message!</button>
              </div>
          </div>
        </form>
        </div>
    );
  }
}

export default Booking;
