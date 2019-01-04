import React from 'react'
import { Link, NavLink} from 'react-router-dom'
//import $ from 'jquery';


class Navbar extends React.Component {
    /* const scrollToShop = () => {
        $('html,body').animate({
            scrollTop: $("#parallax-window-section-4").offset().top},
        2000);
    };
    
    const scrollToTourDates = () => {
        $('html,body').animate({
            scrollTop: $("#parallax-window-section-2").offset().top},
        2000);
    }; */
    render() {
    
    return(
            <div className="nav-container">
                <div className="row no-margin navback" >
                    <div className="ms-menu ms-float-left"> 
                        <img src={"icons/sunrise.svg"} alt={"pic"} style={{height:80, width:80, paddingBottom:25}}/> 
                        <h3><Link to="/" className="no-dec">Surf Blue Villa</Link></h3>
                    </div>
                    <div className="ms-menu ms-float-right main-menu">
                        <nav className="nav">
                            <li className="navlist"><Link to="/">Home</Link></li>
                            <li className="navlist"><NavLink to="/About">About</NavLink></li>
                            <li className="navlist"><NavLink to="/Contact">Booking</NavLink></li>
                        </nav>
                    </div>
                </div>
            </div>
        
        )
    };
}

export default Navbar
