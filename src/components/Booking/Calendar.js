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
        <h1 className="color-text" style={{paddingBottom:20}}>Book with us below!</h1>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <span className="color text" >To:</span>
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Calendar