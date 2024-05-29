import React, { useState, useRef } from "react";
import axios from "axios";
import config from "./config";
const apiUrl = `${config.backendUrl}/institute_register/`; // Construct Backend API URL

export const InstantForm = () => {
  const [instName, setinstName] = useState("");
  const [instType, setinstType] = useState("");
  const [instStream, setinstStream] = useState("");
  const [instNoOfStudents, setinstNoOfStudents] = useState("");
  const [instAddress, setinstAddress] = useState("");
  const [instPin, setinstPin] = useState("");
  const [instCity, setinstCity] = useState("");
  const [instTaluka, setinstTaluka] = useState("");
  const [instDist, setinstDist] = useState("");
  const [instState, setinstState] = useState("");
  const [instCountry, setinstCountry] = useState("");
  const [instSPOCFname, setinstSPOCFname] = useState("");
  const [instSPOCLname, setinstSPOCLname] = useState("");
  const [instSPOCEmail, setinstSPOCEmail] = useState("");
  const [instSPOCMobile, setinstSPOCMobile] = useState("");
  const [instSPOCWhatsapp, setinstSPOCWhatsapp] = useState("");
  const [instSPOCWeb, setinstSPOCWeb] = useState("");
  const [instIncubator, setinstIncubator] = useState("");
  const [instEDC, setinstEDC] = useState("");
  const [instIIC, setinstIIC] = useState("");
  const [instARIIA, setinstARIIA] = useState("");
  const [instNIRF, setinstNIRF] = useState("");
  const [instNAAC, setinstNAAC] = useState("");
  const [instNBA, setinstNBA] = useState("");

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState("");

  const instituteForm = useRef(null);

  const sendInstituteDetails = (event) => {
    event.preventDefault();

    if (!agreeTerms) {
      setFormError("You must agree to the terms and conditions.");
      return;
    }

    axios({
      method: "post",
      url: apiUrl,
      data: {
        instName,
        instType,
        instStream,
        instNoOfStudents,
        instAddress,
        instPin,
        instCity,
        instTaluka,
        instDist,
        instState,
        instCountry,
        instSPOCFname,
        instSPOCLname,
        instSPOCEmail,
        instSPOCMobile,
        instSPOCWhatsapp,
        instSPOCWeb,
        instIncubator,
        instEDC,
        instIIC,
        instARIIA,
        instNIRF,
        instNAAC,
        instNBA,
      },
    })
      .then((response) => {
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        instituteForm.current.reset();
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
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
              ref={instituteForm}
              onSubmit={sendInstituteDetails}
            >
              {/* Title */}
              <h2 className='title'>Institute Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instName}
                    onChange={(e) => setinstName(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Institute Name'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute Type</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instType}
                    onChange={(e) => setinstType(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Institute Type'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute Stream</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instStream}
                    onChange={(e) => setinstStream(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Institute Stream'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>No. of Students</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instNoOfStudents}
                    onChange={(e) => setinstNoOfStudents(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter No. of Students'
                  />
                </div>
              </div>
              <br />
              <h2 className='title'>Institute Address</h2>
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Institute Address</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instAddress}
                    onChange={(e) => setinstAddress(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Institute Address'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>City</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instCity}
                    onChange={(e) => setinstCity(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter City'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Taluka</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instTaluka}
                    onChange={(e) => setinstTaluka(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Taluka'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>District</label>
                  <select
                    name={instDist}
                    onChange={(e) => setinstDist(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select District
                    </option>
                    <option value='1'>Nashik</option>
                    <option value='2'>Pune</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>State</label>
                  <select
                    name={instState}
                    onChange={(e) => setinstState(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select State
                    </option>
                    <option value='1'>Maharashtra</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Country</label>
                  <select
                    name={instCountry}
                    onChange={(e) => setinstCountry(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select Country
                    </option>
                    <option value='1'>India</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Pincode</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instPin}
                    onChange={(e) => setinstPin(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Pincode'
                  />
                </div>
              </div>
              <br />
              <h2 className='title'>SPOC Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instSPOCFname}
                    onChange={(e) => setinstSPOCFname(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter First Name'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instSPOCLname}
                    onChange={(e) => setinstSPOCLname(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Last Name'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Email Address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name={instSPOCEmail}
                    onChange={(e) => setinstSPOCEmail(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Email Address'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='text'
                    className='form-control'
                    id='mobile'
                    name={instSPOCMobile}
                    onChange={(e) => setinstSPOCMobile(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Mobile Number'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='text'
                    className='form-control'
                    id='whatsapp'
                    name={instSPOCWhatsapp}
                    onChange={(e) => setinstSPOCWhatsapp(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Whatsapp Number'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Website</label>
                  <input
                    type='text'
                    className='form-control'
                    id='website'
                    name={instSPOCWeb}
                    onChange={(e) => setinstSPOCWeb(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Website URL'
                  />
                </div>
              </div>
              <br />
              <h2 className='title'>Accreditations</h2>
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incubator</label>
                  <select
                    name={instIncubator}
                    onChange={(e) => setinstIncubator(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select Incubator
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>EDC</label>
                  <select
                    name={instEDC}
                    onChange={(e) => setinstEDC(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select EDC
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IIC</label>
                  <select
                    name={instIIC}
                    onChange={(e) => setinstIIC(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select IIC
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>ARIIA</label>
                  <select
                    name={instARIIA}
                    onChange={(e) => setinstARIIA(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select ARIIA
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>NIRF</label>
                  <select
                    name={instNIRF}
                    onChange={(e) => setinstNIRF(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select NIRF
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>NAAC</label>
                  <select
                    name={instNAAC}
                    onChange={(e) => setinstNAAC(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select NAAC
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>NBA</label>
                  <select
                    name={instNBA}
                    onChange={(e) => setinstNBA(e.target.value)}
                    className='form-select'
                  >
                    <option selected disabled>
                      Select NBA
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
              </div>
              <br />
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='termsCheckbox'
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
                <label className='form-check-label' htmlFor='termsCheckbox'>
                  Agree to terms and conditions
                </label>
              </div>
              {formError && (
                <div className='col-12 mb-3'>
                  <div className='alert alert-danger'>{formError}</div>
                </div>
              )}
              <br />
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
