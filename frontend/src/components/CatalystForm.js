import React, { useState, useRef } from "react";
import axios from "axios";
import {
  validateRequired,
  validateEmail,
  validateAadhar,
  validateMobile,
  validatePincode,
} from "./formValidator";
import config from "./config";
const apiUrl = `${config.backendUrl}/catalyst_register/`; // Construct Backend API URL

export const CatalystForm = () => {
  const [catalystInstiID, setCatalystInstiID] = useState("");
  const [catalystFname, setCatalystFname] = useState("");
  const [catalystLname, setCatalystLname] = useState("");
  const [catalystEmail, setCatalystEmail] = useState("");
  const [catalystMobile, setCatalystMobile] = useState("");
  const [catalystWhatsapp, setCatalystWhatsapp] = useState("");
  const [catalystYear, setCatalystYear] = useState("");
  const [catalystStreamBranch, setCatalystStreamBranch] = useState("");
  const [catalystGender, setCatalystGender] = useState("");
  const [catalystDOB, setCatalystDOB] = useState("");
  const [catalystTriedStartupBefore, setCatalystTriedStartupBefore] =
    useState("");
  const [catalystFamilyBackground, setCatalystFamilyBackground] = useState("");
  const [catalystEBC, setCatalystEBC] = useState("");
  const [catalystAadhar, setCatalystAadhar] = useState("");
  const [catalystAddress, setCatalystAddress] = useState("");
  const [catalystPin, setCatalystPin] = useState("");
  const [catalystCity, setCatalystCity] = useState("");
  const [catalystTaluka, setCatalystTaluka] = useState("");
  const [catalystDist, setCatalystDist] = useState("");
  const [catalystState, setCatalystState] = useState("");
  const [catalystCountry, setCatalystCountry] = useState("");
  const [catalystBelongsTo, setCatalystBelongsTo] = useState("");
  // const [catalystInstiName, setCatalystInstiName] = useState("");
  const [catalystType, setCatalystType] = useState("");

  // State to hold form field errors
  // Step 2: For Validation

  const [formErrors, setFormErrors] = useState({
    catalystFname: "",
    catalystLname: "",
    catalystEmail: "",
    catalystMobile: "",
    catalystWhatsapp: "",
    catalystYear: "",
    catalystStreamBranch: "",
    catalystGender: "",
    catalystDOB: "",
    catalystTriedStartupBefore: "",
    catalystFamilyBackground: "",
    catalystEBC: "",
    catalystAadhar: "",
    catalystAddress: "",
    catalystPin: "",
    catalystCity: "",
    catalystTaluka: "",
    catalystDist: "",
    catalystState: "",
    catalystCountry: "",
    catalystBelongsTo: "",
    // catalystInstiName: "",
    catalystInstiID: "",
    catalystType: "",
  });

  // Reset from after successfull submission
  const catalystForm = useRef(null);

  const sendCatalystDetails = (event) => {
    event.preventDefault();

    // Step 3: For Validation
    const newFormErrors = {
      catalystFname: validateRequired(catalystFname),
      catalystLname: validateRequired(catalystLname),
      catalystEmail: validateRequired(catalystEmail),
      catalystMobile: validateRequired(catalystMobile),
      catalystWhatsapp: validateRequired(catalystWhatsapp),
      catalystYear: validateRequired(catalystYear),
      catalystStreamBranch: validateRequired(catalystStreamBranch),
      catalystGender: validateRequired(catalystGender),
      catalystDOB: validateRequired(catalystDOB),
      catalystTriedStartupBefore: validateRequired(catalystTriedStartupBefore),
      catalystFamilyBackground: validateRequired(catalystFamilyBackground),
      catalystEBC: validateRequired(catalystEBC),
      catalystAadhar: validateRequired(catalystAadhar),
      catalystAddress: validateRequired(catalystAddress),
      catalystPin: validateRequired(catalystPin),
      catalystCity: validateRequired(catalystCity),
      catalystTaluka: validateRequired(catalystTaluka),
      catalystDist: validateRequired(catalystDist),
      catalystState: validateRequired(catalystState),
      catalystCountry: validateRequired(catalystCountry),
      catalystBelongsTo: validateRequired(catalystBelongsTo),
      // catalystInstiName: validateRequired(catalystInstiName),
      catalystInstiID: validateRequired(catalystInstiID),
      catalystType: validateRequired(catalystType),
    };
    // Step 4: For Validation : Will Not Change
    setFormErrors(newFormErrors);

    // Step 5: For Validation : If statement
    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      axios({
        method: "post",
        url: apiUrl,
        data: {
          catalystInstiID,
          catalystFname,
          catalystLname,
          catalystEmail,
          catalystMobile,
          catalystWhatsapp,
          catalystYear,
          catalystStreamBranch,
          catalystGender,
          catalystDOB,
          catalystTriedStartupBefore,
          catalystFamilyBackground,
          catalystEBC,
          catalystAadhar,
          catalystAddress,
          catalystPin,
          catalystCity,
          catalystTaluka,
          catalystDist,
          catalystState,
          catalystCountry,
          catalystBelongsTo,
          // catalystInstiName,
          catalystType,
        },
      }).then((response) => {
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        //catalystForm.current.reset();
        //catalystForm.current.reset();
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
              ref={catalystForm}
              onSubmit={sendCatalystDetails}
            >
              {/*Title*/}
              <h2 className='title'>Profile Details (Catalyst) </h2>
              {/* row 1 */}
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystFname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystFname: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.catalystFname ? "is-invalid" : "")
                    }
                    placeholder='Enter First Name'
                    name={catalystFname}
                  />
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.catalystFname && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystFname}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystLname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystLname: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.catalystLname ? "is-invalid" : "")
                    }
                    placeholder='Enter First Name'
                    name={catalystLname}
                  />
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.catalystLname && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystLname}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Date of birth</label>
                  <input
                    type='date'
                    className={
                      "form-control " +
                      (formErrors.catalystDOB ? "is-invalid" : "")
                    }
                    name={catalystDOB}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystDOB(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystDOB: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.catalystDOB && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystDOB}
                    </div>
                  )}
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Gender</label>
                  <br />
                  <br />
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio1'>
                      <input
                        className={
                          "form-check-inputt " +
                          (formErrors.catalystGender ? "is-invalid" : "")
                        }
                        type='radio'
                        // name='inlineRadioOptions'
                        id='catalystGender'
                        value='male'
                        style={{ height: 20 }}
                        name={catalystGender}
                        onChange={(e) => {
                          const value = e.target.value;
                          setCatalystGender(value);
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            catalystGender: validateRequired(value),
                          }));
                        }}
                      />
                      Male
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      <input
                        className={
                          "form-check-inputt " +
                          (formErrors.catalystGender ? "is-invalid" : "")
                        }
                        type='radio'
                        // name='inlineRadioOptions'
                        id='catalystGender'
                        value='female'
                        style={{ height: 20 }}
                        name={catalystGender}
                        onChange={(e) => {
                          const value = e.target.value;
                          setCatalystGender(value);
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            catalystGender: validateRequired(value),
                          }));
                        }}
                      />
                      Female
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      <input
                        className={
                          "form-check-inputt " +
                          (formErrors.catalystGender ? "is-invalid" : "")
                        }
                        type='radio'
                        // name='inlineRadioOptions'
                        id='catalystGender'
                        value='other'
                        style={{ height: 20 }}
                        name={catalystGender}
                        onChange={(e) => {
                          const value = e.target.value;
                          setCatalystGender(value);
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            catalystGender: validateRequired(value),
                          }));
                        }}
                      />
                      Other
                    </label>
                  </div>
                  {formErrors.catalystGender && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystGender}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystMobile(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystMobile: validateMobile(value),
                      }));
                    }}
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystMobile ? "is-invalid" : "")
                    }
                    placeholder='Enter Mobile Number'
                    name={catalystMobile}
                  />
                  {formErrors.catalystMobile && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystMobile}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystWhatsapp(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystWhatsapp: validateMobile(value),
                      }));
                    }}
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystWhatsapp ? "is-invalid" : "")
                    }
                    placeholder='Enter Whatsapp Number'
                    name={catalystWhatsapp}
                  />
                  {formErrors.catalystWhatsapp && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystWhatsapp}
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
                      (formErrors.catalystEmail ? "is-invalid" : "")
                    }
                    placeholder='Enter Email'
                    name={catalystEmail}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystEmail(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystEmail: validateEmail(value),
                      }));
                    }}
                  />
                  {formErrors.catalystEmail && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystEmail}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Aadhar Number</label>
                  <input
                    type='text'
                    className={
                      "form-control " +
                      (formErrors.catalystAadhar ? "is-invalid" : "")
                    }
                    maxLength={12}
                    id='catalystAadhar'
                    placeholder='Enter Adhar Number'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    name={catalystAadhar}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystAadhar(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystAadhar: validateAadhar(value),
                      }));
                    }}
                  />
                  {formErrors.catalystAadhar && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystAadhar}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Catalyst Type</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.catalystType ? "is-invalid" : "")
                    }
                    name={catalystType}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystType(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystType: validateRequired(value),
                      }));
                    }}
                  >
                    <option select disabled>
                      Select your Catalyst Type
                    </option>
                    <option value='1'>Student</option>
                    <option value='2'>Faculty</option>
                    <option value='2'>Corporate</option>
                    <option value='2'>Volunteer</option>
                  </select>
                  {formErrors.catalystType && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystType}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle' style={{ fontSize: "19px" }}>
                    Family Socio-Economic Background
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.catalystFamilyBackground ? "is-invalid" : "")
                    }
                    name={catalystFamilyBackground}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystFamilyBackground(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystFamilyBackground: validateRequired(value),
                      }));
                    }}
                  >
                    <option select disabled>
                      Select your Socio-Economic Background
                    </option>
                    <option value='1'>Upper Class</option>
                    <option value='2'>Middle Upper Class</option>
                    <option value='2'>Middle Lower Class</option>
                    <option value='2'>Lower Class</option>
                  </select>
                  {formErrors.catalystFamilyBackground && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystFamilyBackground}
                    </div>
                  )}
                </div>
              </div>
              <br />
              <br />

              {/*Residential Address*/}
              <h2 className='title'>Your Current Communication Address</h2>

              <div className='row'>
                {/* row 1 */}
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Address</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystAddress(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystAddress: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystAddress ? "is-invalid" : "")
                    }
                    id='catalystAddress'
                    placeholder='Flat, House no., Building, Company, Apartment'
                    name={catalystAddress}
                  />
                  {formErrors.catalystAddress && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystAddress}
                    </div>
                  )}
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>City</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystCity(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystCity: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystCity ? "is-invalid" : "")
                    }
                    id='catalystCity'
                    placeholder='Enter City'
                    name={catalystCity}
                  />
                  {formErrors.catalystCity && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystCity}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Taluka</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystTaluka(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystTaluka: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystTaluka ? "is-invalid" : "")
                    }
                    id='catalystTaluka'
                    placeholder='Enter Taluka'
                    name={catalystTaluka}
                  />
                  {formErrors.catalystTaluka && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystTaluka}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>District</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystDist(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystDist: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystDist ? "is-invalid" : "")
                    }
                    id='catalystDist'
                    placeholder='Enter District'
                    name={catalystDist}
                  />
                  {formErrors.catalystDist && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystDist}
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
                      setCatalystState(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystState: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-select " +
                      (formErrors.catalystState ? "is-invalid" : "")
                    }
                    id='catalystState'
                    placeholder='Enter State'
                    name={catalystState}
                  >
                    <option selected disabled>
                      Select State
                    </option>
                    <option value='Maharashtra'>Maharashtra</option>
                  </select>
                  {formErrors.catalystState && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystState}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Country</label>
                  <select
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystCountry(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystCountry: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-select " +
                      (formErrors.catalystCountry ? "is-invalid" : "")
                    }
                    id='catalystCountry'
                    placeholder='Enter Country'
                    name={catalystCountry}
                  >
                    <option selected disabled>
                      Select Country
                    </option>
                    <option value='India'>India</option>
                  </select>
                  {formErrors.catalystCountry && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystCountry}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Pincode</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystPin(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystPin: validatePincode(value),
                      }));
                    }}
                    maxLength={6}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystPin ? "is-invalid" : "")
                    }
                    id='catalystPin'
                    placeholder='Enter Pincode'
                    name={catalystPin}
                  />
                  {formErrors.catalystPin && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystPin}
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
                      (formErrors.catalystBelongsTo ? "is-invalid" : "")
                    }
                    name={catalystBelongsTo}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystBelongsTo(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystBelongsTo: validateRequired(value),
                      }));
                    }}
                  >
                    <option select disabled>
                      You Belong To
                    </option>
                    <option value='1'>Tier 1 City</option>
                    <option value='2'>Tier 2 City</option>
                    <option value='3'>Urban</option>
                    <option value='4'>Semi-Urban City</option>
                    <option value='5'>Rural</option>
                    <option value='6'>Remote Area</option>
                    <option value='7'>Tribal Area</option>
                  </select>
                  {formErrors.catalystBelongsTo && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystBelongsTo}
                    </div>
                  )}
                </div>
              </div>

              {/* Academic Details */}
              <h2 className='title'>Academic Details</h2>

              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.catalystInstiID ? "is-invalid" : "")
                    }
                    name={catalystInstiID}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystInstiID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystInstiID: validateRequired(value),
                      }));
                    }}
                  >
                    <option select disabled>
                      Select Institute
                    </option>
                    <option value='1'>ABC</option>
                    <option value='2'>XYZ</option>
                  </select>
                  {formErrors.catalystInstiID && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystInstiID}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Stream</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystStreamBranch(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystStreamBranch: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystStreamBranch ? "is-invalid" : "")
                    }
                    id='catalystStreamBranch'
                    placeholder='Enter Stream'
                    name={catalystStreamBranch}
                  />
                  {formErrors.catalystStreamBranch && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystStreamBranch}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Pass Out Year</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystYear(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystYear: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.catalystYear ? "is-invalid" : "")
                    }
                    id='catalystYear'
                    placeholder='Enter Passout Year'
                    name={catalystYear}
                  />
                  {formErrors.catalystYear && (
                    <div className='invalid-feedback'>
                      {formErrors.catalystYear}
                    </div>
                  )}
                </div>
              </div>

              {/* Background Details */}
              <h2 className='title'>Background Details</h2>
              <div className='radio-container'>
                <p className='labelStyle'>Have you tried startup before?</p>
                <label className='radio-label'>
                  <input
                    className={
                      formErrors.catalystTriedStartupBefore ? "is-invalid" : ""
                    }
                    type='radio'
                    id='startupYes'
                    value='yes'
                    name='catalystTriedStartupBefore'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystTriedStartupBefore(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystTriedStartupBefore: validateRequired(value),
                      }));
                    }}
                  />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input
                    className={
                      formErrors.catalystTriedStartupBefore ? "is-invalid" : ""
                    }
                    type='radio'
                    id='startupNo'
                    value='no'
                    name='catalystTriedStartupBefore'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystTriedStartupBefore(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystTriedStartupBefore: validateRequired(value),
                      }));
                    }}
                  />
                  <span className='radio-custom'></span>
                  No
                </label>
                <label className='radio-label'>
                  <input
                    className={
                      formErrors.catalystTriedStartupBefore ? "is-invalid" : ""
                    }
                    type='radio'
                    id='startupPlanning'
                    value='planning'
                    name='catalystTriedStartupBefore'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystTriedStartupBefore(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystTriedStartupBefore: validateRequired(value),
                      }));
                    }}
                  />
                  <span className='radio-custom'></span>
                  Planning
                </label>
                {formErrors.catalystTriedStartupBefore && (
                  <div className='invalid-feedback'>
                    {formErrors.catalystTriedStartupBefore}
                  </div>
                )}
              </div>

              <div className='radio-container'>
                <p className='labelStyle'>
                  Are you eligible for benefits provided to EBC(Economically
                  Backward Class)?
                </p>
                <label className='radio-label'>
                  <input
                    className={formErrors.catalystEBC ? "is-invalid" : ""}
                    type='radio'
                    id='ebcYes'
                    value='yes'
                    name='catalystEBC'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystEBC(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystEBC: validateRequired(value),
                      }));
                    }}
                  />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input
                    className={formErrors.catalystEBC ? "is-invalid" : ""}
                    type='radio'
                    id='parentSupportNo'
                    value='no'
                    name='catalystEBC'
                    onChange={(e) => {
                      const value = e.target.value;
                      setCatalystEBC(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        catalystEBC: validateRequired(value),
                      }));
                    }}
                  />
                  <span className='radio-custom'></span>
                  No
                </label>
                {formErrors.catalystEBC && (
                  <div className='invalid-feedback'>
                    {formErrors.catalystEBC}
                  </div>
                )}
              </div>
              <br />

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
                  />
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
                  <span>Submit Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
