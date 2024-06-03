import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
  validateRequired,
  validateEmail,
  validateAadhar,
  validateMobile,
  validatePincode,
  validatePassYear,
} from "./formValidator";
import config from "./config";
const apiUrl = `${config.backendUrl}/register/`; // Construct Backend API URL

// Step 1: For Validation
export const Sign = () => {
  const navigate = useNavigate();

  // Fetch Institute List from backend
  const [institutes, setInstitutes] = useState([]);
  useEffect(() => {
    fetch(`${config.backendUrl}/getInstitutesList/`)  // Adjust the URL as per your Django server
      .then(response => response.json())
      .then(data => setInstitutes(data.institutes))
      .catch(error => console.error('Error fetching institutes:', error));
  }, []);

  // Form Validation Start
  const [loading, setLoading] = useState(false);
  // const [stdUniqueID, setStdUniqueID] = useState(null);
  const [stdFname, setStdFname] = useState("");
  const [stdLname, setStdLname] = useState("");
  const [stdDOB, setStdDOB] = useState("");
  const [stdGender, setStdGender] = useState("");
  const [stdMobile, setStdMobile] = useState("");
  const [stdWhatsapp, setStdWhatsapp] = useState("");
  const [stdEmail, setStdEmail] = useState("");
  const [stdAadhar, setStdAadhar] = useState("");
  const [stdFamBackground, setStdFamBackground] = useState("");
  const [stdAddress, setStdAddress] = useState("");
  const [stdAddrCity, setStdAddrCity] = useState("");
  const [stdAddrTaluka, setStdAddrTaluka] = useState("");
  const [stdAddrDist, setStdAddrDist] = useState("");
  const [stdAddrState, setStdAddrState] = useState("");
  const [stdAddrCountry, setStdAddrCountry] = useState("");
  const [stdAddrPin, setStdAddrPin] = useState("");
  const [stdBelongsTo, setStdBelongsTo] = useState("");
  const [stdInstiID, setStdInstiID] = useState("");
  const [stdBranch, setStdBranch] = useState("");
  const [stdStream, setStdStream] = useState("");
  const [stdPassoutYear, setStdPassoutYear] = useState("");
  const [stdTriedStartupBefore, setStdTriedStartupBefore] = useState("");
  const [stdParentSupport, setStdParentSupport] = useState("");
  const [stdEduLoan, setStdEduLoan] = useState("");
  const [stdEBC, setStdEBC] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState("");

  // Step 2: For Validation
  // State to hold form field errors
  const [formErrors, setFormErrors] = useState({
    stdFname: "",
    stdLname: "",
    stdDOB: "",
    stdGender: "",
    stdMobile: "",
    stdWhatsapp: "",
    stdEmail: "",
    stdAadhar: "",
    stdFamBackground: "",
    stdAddress: "",
    stdAddrCity: "",
    stdAddrTaluka: "",
    stdAddrDist: "",
    stdAddrState: "",
    stdAddrCountry: "",
    stdAddrPin: "",
    stdBelongsTo: "",
    stdInstiID: "",
    stdBranch: "",
    stdStream: "",
    stdPassoutYear: "",
    stdTriedStartupBefore: "",
    stdEduLoan: "",
    stdEBC: "",
  });

  // Reset from after successfull submission
  const studentForm = useRef(null);

  const sendStudentDetails = async (event) => {
    event.preventDefault();

    // Step 3: For Validation
    const newFormErrors = {
      stdFname: validateRequired(stdFname),
      stdLname: validateRequired(stdLname),
      stdDOB: validateRequired(stdDOB),
      stdGender: validateRequired(stdGender),
      stdMobile: validateRequired(stdMobile),
      stdWhatsapp: validateRequired(stdWhatsapp),
      stdEmail: validateEmail(stdEmail),
      stdAadhar: validateRequired(stdAadhar),
      stdFamBackground: validateRequired(stdFamBackground),
      stdAddress: validateRequired(stdAddress),
      stdAddrCity: validateRequired(stdAddrCity),
      stdAddrTaluka: validateRequired(stdAddrTaluka),
      stdAddrDist: validateRequired(stdAddrDist),
      stdAddrState: validateRequired(stdAddrState),
      stdAddrCountry: validateRequired(stdAddrCountry),
      stdAddrPin: validateRequired(stdAddrPin),
      stdBelongsTo: validateRequired(stdBelongsTo),
      stdInstiID: validateRequired(stdInstiID),
      stdBranch: validateRequired(stdBranch),
      stdStream: validateRequired(stdStream),
      stdPassoutYear: validatePassYear(stdPassoutYear),
      stdTriedStartupBefore: validateRequired(stdTriedStartupBefore),
      stdEduLoan: validateRequired(stdEduLoan),
      stdEBC: validateRequired(stdEBC),
    };

    // Step 4: For Validation : Will Not Change
    setFormErrors(newFormErrors);

    if (!agreeTerms) {
      setFormError("You must agree to the terms and conditions.");
      return;
    }

    // Step 5: For Validation : If statement
    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      setLoading(true);
      try {
        
      //   const existingStudent = await axios.get(`${apiUrl}?stdEmail=${stdEmail}`);
      // if (existingStudent.data.length > 0) {
      //   alert(`Student with email ${stdEmail} already exists.`);
      //   setLoading(false);
      //   return;
      // }

        const generatedStdUniqueID = Math.floor(100_000_000 + Math.random() * 900_000_000);

        const response = await axios.post(apiUrl, {
          stdUniqueID: generatedStdUniqueID,
          stdFname,
          stdLname,
          stdDOB,
          stdGender,
          stdMobile,
          stdWhatsapp,
          stdEmail,
          stdAadhar,
          stdFamBackground,
          stdAddress,
          stdAddrCity,
          stdAddrTaluka,
          stdAddrDist,
          stdAddrState,
          stdAddrCountry,
          stdAddrPin,
          stdBelongsTo,
          stdInstiID,
          stdBranch,
          stdStream,
          stdPassoutYear,
          stdTriedStartupBefore,
          stdParentSupport,
          stdEduLoan,
          stdEBC,
        });

        localStorage.setItem('studentEmail', stdEmail);
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        studentForm.current.reset();
        navigate('/verify_email');
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    }
  };


  // catch (error) {
  //   // Handle specific error message
  //   // Inside the catch block
  //   if (error.response && error.response.status === 400 && error.response.data.error === "User already exists. Please use a different email.") {
  //     alert("User already exists. Please use a different email.");
  //   } else {
  //     console.error("Error submitting form:", error);
  //   }
  // } finally {
  //   setLoading(false);
  // }

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
              ref={studentForm}
              onSubmit={sendStudentDetails}
            >
              <h2 className='title'>Profile Details (Sign In)</h2>
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='text'
                    // Step 6: For Validation : OnChange Will change
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdFname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdFname: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.stdFname ? "is-invalid" : "")
                    }
                    placeholder='Enter First Name'
                    name={stdFname}
                  />

                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.stdFname && (
                    <div className='invalid-feedback'>
                      {formErrors.stdFname}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdLname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdLname: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdLname ? "is-invalid" : "")
                    }
                    placeholder='Enter Last Name'
                    name={stdLname}
                  />
                  {formErrors.stdLname && (
                    <div className='invalid-feedback'>
                      {formErrors.stdLname}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Date of birth</label>
                  <input
                    type='date'
                    className={
                      "form-control " + (formErrors.stdDOB ? "is-invalid" : "")
                    }
                    name={stdDOB}
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdDOB(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdDOB: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.stdDOB && (
                    <div className='invalid-feedback'>{formErrors.stdDOB}</div>
                  )}
                </div>

                {/* row 2 */}
                <div className={`col-12 col-xl-4 col-lg-4 mb-3${formError && !stdGender ? 'has-error' : ''}`}>
                  <label className='labelStyle'>Gender</label>
                  <br />
                  <br />
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio1'>
                      <input
                        className={
                          "form-check-inputt " +
                          (formErrors.stdGender ? "is-invalid" : "")
                        }
                        type='radio'
                        // name='inlineRadioOptions'
                        id='stdGender'
                        value='Male'
                        style={{ height: 20 }}
                        name={stdGender}
                        // onChange={(e) => {
                        //   const value = e.target.value;
                        //   setStdGender(value);
                        //   setFormErrors((prevErrors) => ({
                        //     ...prevErrors,
                        //     stdGender: validateRequired(value),
                        //   }));
                        // }}
                        checked={stdGender === 'Male'}
                        onChange={(e) => stdGender(e.target.value)}
                      />
                      <span style={{ color: formError && !stdGender ? 'red' : '' }}>Male</span>
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      <input
                        className={
                          "form-check-inputt " +
                          (formErrors.stdGender ? "is-invalid" : "")
                        }
                        type='radio'
                        // name='inlineRadioOptions'
                        id='stdGender'
                        value='Female'
                        style={{ height: 20 }}
                        name={stdGender}
                        // onChange={(e) => {
                        //   const value = e.target.value;
                        //   setStdGender(value);
                        //   setFormErrors((prevErrors) => ({
                        //     ...prevErrors,
                        //     stdGender: validateRequired(value),
                        //   }));
                        // }}
                        checked={stdGender === 'Female'}
                        onChange={(e) => stdGender(e.target.value)}
                      />
                      <span style={{ color: formError && !stdGender ? 'red' : '' }}>Female</span>
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      <input
                        className={
                          "form-check-inputt " +
                          (formErrors.stdGender ? "is-invalid" : "")
                        }
                        type='radio'
                        // name='inlineRadioOptions'
                        id='stdGender'
                        value='other'
                        style={{ height: 20 }}
                        name={stdGender}
                        // onChange={(e) => {
                        //   const value = e.target.value;
                        //   setStdGender(value);
                        //   setFormErrors((prevErrors) => ({
                        //     ...prevErrors,
                        //     stdGender: validateRequired(value),
                        //   }));
                        // }}
                        checked={stdGender === 'other'}
                        onChange={(e) => stdGender(e.target.value)}
                      />
                      <span style={{ color: formError && !stdGender ? 'red' : '' }}>Other</span>
                    </label>
                  </div>
                  {/* {formErrors.stdGender && (
                    <div className='invalid-feedback'>
                      {formErrors.stdGender}
                    </div>
                  )} */}
                  {formError && !stdGender && <div className='error-message' style={{ color: 'red' }}>This field is required</div>}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdMobile(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdMobile: validateMobile(value),
                      }));
                    }}
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdMobile ? "is-invalid" : "")
                    }
                    placeholder='Enter Mobile Number'
                    name={stdMobile}
                  />
                  {formErrors.stdMobile && (
                    <div className='invalid-feedback'>
                      {formErrors.stdMobile}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdWhatsapp(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdWhatsapp: validateMobile(value),
                      }));
                    }}
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdWhatsapp ? "is-invalid" : "")
                    }
                    placeholder='Enter Whatsapp Number'
                    name={stdWhatsapp}
                  />
                  {formErrors.stdWhatsapp && (
                    <div className='invalid-feedback'>
                      {formErrors.stdWhatsapp}
                    </div>
                  )}
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Email</label>
                  <input
                    type='email'
                    className={
                      "form-control " +
                      (formErrors.stdEmail ? "is-invalid" : "")
                    }
                    placeholder='Enter Email'
                    name={stdEmail}
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdEmail(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdEmail: validateEmail(value),
                      }));
                    }}
                  />
                  {formErrors.stdEmail && (
                    <div className='invalid-feedback'>
                      {formErrors.stdEmail}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Aadhar Number</label>
                  <input
                    type='text'
                    className={
                      "form-control " +
                      (formErrors.stdAadhar ? "is-invalid" : "")
                    }
                    maxLength={12}
                    id='stdAadhar'
                    placeholder='Enter Adhar Number'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    name={stdAadhar}
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAadhar(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAadhar: validateAadhar(value),
                      }));
                    }}
                  />
                  {formErrors.stdAadhar && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAadhar}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Socio-Economic Background
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.stdFamBackground ? "is-invalid" : "")
                    }
                    name={stdFamBackground}
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdFamBackground(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdFamBackground: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Socio-Economic Background
                    </option>
                    <option value='Urban'>Urban</option>
                    <option value='Semi Urban'>Semi Urban</option>
                  </select>
                  {formErrors.stdFamBackground && (
                    <div className='invalid-feedback'>
                      {formErrors.stdFamBackground}
                    </div>
                  )}
                </div>
              </div>
              <br />
              <br />

              <h2 className='title'>Current Communication Address Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'> Address</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAddress(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAddress: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdAddress ? "is-invalid" : "")
                    }
                    id='stdAddress'
                    placeholder='Flat, House no., Building, Company, Apartment'
                    name={stdAddress}
                  />
                  {formErrors.stdAddress && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAddress}
                    </div>
                  )}
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>City</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAddrCity(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAddrCity: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdAddrCity ? "is-invalid" : "")
                    }
                    id='stdAddrCity'
                    placeholder='Enter City'
                    name={stdAddrCity}
                  />
                  {formErrors.stdAddrCity && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAddrCity}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Taluka</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAddrTaluka(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAddrTaluka: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdAddrTaluka ? "is-invalid" : "")
                    }
                    id='stdAddrTaluka'
                    placeholder='Enter Taluka'
                    name={stdAddrTaluka}
                  />
                  {formErrors.stdAddrTaluka && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAddrTaluka}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>District</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAddrDist(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAddrDist: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdAddrDist ? "is-invalid" : "")
                    }
                    id='stdAddrDist'
                    placeholder='Enter District'
                    name={stdAddrDist}
                  />
                  {formErrors.stdAddrDist && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAddrDist}
                    </div>
                  )}
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>State</label>
                  <select
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAddrState(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAddrState: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-select " +
                      (formErrors.stdAddrState ? "is-invalid" : "")
                    }
                    id='stdAddrState'
                    placeholder='Enter State'
                    name={stdAddrState}
                  >
                    <option selected disabled>
                      Select State
                    </option>
                    <option value='Maharashtra'>Maharashtra</option>
                  </select>
                  {formErrors.stdAddrState && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAddrState}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Country</label>
                  <select
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAddrCountry(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAddrCountry: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-select " +
                      (formErrors.stdAddrCountry ? "is-invalid" : "")
                    }
                    id='stdAddrCountry'
                    placeholder='Enter Country'
                    name={stdAddrCountry}
                  >
                    <option selected disabled>
                      Select Country
                    </option>
                    <option value='India'>India</option>
                  </select>
                  {formErrors.stdAddrCountry && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAddrCountry}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Pincode</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdAddrPin(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdAddrPin: validatePincode(value),
                      }));
                    }}
                    maxLength={6}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdAddrPin ? "is-invalid" : "")
                    }
                    id='stdAddrPin'
                    placeholder='Enter Pincode'
                    name={stdAddrPin}
                  />
                  {formErrors.stdAddrPin && (
                    <div className='invalid-feedback'>
                      {formErrors.stdAddrPin}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle' style={{ fontSize: "18px" }}>
                    What best defines your native place?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.stdBelongsTo ? "is-invalid" : "")
                    }
                    name={stdBelongsTo}
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdBelongsTo(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdBelongsTo: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      You Belong To
                    </option>
                    <option value='Tier 1 City'>Tier 1 City</option>
                    <option value='Tier 2 City'>Tier 2 City</option>
                    <option value='Urban'>Urban</option>
                    <option value='Semi-Urban City'>Semi-Urban City</option>
                    <option value='Rural'>Rural</option>
                    <option value='Remote Area'>Remote Area</option>
                    <option value='Tribal Area'>Tribal Area</option>
                  </select>
                  {formErrors.stdBelongsTo && (
                    <div className='invalid-feedback'>
                      {formErrors.stdBelongsTo}
                    </div>
                  )}
                </div>
              </div>

              <br />
              <br />

              <h2 className='title'>Academic Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select
                    className={
                      "form-select "
                      + (formErrors.stdInstiID ? "is-invalid" : "")
                    }
                    name={stdInstiID}
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdInstiID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdInstiID: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Institute
                    </option>
                    {institutes.map((institute, index) => (
                      <option key={index} value={institute.instID}>
                        {institute.instName}
                      </option>
                    ))}
                  </select>
                  {formErrors.stdInstiID && (
                    <div className='invalid-feedback'>
                      {formErrors.stdInstiID}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Branch</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdBranch(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdBranch: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdBranch ? "is-invalid" : "")
                    }
                    id='stdBranch'
                    placeholder='Enter Branch'
                    name={stdBranch}
                  />
                  {formErrors.stdBranch && (
                    <div className='invalid-feedback'>
                      {formErrors.stdBranch}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Stream</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdStream(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdStream: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdStream ? "is-invalid" : "")
                    }
                    id='stdStream'
                    placeholder='Enter Stream'
                    name={stdStream}
                  />
                  {formErrors.stdStream && (
                    <div className='invalid-feedback'>
                      {formErrors.stdStream}
                    </div>
                  )}
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Passout Year</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setStdPassoutYear(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        stdPassoutYear: validatePassYear(value),
                      }));
                    }}
                    maxLength={4}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.stdPassoutYear ? "is-invalid" : "")
                    }
                    id='stdPassoutYear'
                    placeholder='Enter Passout Year'
                    name={stdPassoutYear}
                  />
                  {formErrors.stdPassoutYear && (
                    <div className='invalid-feedback'>
                      {formErrors.stdPassoutYear}
                    </div>
                  )}
                </div>
              </div>

              <br />
              <h2 className='title'>Additional Details</h2>
              <div className={`radio-container mb-3 ${formError && !stdTriedStartupBefore ? 'has-error' : ''}`}>
                <p className='labelStyle'>Have you tried Startup before?</p>
                <label className='radio-label'>
                  <input
                    className={
                      formErrors.stdTriedStartupBefore ? "is-invalid" : ""
                    }
                    type='radio'
                    id='startupYes'
                    value='yes'
                    name='stdTriedStartupBefore'
                    checked={stdTriedStartupBefore === 'yes'}
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdTriedStartupBefore(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdTriedStartupBefore: validateRequired(value),
                    //   }));
                    // }}
                    onChange={(e) => stdTriedStartupBefore(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdTriedStartupBefore ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdTriedStartupBefore ? 'red' : '' }}>Yes</span>
                </label>
                <label className='radio-label'>
                  <input
                    className={
                      formErrors.stdTriedStartupBefore ? "is-invalid" : ""
                    }
                    type='radio'
                    id='startupNo'
                    value='no'
                    name='stdTriedStartupBefore'
                    checked={stdTriedStartupBefore === 'no'}
                    onChange={(e) => stdTriedStartupBefore(e.target.value)}
                    style={{ marginRight: 5 }}
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdTriedStartupBefore(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdTriedStartupBefore: validateRequired(value),
                    //   }));
                    // }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdTriedStartupBefore ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdTriedStartupBefore ? 'red' : '' }}>No</span>
                </label>
                <label className='radio-label'>
                  <input
                    className={
                      formErrors.stdTriedStartupBefore ? "is-invalid" : ""
                    }
                    type='radio'
                    id='startupPlanning'
                    value='planning'
                    name='stdTriedStartupBefore'
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdTriedStartupBefore(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdTriedStartupBefore: validateRequired(value),
                    //   }));
                    // }}
                    checked={stdTriedStartupBefore === 'planning'}
                    onChange={(e) => stdTriedStartupBefore(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdTriedStartupBefore ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdTriedStartupBefore ? 'red' : '' }}>Planning</span>
                </label>
                {/* {formErrors.stdTriedStartupBefore && (
                  <div className='invalid-feedback'>
                    {formErrors.stdTriedStartupBefore}
                  </div>
                )} */}
                {formError && !stdTriedStartupBefore && <div className='error-message' style={{ color: 'red' }}>This field is required</div>}
              </div>

              <div className={`radio-container mb-3 ${formError && !stdParentSupport ? 'has-error' : ''}`}>
                <p className='labelStyle'>
                  Do you need us to onboard your parents for their support?
                </p>
                <label className='radio-label'>
                  <input
                    className={formErrors.stdParentSupport ? "is-invalid" : ""}
                    type='radio'
                    id='parentSupportYes'
                    value='yes'
                    name='stdParentSupport'
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdParentSupport(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdParentSupport: validateRequired(value),
                    //   }));
                    // }}
                    checked={stdParentSupport === 'yes'}
                    onChange={(e) => stdParentSupport(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdParentSupport ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdParentSupport ? 'red' : '' }}>Yes</span>
                </label>
                <label className='radio-label'>
                  <input
                    className={formErrors.stdParentSupport ? "is-invalid" : ""}
                    type='radio'
                    id='parentSupportNo'
                    value='no'
                    name='stdParentSupport'
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdParentSupport(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdParentSupport: validateRequired(value),
                    //   }));
                    // }}
                    checked={stdParentSupport === 'no'}
                    onChange={(e) => stdParentSupport(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdParentSupport ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdParentSupport ? 'red' : '' }}>No</span>
                </label>
                {/* {formErrors.stdParentSupport && (
                  <div className='invalid-feedback'>
                    {formErrors.stdParentSupport}
                  </div>
                )} */}
                {formError && !stdParentSupport && <div className='error-message' style={{ color: 'red' }}>This field is required</div>}
              </div>

              <div className={`radio-container mb-3 ${formError && !stdEduLoan ? 'has-error' : ''}`}>
                <p className='labelStyle'>Have you taken Educational Loan?</p>
                <label className='radio-label'>
                  <input
                    className={formErrors.stdEduLoan ? "is-invalid" : ""}
                    type='radio'
                    id='eduLoanYes'
                    value='yes'
                    name='stdEduLoan'
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdEduLoan(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdEduLoan: validateRequired(value),
                    //   }));
                    // }}
                    checked={stdEduLoan === 'yes'}
                    onChange={(e) => stdEduLoan(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdEduLoan ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdEduLoan ? 'red' : '' }}>Yes</span>
                </label>
                <label className='radio-label'>
                  <input
                    className={formErrors.stdEduLoan ? "is-invalid" : ""}
                    type='radio'
                    id='eduLoanNo'
                    value='no'
                    name='stdEduLoan'
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdEduLoan(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdEduLoan: validateRequired(value),
                    //   }));
                    // }}
                    checked={stdEduLoan === 'no'}
                    onChange={(e) => stdEduLoan(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdEduLoan ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdEduLoan ? 'red' : '' }}>No</span>
                </label>
                {/* {formErrors.stdEduLoan && (
                  <div className='invalid-feedback'>
                    {formErrors.stdEduLoan}
                  </div>
                )} */}
                {formError && !stdEduLoan && <div className='error-message' style={{ color: 'red' }}>This field is required</div>}
              </div>

              <div className={`radio-container mb-3 ${formError && !stdEBC ? 'has-error' : ''}`}>
                <p className='labelStyle'>
                  Are you eligible for benefits provided to EBC(Economically
                  Backward Class)?
                </p>
                <label className='radio-label'>
                  <input
                    className={formErrors.stdEBC ? "is-invalid" : ""}
                    type='radio'
                    id='ebcYes'
                    value='yes'
                    name='stdEBC'
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdEBC(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdEBC: validateRequired(value),
                    //   }));
                    // }}
                    checked={stdEBC === 'yes'}
                    onChange={(e) => stdEBC(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdEBC ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdEBC ? 'red' : '' }}>Yes</span>
                </label>
                <label className='radio-label'>
                  <input
                    className={formErrors.stdEBC ? "is-invalid" : ""}
                    type='radio'
                    id='ebcNo'
                    value='no'
                    name='stdEBC'
                    // onChange={(e) => {
                    //   const value = e.target.value;
                    //   setStdEBC(value);
                    //   setFormErrors((prevErrors) => ({
                    //     ...prevErrors,
                    //     stdEBC: validateRequired(value),
                    //   }));
                    // }}
                    checked={stdEBC === 'no'}
                    onChange={(e) => stdEBC(e.target.value)}
                    style={{ marginRight: 5 }}
                  />
                  <span className='radio-custom' style={{ borderColor: formError && !stdEBC ? 'red' : '' }}></span>
                  <span style={{ color: formError && !stdEBC ? 'red' : '' }}>No</span>
                </label>
                {/* {formErrors.stdEBC && (
                  <div className='invalid-feedback'>{formErrors.stdEBC}</div>
                )} */}
                {formError && !stdEBC && <div className='error-message' style={{ color: 'red' }}>This field is required</div>}
              </div>
              <br />

              <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexcheckDefault'
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    style={{
                      height: 20,
                      padding: 0,
                      marginBottom: -8,
                      marginRight: 12,
                      width: 20,
                    }}
                  />
                  <label
                    className='form-check-label labelStyle'
                    htmlFor='flexCheckDefault'
                  >
                    I agree to all terms and conditions.
                  </label>
                  {formError && (
                <div className='col-12 mb-3'>
                  <div className='alert alert-danger'>{formError}</div>
                </div>
              )}
                </div>
              </div>

              <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit' disabled={loading}>
                  {loading ? (
                    <span>
                      <i className="fa fa-spinner fa-spin" /> Submitting...
                    </span>
                  ) : (
                    <span>Submit Now</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
