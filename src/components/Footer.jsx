import React from "react";
import "bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='container-fluid foot-container'>
      <div className='row footer-l'>
        <div className="col">LOCATION</div>
        <div className="col">AROUND THE WEB</div>
        <div className="col">ABOUT FREELANCER</div>
      </div>
      <div className='row footer-m'>
        <div className="col">3481 Melrose Place<br />Beverly Hills, CA 90210</div>
        <div className="col">LOGOS</div>
        <div className="col">Freelance is a free to use, open source Bootstrap theme created by <span className="green">Start Bootstrap</span>.</div>
      </div>
      <div className='row-12 footer-s'>Copyright © Your Website 2017</div>
    </div>
  );
};

export default Footer;
