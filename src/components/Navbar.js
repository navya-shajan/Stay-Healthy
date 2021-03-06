import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">STAY <i className="fas fa-h-square"></i>EALTHY</Link>
            </div>
        </nav>
        <div className="header-image">
                <img className="imagehead" src="./images/header2.jpg" alt="headerImage" />
                
            </div>
        </>
    );
}
export default Navbar ;