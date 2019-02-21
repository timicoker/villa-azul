import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(startDate, endDate) {
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  }

  render() {
    return (
      <div>
        <DatePicker
          className="input-field"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <span className="white-text">To:</span>
        <DatePicker
          className="input-field"
          selected={this.state.endDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Calendar;
