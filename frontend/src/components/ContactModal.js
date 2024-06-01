import React, { useState } from "react";
import axios from "axios";
export default function ContactModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/contact/", formData)
      .then(response => {
        console.log("Success:", response.data);
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
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
            
            {/* <form action='/examples/actions/confirmation.php' method='post'> */}
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
              <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
              <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
              <label htmlFor='message'>Message</label>
                <textarea
                  className='form-control'
                  id='message'
                  rows='4'
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
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
    
    {showToast && (
        <div
          id="toast"
          style={{
            position: "fixed",
            top: "20px", // Position at the top of the page
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff", // White background
            color: "#000", // Black text
            padding: "15px",
            borderRadius: "5px",
            zIndex: "1000",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", // Optional: to give a subtle shadow for better visibility
            width: "300px",
            textAlign: "center",
          }}
        >
          <p>Form submitted successfully!</p>
          <button
            onClick={() => setShowToast(false)}
            style={{
              backgroundColor: "purple",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}