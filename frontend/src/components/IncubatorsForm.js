import React, { useState, useRef } from "react";
import axios from "axios";
import config from "./config";
const apiUrl = `${config.backendUrl}/incubators/`; // Construct Backend API URL

export const IncubatorsForm = () => {
  const [incuName, setincuName] = useState("");
  const [incuType, setincuType] = useState("");
  const [incuFundAvailable, setincuFundAvailable] = useState("");
  const [incuAddress, setincuAddress] = useState("");
  const [incuPin, setincuPin] = useState("");
  const [incuCity, setincuCity] = useState("");
  const [incuTaluka, setincuTaluka] = useState("");
  const [incuDist, setincuDist] = useState("");
  const [incuState, setincuState] = useState("");
  const [incuCountry, setincuCountry] = useState("");
  const [incuSPOCFname, setincuSPOCFname] = useState("");
  const [incuSPOCLname, setincuSPOCLname] = useState("");
  const [incuSPOCMobile, setincuSPOCMobile] = useState("");
  const [incuSPOCWhatsapp, setincuSPOCWhatsapp] = useState("");
  const [incuSPOCEmail, setincuSPOCEmail] = useState("");
  const [incuSPOCWeb, setincuSPOCWeb] = useState("");
  const [incuSupportedBy, setincuSupportedBy] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState("");

  // Reset from after successfull submission
  const incubatorForm = useRef(null);

  const sendIncubatorsDetails = (event) => {
    event.preventDefault();

    if (!agreeTerms) {
      setFormError("You must agree to the terms and conditions.");
      return;
    }

    axios({
      method: "post",
      url: apiUrl,
      data: {
        // incuID,
        incuName,
        incuType,
        incuFundAvailable,
        incuAddress,
        incuPin,
        incuCity,
        incuTaluka,
        incuDist,
        incuState,
        incuCountry,
        incuSPOCFname,
        incuSPOCLname,
        incuSPOCMobile,
        incuSPOCWhatsapp,
        incuSPOCEmail,
        incuSPOCWeb,
        incuSupportedBy,
      },
    }).then((response) => {
      alert(`Thank you for submitting your details.`);
      console.log(response.data);
      incubatorForm.current.reset();
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
              ref={incubatorForm}
              onSubmit={sendIncubatorsDetails}
            >
              <h2 className='title'>Incubators Form</h2>
              {/* incubators form */}
              <div className='row'>
                {/* row 1 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incubator Name</label>
                  <input
                    type='name'
                    className='form-control'
                    name={incuName}
                    onChange={(e) => setincuName(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Incubator Name'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incubator Type</label>
                  <select
                    className='form-select'
                    name={incuType}
                    onChange={(e) => setincuType(e.target.value)}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Type1</option>
                    <option value='2'>Type2</option>
                  </select>
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incubator Supported By</label>
                  <select
                    className='form-select'
                    name={incuSupportedBy}
                    onChange={(e) => setincuSupportedBy(e.target.value)}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Type1</option>
                    <option value='2'>Type2</option>
                  </select>
                </div>

                {/* Radio button field */}
<div className={`radio-container mb-3 ${formError && !incuFundAvailable ? 'has-error' : ''}`}>
  <p className='labelStyle'>
    Does your incubator have funds to support student startups?
  </p>
  <label className='radio-label'>
    <input
      type='radio'
      value='yes'
      id='FundYes'
      name='incuFundAvailable'
      checked={incuFundAvailable === 'yes'}
      onChange={(e) => setincuFundAvailable(e.target.value)}
      style={{ marginRight: 5 }}
    />
    <span className='radio-custom' style={{ borderColor: formError && !incuFundAvailable ? 'red' : '' }}></span>
    <span style={{ color: formError && !incuFundAvailable ? 'red' : '' }}>Yes</span>
  </label>
  <label className='radio-label'>
    <input
      type='radio'
      value='no'
      id='FundNo'
      name='incuFundAvailable'
      checked={incuFundAvailable === 'no'}
      onChange={(e) => setincuFundAvailable(e.target.value)}
      style={{ marginRight: 5 }}
    />
    <span className='radio-custom' style={{ borderColor: formError && !incuFundAvailable ? 'red' : '' }}></span>
    <span style={{ color: formError && !incuFundAvailable ? 'red' : '' }}>No</span>
  </label>
  {formError && !incuFundAvailable && <div className='error-message' style={{ color: 'red' }}>This field is required</div>}
</div>


                {/* row 3 */}
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Incubation Address</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuAddress'
                    name={incuAddress}
                    onChange={(e) => setincuAddress(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Incubation Address'
                  />
                </div>

                {/* row 4 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>City</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuCity'
                    name={incuCity}
                    onChange={(e) => setincuCity(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter City'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Taluka</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuTaluka'
                    name={incuTaluka}
                    onChange={(e) => setincuTaluka(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Taluka'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>District</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuDist'
                    name={incuDist}
                    onChange={(e) => setincuDist(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter District'
                  />
                </div>

                {/* row 5 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>State</label>
                  <select
                    name={incuState}
                    onChange={(e) => setincuState(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Maharashtra</option>
                    <option value='2'>Madhya Pradesh</option>
                    <option value='2'>Telangana</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Country</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuCountry'
                    name={incuCountry}
                    onChange={(e) => setincuCountry(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Country'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Pincode</label>
                  <input
                    type='number'
                    className='form-control'
                    id='incuPin'
                    name={incuPin}
                    onChange={(e) => setincuPin(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Pincode'
                  />
                </div>

                {/* SPOC Details */}
                <h2 className='title'>
                  Single Point of Contact (SPOC) Details
                </h2>
                {/* row 1 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuSPOCFname'
                    name={incuSPOCFname}
                    onChange={(e) => setincuSPOCFname(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter First Name'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuSPOCLname'
                    name={incuSPOCLname}
                    onChange={(e) => setincuSPOCLname(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Last Name'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='incuSPOCEmail'
                    name={incuSPOCEmail}
                    onChange={(e) => setincuSPOCEmail(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Email'
                  />
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='number'
                    className='form-control'
                    id='incuSPOCMobile'
                    name={incuSPOCMobile}
                    onChange={(e) => setincuSPOCMobile(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Mobile Number'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>WhatsApp Number</label>
                  <input
                    type='number'
                    className='form-control'
                    id='incuSPOCWhatsapp'
                    name={incuSPOCWhatsapp}
                    onChange={(e) => setincuSPOCWhatsapp(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter WhatsApp Number'
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Website</label>
                  <input
                    type='name'
                    className='form-control'
                    id='incuSPOCWeb'
                    name={incuSPOCWeb}
                    onChange={(e) => setincuSPOCWeb(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Website'
                  />
                </div>
              </div>

              {/* agree terms and condition */}
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
                </div>
                {formError && (
                <div className='col-12 mb-3'>
                  <div className='alert alert-danger'>{formError}</div>
                </div>
              )}
              </div>

              {/* submit */}
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
