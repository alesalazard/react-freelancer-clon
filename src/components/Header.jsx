import React from "react";
import 'bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="container-fluid header-container">
      <div className="row">
        <div className="col-sm-4 col-6">
          <h1 className="header-title">START BOOTSTRAP</h1>
        </div>
        <div className="col-sm-8 col-6 navbar">
            <div className="col-12 col-sm-4"><a href="#portfolio">PORTFOLIO</a></div>
            <div className="col-12 col-sm-3"><a href="#about">ABOUT</a></div>
            <div className="col-12 col-sm-3"><a href="#contact">CONTACT</a></div>
        </div>
      </div>
    </div>
  )
}

export default Header;