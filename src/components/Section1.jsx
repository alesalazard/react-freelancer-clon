import React from "react";
import "bootstrap";
import "../styles/Section1.css";

const Section1 = () => {
  return (
    <div className='container-fluid container1'>
      <div className='row'>
        <div className='col'>
          <div className='profile'>
            <img
              src={require("../img/profile.png")}
              alt='perfil'
              className='img-profile'
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h1 className='title1'>START BOOTSTRAP</h1>
        </div>
      </div>
      <div className='row divider'>
        <div className='col-2 divider-line'></div>
        <div className="col-2 material-symbols-rounded">star</div>
        <div className='col-2 divider-line'></div>
      </div>
      <div className='row'>
        <div className='col'>
          <p className='experience'>
            Web developer - Graphic Artist - User Experience Designer
          </p>
        </div>
      </div>
    </div>
  );
};
export default Section1;
