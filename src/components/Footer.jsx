import React from "react";
import "bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='container-fluid foot-container'>
      <div className='row footer-l'>
        <div className='col-sm-12 col-md-4'>LOCATION</div>
        <div className='col-sm-12 col-md-4'>AROUND THE WEB</div>
        <div className='col-sm-12 col-md-4'>ABOUT FREELANCER</div>
      </div>
      <div className='row footer-m'>
        <div className='col-sm-12'>
          3481 Melrose Place
          <br />
          Beverly Hills, CA 90210
        </div>
        <div className='col-sm-12'>
          <img
            src={require("../img/facebook.png")}
            alt='facebook'
            className='img-logo'
          />
          <img
            src={require("../img/google-mas.png")}
            alt='google-mas'
            className='img-logo'
          />
          <img
            src={require("../img/twitter.png")}
            alt='twitter'
            className='img-logo'
          />
          <img
            src={require("../img/linkedin.png")}
            alt='linkedin'
            className='img-logo'
          />
          <img
            src={require("../img/dribble.png")}
            alt='dribble'
            className='img-logo'
          />
        </div>
        <div className='col-sm-12'>
          Freelance is a free to use, open source Bootstrap theme created by{" "}
          <span className='green'>Start Bootstrap</span>.
        </div>
      </div>
      <div className='row-12 footer-s'>Copyright © Your Website 2017</div>
    </div>
  );
};

export default Footer;
