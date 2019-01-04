import React from 'react'
import {Link} from 'react-router-dom'
import Slider from './Slider';
import Booking from './BookingPage';
import About from './About';
import HomeCards from './HomeCards';


const Home = () => {
    return(
        <div>                
                <header className="header">
                <div className="background"></div>
                </header>
                <div className="container row-intro" style={{paddingTop:30}}>
                    <h1 className="heading">Book a stay with us today</h1>
                    
                    <h4 className="color-text center greeting" >Experience the Dominican Republic your way. Stay with us in our fully equipped home with everything you need. Located close to beautiful beaches, wonderful restaurants and great shopping.</h4>
                    <Link to="/Contact"><button className="home-button ms-btn ms-yellow ms-rounded" style={{width:200,height:50,margin:0 }}>Book</button></Link>
                </div>
                <div className="container" style={{paddingTop:180}}>
                <div style={{padding:40}}>
                <hr/>
                </div>
                    <Slider />
                </div>
                <br/>
                
                <div className="container row-intro row" style={{padding:30}}>
                    <hr/>
                    <HomeCards id="About"/>                  	            
                </div>
                
                <div className="row">
                    <About/>
                </div>
                <div className="row">
                    <Booking id="Booking"/>
                </div>
        </div>
        )
    };

export default Home