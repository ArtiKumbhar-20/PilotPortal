import React, { useState, useRef } from "react";
import axios from "axios";

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


  // Reset from after successfull submission
  const instituteForm = useRef(null);

  const sendInstituteDetails = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/institute_register/",
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
        instNBA
      },
    }).then((response) => {
      alert(`Thank you for submitting your details.`);
      console.log(response.data);
      instituteForm.current.reset();
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
                  className='form-select'>
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
                  className='form-select'>
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
                  className='form-select'>
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
              <h2 className='title'>Single Point of Contact (SPOC) Details</h2>
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
                  <label className='labelStyle'>Email</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instSPOCEmail}
                    onChange={(e) => setinstSPOCEmail(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Email'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instSPOCMobile}
                    onChange={(e) => setinstSPOCMobile(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Mobile Number'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instSPOCWhatsapp}
                    onChange={(e) => setinstSPOCWhatsapp(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Whatsapp Number'
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Website</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    name={instSPOCWeb}
                    onChange={(e) => setinstSPOCWeb(e.target.value)}
                    aria-describedby='emailHelp'
                    placeholder='Enter Website'
                  />
                </div>
              </div>
              <br />

              {/* Additional Details */}
              <h2 className='title'>Additional Details</h2>

              <div class='radio-container'>
                <p className='labelStyle'>
                  Does your institute have Incubator Support?
                </p>
                <label className='radio-label'>
                  <input 
                  type='radio' 
                  id='IncubYes'
                  value='yes'
                  name='instIncubator'
                  onChange={(e) => setinstIncubator(e.target.value)} />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label class='radio-label'>
                  <input 
                  type='radio' 
                  id='IncubNo'
                  value='no' 
                  name='instIncubator'                  
                  onChange={(e) => setinstIncubator(e.target.value)} />
                  <span class='radio-custom'></span>
                  No
                </label>
              </div>

              <div class='radio-container'>
                <p className='labelStyle'>
                  Does your institute have IIC-MoE Innovation Cell?
                </p>
                <label className='radio-label'>
                  <input type='radio' 
                  value='yes'
                  id='IICyes'
                  name='instIIC'
                  onChange={(e) => setinstIIC(e.target.value)}
                  />
                  <span class='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input type='radio'
                  value='no' 
                  id='IICno'
                  name='instIIC'
                  onChange={(e) => setinstIIC(e.target.value)}
                   />
                  <span class='radio-custom'></span>
                  No
                </label>
              </div>

              <div class='radio-container'>
                <p className='labelStyle'>
                  Does your institute have Entrepreneurship Development Cell?
                </p>
                <label className='radio-label'>
                  <input 
                  type='radio' 
                  value='yes' 
                  id='EDCyes'
                  name='instEDC'
                  onChange={(e) => setinstEDC(e.target.value)} />
                  <span class='radio-custom' ></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input type='radio' 
                  value='no' 
                  id='EDCno'
                  name='instEDC'
                  onChange={(e) => setinstEDC(e.target.value)}/>
                  <span class='radio-custom' ></span>
                  No
                </label>
              </div>
              <br />
              <br />

              {/* Ranking details */}
              <h2 className='title'>Institute Ranking Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>
                    Does your institute have ARIIA (Atal Ranking of Institutions
                    on Innovation Achievements) Ranking
                  </label>
                  <select 
                  name={instARIIA}
                  onChange={(e) => setinstARIIA(e.target.value)}
                  className='form-select'>
                    <option selected disabled>
                      Select ARIIA Ranking
                    </option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='4'>Four</option>
                    <option value='5'>Five</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>
                    Does your institute have NAAC (National Assessment And
                    Accrediation Council) Ranking
                  </label>
                  <select 
                  name={instNAAC}
                  onChange={(e) => setinstNAAC(e.target.value)}
                  className='form-select'>
                    <option selected disabled>
                      Select NAAC Ranking
                    </option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='4'>Four</option>
                    <option value='5'>Five</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>
                    Does your institute have NIRF (National Institutional
                    Ranking Framework) Ranking
                  </label>
                  <select 
              
                  name={instNIRF}
                  onChange={(e) => setinstNIRF(e.target.value)}
                  className='form-select'>
                    <option selected disabled style={{ opacity: "5" }}>
                      Select NIRF Ranking
                    </option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='4'>Four</option>
                    <option value='5'>Five</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>
                    Does your institute have NBA (National Board of
                    Accrediation) Ranking
                  </label>
                  <select 
                  
                  name={instNBA}
                  onChange={(e) => setinstNBA(e.target.value)}
                  className='form-select'>
                    <option selected disabled>
                      Select NBA Ranking
                    </option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                    <option value='4'>Four</option>
                    <option value='5'>Five</option>
                  </select>
                  {/* <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='NBA Ranking'
                  /> */}
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
                  />
                    {/* Terms and Conditions */}
                  <label
                    className='form-check-label labelStyle'
                    htmlFor='flexCheckDefault'
                  >
                    I agree to all terms and conditions.
                  </label>
                </div>
              </div>

                {/* Submit */}

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
 