import React, { Component } from "react";
//import DatePicker from "./DatePicker";
import Calendar from "./Calendar";
import "../index.css";
import * as emailjs from "emailjs-com";
import axios from "axios";
import toastr from "toastr";
import { ToastContainer, toast } from "react-toastify";
//import { getMaxListeners } from "cluster";

const VillaEmail = "dwooooderson@gmail.com";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      name: "",
      email: "",
      message: "",
      formSent: false,
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //////////////////////////////////////////////////////
  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }
  //////////////////////////////////////////////////////
  validateMail() {
    let errors = {};
    let formIsValid = true;
    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters";
      toast.error("Name needs to be at least 3 characters", {
        position: toast.POSITION.TOP_LEFT
      });
      formIsValid = false;
    }
    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = "Name needs to be at least 3 characters";
      toast.error("Name needs to be at least 3 characters", {
        position: toast.POSITION.TOP_LEFT
      });
      formIsValid = false;
    }
    if (!this.state.email || this.state.email.length < 3) {
      errors.email = "Email needs to be at least 3 characters";
      toast.error("Name needs to be at least 3 characters", {
        position: toast.POSITION.TOP_LEFT
      });
      formIsValid = false;
    }

    /* let pattern = `/^\w+([.-]?\w+)*@\w+)*@\W+([.-]?\w+)*(\.\w{2,3})+$/`;

    if (!pattern.test(this.state.email)) {
      errors.email = "This is not a valid email";
      console.log("nahh fam");
      formIsValid = false;
    } */
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  //////////////////////////////////////////////////////
  handleSubmit(e) {
    e.preventDefault();
    console.log("init");

    /* if (!this.validateMail()) {
      console.log("Error");
      return;
    } */
    // create a template param
    var templateParams = {
      from_name: this.state.name + "(" + this.state.email + ")",
      to_name: VillaEmail,
      subject: "New Message from your Booking site!",
      message_html: this.state.message + " sent from: " + this.state.email
    };
    //// EMAILJS ////
    emailjs
      .send(
        "gmail",
        "template_KD8NN6Zm",
        templateParams,
        "user_Jh7mRCaQe5Bym2UvyNDBr"
      )
      .then(
        function(res) {
          toastr.success("Message sent successfully");
          console.log("noice", res);
          toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_CENTER
          });
        },
        function(err) {
          toastr.error(err);
          toast.error("There was an error with your message", {
            position: toast.POSITION.TOP_LEFT
          });
          console.log(err);
        }
      );
    //reset the state //
    this.setState({
      name: "",
      email: "",
      message: "",
      formSent: true,
      startDate: new Date(),
      endDate: new Date()
    });
  }
  toasti = e => {
    e.preventDefault();
    console.log("hsdhhdhdfhd");
    toast.error("There was an error with your message", {
      position: toast.POSITION.TOP_LEFT
    });
  };

  render() {
    return (
      <div>
        <section className="booking">
          <div className="center" id="Booking">
            <form onSubmit={this.handleSubmit}>
              <div className="date-picker">
                <div>
                  <Calendar />
                </div>

                <input
                  className="input-field"
                  placeholder="Name"
                  name="name"
                  type="text"
                  required="required"
                  onChange={this.handleChange}
                  value={this.state.name}
                  error={this.state.errors.name}
                />
                <input
                  className="input-field"
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.email}
                  error={this.state.errors.email}
                />
                <textarea
                  className="text-field"
                  placeholder="Tell us a little about yourself..."
                  name="message"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.message}
                  error={this.state.errors.message}
                />
                <div className="center">
                  <button
                    className="submit-button"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Send Us A Message!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Booking;
