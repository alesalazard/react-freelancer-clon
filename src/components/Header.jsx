import React from "react";
import 'bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="container-fluid nav-container">
      <div className="row">
        <div className="col-6">
          <h1>START BOOTSTRAP</h1>
        </div>
        <div className="col-6 navbar">
          <div className="row">
            <div className="col"><a href="#portfolio">PORTFOLIO</a></div>
            <div className="col"><a href="#about">ABOUT</a></div>
            <div className="col"><a href="#contact">CONTACT</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;