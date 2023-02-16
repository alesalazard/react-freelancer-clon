import React from "react";
import "bootstrap";
import "../styles/Section3.css";

const Section3 = () => {
  return (
    <div className='container-fluid container3'>
      <div className='row'>
        <h2 className='title3'>ABOUT</h2>
      </div>
      <div className='row divider'>
        <div className='col-2 divider-line'></div>
        <div className='col-2 material-symbols-rounded'>star</div>
        <div className='col-2 divider-line'></div>
      </div>
      <div className='row about-text'>
        <div className='col-4'>
          <p>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS and
            JavaScript as well as optional LESS stylesheets for easy
            customization.
          </p>
        </div>
        <div className='col-4'>
          <p>
            Whether you're student looking to showcase your work, a professional
            looking to attract clients, or a graphic artist looking to share your
            projects, this template is the perfect starting point!
          </p>
        </div>
      </div>
      <div className="btn-container">
        <div className='row'>
          <div className="col-2">
            <img
              src={require('../img/download.png')}
              alt="download icon"
              className="icon-download" 
            />
          </div>
          <div className="col-10 btn-link">
            <button type="button" className="btn btn-link">Download Theme</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
