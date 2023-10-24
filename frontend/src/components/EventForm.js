import React, { useState, useRef } from "react";
import axios from "axios";
import {
  validateRequired,
  validateEmail,
  validateMobile,
} from "./formValidator";
import config from "./config";
const apiUrl = `${config.backendUrl}/event/`; // Construct Backend API URL

export const EventForm = () => {
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

  const [formErrors, setFormErrors] = useState({
    eventTitle: "",
    eventInstiID: "",
    eventType: "",
    eventLocation: "",
    eventDescr: "",
    eventSPOCFname: "",
    eventSPOCLname: "",
    eventSPOCMobile: "",
    eventSPOCWhatsapp: "",
    eventSPOCEmail: "",
    eventSPOCWeb: "",
    eventStartTime: "",
    eventEndTime: "",
    eventStartDate: "",
    eventEndDate: "",
    eventGuidelines: "",
  });

  // Reset from after successfull submission
  const EventForm = useRef(null);

  const sendEventDetails = (event) => {
    event.preventDefault();
    const newFormErrors = {
      eventTitle: validateRequired(eventTitle),
      eventInstiID: validateRequired(eventInstiID),
      eventType: validateRequired(eventType),
      eventLocation: validateRequired(eventLocation),
      eventDescr: validateRequired(eventDescr),
      eventSPOCFname: validateRequired(eventSPOCFname),
      eventSPOCLname: validateRequired(eventSPOCLname),
      eventSPOCMobile: validateMobile(eventSPOCMobile),
      eventSPOCWhatsapp: validateMobile(eventSPOCWhatsapp),
      eventSPOCEmail: validateEmail(eventSPOCEmail),
      eventSPOCWeb: validateRequired(eventSPOCWeb),
      eventStartTime: validateRequired(eventStartTime),
      eventEndTime: validateRequired(eventEndTime),
      eventStartDate: validateRequired(eventStartDate),
      eventEndDate: validateRequired(eventEndDate),
      eventGuidelines: validateRequired(eventGuidelines),
    };

    setFormErrors(newFormErrors);
    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      axios({
        method: "post",
        url: apiUrl,
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
          eventGuidelines,
        },
      }).then((response) => {
        alert(`Thank you for submitting the details.`);
        console.log(response.data);
        // EventForm.current.reset();
      });
    }
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
              ref={EventForm}
              onSubmit={sendEventDetails}
            >
              {/* Title */}
              <h2 className='title'>Event Details</h2>

              {/* row-1 */}
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Event Title</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventTitle(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventTitle: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.eventTitle ? "is-invalid" : "")
                    }
                    placeholder='Event Title'
                    name={eventTitle}
                  />
                  {formErrors.eventTitle && (
                    <div className='invalid-feedback'>
                      {formErrors.eventTitle}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute ID</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventInstiID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventInstiID: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.eventInstiID ? "is-invalid" : "")
                    }
                    placeholder='Event Insti ID'
                    name={eventInstiID}
                  />
                  {formErrors.eventInstiID && (
                    <div className='invalid-feedback'>
                      {formErrors.eventInstiID}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Event Type</label>
                  <select
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventType(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventType: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-select " +
                      (formErrors.eventType ? "is-invalid" : "")
                    }
                    id='eventType'
                    placeholder='Select Event Type'
                    name={eventType}
                  >
                    <option selected disabled>
                      Select Event Type
                    </option>
                    <option value='1'>Health</option>
                    <option value='2'>Agriculture</option>
                  </select>
                  {formErrors.eventType && (
                    <div className='invalid-feedback'>
                      {formErrors.eventType}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Event Location</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventLocation(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventLocation: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.eventLocation ? "is-invalid" : "")
                    }
                    placeholder='Event Location'
                    name={eventLocation}
                  />
                  {formErrors.eventLocation && (
                    <div className='invalid-feedback'>
                      {formErrors.eventLocation}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Event Description</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventDescr(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventDescr: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.eventDescr ? "is-invalid" : "")
                    }
                    placeholder='Event Decription'
                    name={eventDescr}
                  />
                  {formErrors.eventDescr && (
                    <div className='invalid-feedback'>
                      {formErrors.eventDescr}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Start Date</label>
                  <input
                    type='date'
                    className={
                      "form-control " +
                      (formErrors.eventStartDate ? "is-invalid" : "")
                    }
                    name={eventStartDate}
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventStartDate(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        seteventStartDate: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.eventStartDate && (
                    <div className='invalid-feedback'>
                      {formErrors.eventStartDate}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Start Time</label>
                  <input
                    type='time'
                    className={
                      "form-control " +
                      (formErrors.eventStartTime ? "is-invalid" : "")
                    }
                    name={eventStartTime}
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventStartTime(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        seteventStartTime: validateRequired(value),
                      }));
                    }}
                    aria-describedby='emailHelp'
                    placeholder='Start Time'
                  />
                  {formErrors.eventStartTime && (
                    <div className='invalid-feedback'>
                      {formErrors.eventStartTime}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>End Date</label>
                  <input
                    type='date'
                    className={
                      "form-control " +
                      (formErrors.eventEndDate ? "is-invalid" : "")
                    }
                    name={eventEndDate}
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventEndDate(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        seteventEndDate: validateRequired(value),
                      }));
                    }}
                    aria-describedby='emailHelp'
                    placeholder='Date'
                  />
                  {formErrors.eventEndDate && (
                    <div className='invalid-feedback'>
                      {formErrors.eventEndDate}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>End Time</label>
                  <input
                    type='time'
                    className={
                      "form-control " +
                      (formErrors.eventEndTime ? "is-invalid" : "")
                    }
                    name={eventEndTime}
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventEndTime(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        seteventEndTime: validateRequired(value),
                      }));
                    }}
                    aria-describedby='emailHelp'
                  />
                  {formErrors.eventEndTime && (
                    <div className='invalid-feedback'>
                      {formErrors.eventEndTime}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Guidelines</label>
                  <input
                    type='name'
                    className={
                      "form-control " +
                      (formErrors.eventGuidelines ? "is-invalid" : "")
                    }
                    name={eventGuidelines}
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventGuidelines(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        seteventGuidelines: validateRequired(value),
                      }));
                    }}
                    aria-describedby='emailHelp'
                    placeholder='Guidelines'
                  />
                  {formErrors.eventGuidelines && (
                    <div className='invalid-feedback'>
                      {formErrors.eventGuidelines}
                    </div>
                  )}
                </div>
              </div>
              {/* SPOC Details */}
              <br />
              <h2 className='title'>
                Single Point of Contact (SPOC) For The Event
              </h2>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventSPOCFname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        seteventSPOCFname: validateRequired(value),
                      }));
                    }}
                    aria-describedby='emailHelp'
                    placeholder='First Name'
                  />
                  {formErrors.eventSPOCFname && (
                    <div className='invalid-feedback'>
                      {formErrors.eventSPOCFname}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventSPOCLname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        seteventSPOCLname: validateRequired(value),
                      }));
                    }}
                    aria-describedby='emailHelp'
                    placeholder='Last Name'
                  />
                  {formErrors.eventSPOCLname && (
                    <div className='invalid-feedback'>
                      {formErrors.eventSPOCLname}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Email</label>
                  <input
                    type='email'
                    className={
                      "form-control " +
                      (formErrors.eventSPOCEmail ? "is-invalid" : "")
                    }
                    placeholder='Enter Email'
                    name={eventSPOCEmail}
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventSPOCEmail(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventSPOCEmail: validateEmail(value),
                      }));
                    }}
                  />
                  {formErrors.eventSPOCEmail && (
                    <div className='invalid-feedback'>
                      {formErrors.eventSPOCEmail}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventSPOCMobile(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventSPOCMobile: validateMobile(value),
                      }));
                    }}
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.eventSPOCMobile ? "is-invalid" : "")
                    }
                    placeholder='Enter Mobile Number'
                    name={eventSPOCMobile}
                  />
                  {formErrors.eventSPOCMobile && (
                    <div className='invalid-feedback'>
                      {formErrors.eventSPOCMobile}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventSPOCWhatsapp(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventSPOCWhatsapp: validateMobile(value),
                      }));
                    }}
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.eventSPOCWhatsapp ? "is-invalid" : "")
                    }
                    placeholder='Enter Whatsapp Number'
                    name={eventSPOCWhatsapp}
                  />
                  {formErrors.eventSPOCWhatsapp && (
                    <div className='invalid-feedback'>
                      {formErrors.eventSPOCWhatsapp}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Website</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      seteventSPOCWeb(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        eventSPOCWeb: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.eventSPOCWeb ? "is-invalid" : "")
                    }
                    aria-describedby='emailHelp'
                    placeholder='Enter Website'
                  />
                  {formErrors.eventSPOCWeb && (
                    <div className='invalid-feedback'>
                      {formErrors.eventSPOCWeb}
                    </div>
                  )}
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
};
