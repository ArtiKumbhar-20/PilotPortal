import React, { useState} from 'react';
import axios from "axios";

export default function EventForm() {

  const [eventTitle, seteventTitle] = useState("");
  const [eventInstiID, seteventInstiID] = useState("");
  const [eventType, seteventType] = useState("");
  const [eventLocation, seteventLocation] = useState("");
  const [eventDescr, seteventDescr] = useState("");
  const [eventSPOCFname, seteventSPOCFname] = useState("");
  const [eventSPOCLname, seteventSPOCLname] = useState("");
  const [eventSPOCMobile, seteventSPOCMobile] = useState("");
  const [eventSPOCWhatsapp, seteventSPOCWhatsapp] = useState("");
  const [eventSPOCEmail, seteventSPOCEmail] = useState("");
  const [eventSPOCWeb, seteventSPOCWeb] = useState("");
  const [eventStartTime, seteventStartTime] = useState("");
  const [eventEndTime, seteventEndTime] = useState("");
  const [eventStartDate, seteventStartDate] = useState("");
  const [eventEndDate, seteventEndDate] = useState("");
  const [eventGuidelines, seteventGuidelines] = useState("");

  // Reset from after successfull submission
  //const Event = useRef(null);

  const sendEventDetails = (event) => {
    event.preventDefault();

    const startDate = new Date(eventStartDate + "T" + eventStartTime);
    const endDate = new Date(eventEndDate + "T" + eventEndTime);

    if (endDate <= startDate) {
      alert("End date and time must be after start date and time");
      return;
    }

    axios({
      method: "post",
      url: "http://localhost:8000/event/",
      data: {
        eventTitle,
        eventInstiID,
        eventType,
        eventLocation,
        eventDescr,
        eventSPOCFname,
        eventSPOCLname,
        eventSPOCMobile,
        eventSPOCWhatsapp,
        eventSPOCEmail,
        eventSPOCWeb,
        eventStartTime,
        eventEndTime,
        eventStartDate,
        eventEndDate,
        eventGuidelines
      },
    }).then((response) => {
      alert(`Thank you for submitting the details.`);
      console.log(response.data);
      document.getElementById('contact-form').reset();
    });
  };

  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          <div className='col-lg-12 mb-30'>
            <form
              id='contact-form'
              className='comment-form-inner contact-form wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
              action='#'
              onSubmit={sendEventDetails}
            >
                {/* Title */}
              <h2 className='title'>Event Details</h2>
              

               {/* row-1 */}
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Event Title</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventTitle(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Event Title'
                    required 
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute ID</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventInstiID(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Event Institute ID'
                    required 
                  />
                </div>
                 
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Event Type</label>
                  <select className='form-select' onChange={(e) => seteventType(e.target.value)}  required >
                    <option selected disabled>
                      Select Event Type
                    </option>
                    <option value='1'>Health</option>
                    <option value='2'>Agriculture</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Event Location</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventLocation(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Event Location'
                     required 
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Event Description</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventDescr(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Event Description'
                    required 
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Start Date</label>
                  <input
                    type='date'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventStartDate(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Date'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Start Time</label>
                  <input
                    type='time'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventStartTime(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Start Time'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>End Date</label>
                  <input
                    type='date'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventEndDate(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Date'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>End Time</label>
                  <input
                    type='time'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventEndTime(e.target.value)}
                    aria-describedby='emailHelp'
                  />
                </div>  
               
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Guidelines</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventGuidelines(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Guidelines'
                       
                  />
                </div>
              </div>
                {/* SPOC Details */}
              <br />
              <h2 className='title'>Single Point of Contact (SPOC) For The Event</h2>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventSPOCFname(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='First Name'
                    required
                    pattern='^[A-Za-z]+$'
                    title='Only alphabetic characters are allowed'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventSPOCLname(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Last Name'
                    required
                    pattern='^[A-Za-z]+$'
                    title='Only alphabetic characters are allowed'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Email</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventSPOCEmail(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Email'
                    required
                    pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                    title='Please enter a valid email address'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventSPOCMobile(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Mobile'
                    required
                    pattern='^\d{10}$'
                    title='Please enter a valid 10-digit mobile number'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventSPOCWhatsapp(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Whatsapp Number'
                    required
                    pattern='^\d{10}$'
                    title='Please enter a valid 10-digit mobile number'
                  />
                </div>

                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Website</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    onChange={(e) => seteventSPOCWeb(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Website'
                    required
                    pattern='^(https?://)?(www\.)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})([/w.-]*)*[/]*$'
                    title='Please enter a valid URL'
                  />
                </div>
              </div>
              <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexcheckDefault'
                    style={{
                      height: 20,
                      padding: 0,
                      marginBottom: -8,
                      marginRight: 12,
                      width: 20,
                    }}
                    
                    required
                  />

                    {/* Terms and Conditions  */}
                  <label
                    className='form-check-label labelStyle'
                    htmlFor='flexCheckDefault'
                  >
                    I agree to all terms and conditions.
                  </label>
                </div>
              </div>

              <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit'>
                  <span>Create an Event</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
