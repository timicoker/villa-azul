import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import Sidenav from './components/Sidenav'
import Home from './components/Home'
//import About from './components/About'
//mport Contact from './Contact'
import './index.css'
import 'moment-timezone';
//import Booking from './components/BookingPage';
//import Parallax from 'parallax-js'



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App" >
                <Navbar />
                  <Route exact path='/' component = {Home}/>
                  {/* <Route path='/About' component = {About}/> */}
                  {/* <Route path='/Contact' component = {Contact}/> */}
                  <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
