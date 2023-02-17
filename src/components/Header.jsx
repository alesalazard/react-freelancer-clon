import React from "react";
import 'bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="container-fluid header-container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-9">
          <h1 className="header-title">START BOOTSTRAP</h1>
        </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="row">
              <div className="col-md-4 col-lg-5"><a href="#portfolio">PORTFOLIO</a></div>
              <div className="col-md-3 col-lg-4"><a href="#about">ABOUT</a></div>
              <div className="col-md-2 col-lg-2"><a href="#contact">CONTACT</a></div>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header;