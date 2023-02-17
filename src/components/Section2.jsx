import React from "react";
import "bootstrap";
import "../styles/Section2.css";

const Section2 = () => {
  return (
    <div className='container-fluid container2' id='portfolio'>
      <div className='row'>
        <div className='col'>
          <h2 className='title2'>PORTFOLIO</h2>
        </div>
      </div>
      <div className='row divider'>
        <div className='col-2 divider-line-black'></div>
        <div className='col-2 material-symbols-rounded black-star'>star</div>
        <div className='col-2 divider-line-black'></div>
      </div>
      <div className='row img-container'>
        <div className='col-sm-12 col-md-6 col-lg-4 img-individual-container'>
          <img
            src={require("../img/cabin.png")}
            alt='cabin'
            className='img-portfolio'
          />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 img-individual-container'>
          <img
            src={require("../img/cake.png")}
            alt='cake'
            className='img-portfolio'
          />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 img-individual-container'>
          <img
            src={require("../img/circus.png")}
            alt='circus'
            className='img-portfolio'
          />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 img-individual-container'>
          <img
            src={require("../img/game.png")}
            alt='game'
            className='img-portfolio'
          />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 img-individual-container'>
          <img
            src={require("../img/safe.png")}
            alt='safe'
            className='img-portfolio'
          />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 img-individual-container'>
          <img
            src={require("../img/submarine.png")}
            alt='submarine'
            className='img-portfolio'
          />
        </div>
      </div>
    </div>
  );
};
export default Section2;
