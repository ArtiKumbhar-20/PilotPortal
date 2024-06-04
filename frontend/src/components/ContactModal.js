import React from "react";
export default function ContactModal() {
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
      style={{ zIndex: 999 }}
    >
      <div className='modal-dialog modal-dialog-centered contact-modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Contact Us</h4>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              &times;
            </button>
          </div>
          <div className='modal-body'>
            <form action='/examples/actions/confirmation.php' method='post'>
              <div className='form-group'>
                <label for='inputName'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputName'
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label for='inputEmail'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  placeholder='Your Email'
                  required
                />
              </div>
              <div className='form-group'>
                <label for='inputMessage'>Message</label>
                <textarea
                  className='form-control'
                  id='inputMessage'
                  rows='4'
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <br />
              <button className='btn btn-primary' type='submit'>
                <span>Send</span>
              </button>
              <button
                type='button'
                className='btn btn-link'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
