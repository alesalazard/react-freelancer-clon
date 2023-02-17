import React from "react";
import "bootstrap";
import "../styles/Data.css";

const Data = () => {
  return (
    <div className='container-fluid container-form' id="contact">
      <div className='row'>
        <div className='col'>
          <h2 className='title2'>CONTACT ME</h2>
        </div>
      </div>
      <div className='row divider'>
        <div className='col-2 divider-line-black'></div>
        <div className='col-2 material-symbols-rounded black-star'>star</div>
        <div className='col-2 divider-line-black'></div>
      </div>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' className='form-control' id='input-name' />
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            id='input-email'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='form-group'>
          <label>Phone Number</label>
          <input type='text' className='form-control' id='input-phone' />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea
            className='form-control'
            id='text-area'
            rows='3'>
          </textarea>
        </div>
        <button type='submit' className='btn btn-primary button-send'>
          Send
        </button>
      </form>
    </div>
  );
};
export default Data;
