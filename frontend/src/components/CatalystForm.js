import React, { useState, useRef } from "react";
import axios from "axios";


export const CatalystForm = () => {
  
 // const [catalystInstiID, setCatalystInstiID] = useState("");
  const [catalystFname, setCatalystFname] = useState("");
  const [catalystLname, setCatalystLname] = useState("");
  const [catalystEmail, setCatalystEmail] = useState("");
  const [catalystMobile, setCatalystMobile] = useState("");
  const [catalystWhatsapp, setCatalystWhatsapp] = useState("");
  const [catalystYear, setCatalystYear] = useState("");
  const [catalystStreamBranch, setCatalystStreamBranch] = useState("");
  const [catalystGender, setCatalystGender] = useState("");
  const [catalystDOB, setCatalystDOB] = useState("");
  const [catalystTriedStartupBefore , setCatalystTriedStartupBefore ] = useState("");
  const [catalystFamilyBackground , setCatalystFamilyBackground ] = useState("");
  const [catalystEBC, setCatalystEBC] = useState("");
  const [catalystAadhar, setCatalystAadhar] = useState("");
  const [catalystAddress, setCatalystAddress] = useState("");
  const [catalystPin, setCatalystPin] = useState("");
  const [catalystCity, setCatalystCity] = useState("");
  const [catalystTaluka , setCatalystTaluka ] = useState("");
  const [catalystDist, setCatalystDist] = useState("");
  const [catalystState, setCatalystState] = useState("");
  const [catalystCountry, setCatalystCountry] = useState("");
  const [catalystBelongsTo, setCatalystBelongsTo] = useState("");


  // State to hold form field errors
  

  // Reset from after successfull submission
  const catalystForm = useRef(null);

  const sendCatalystDetails = (event) => {
    event.preventDefault();

    

    

    
      axios({
        method: "post",
        url: "http://localhost:8000/catalyst_register/",
        data: {
         // catalystInstiID,
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
        },
      }).then((response) => {
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
       // catalystForm.current.reset();
        //catalystForm.current.reset();
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
                    className='form-control'
                    id='catalystFname'
                    aria-describedby='emailHelp'
                    placeholder='Enter First Name'
                    name={catalystFname}
                    onChange={(e) => 
                      setCatalystFname(e.target.value)}
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='catalystLname'
                    aria-describedby='emailHelp'
                    placeholder='Enter Last Name'
                    name={catalystLname}
                    onChange={(e) => setCatalystLname(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Date of birth</label>
                  <input
                    type='date'
                    className='form-control'
                    id='catalystDOB'
                    required
                    name={catalystDOB}
                    onChange={(e) => setCatalystDOB(e.target.value)}
                  />
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Gender</label>
                  <br />
                  <br />
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio1'>
                      <input
                        className='form-check-inputt'
                        type='radio'
                       // name='inlineRadioOptions'
                        id='catalystGender'
                        value='option1'
                        style={{ height: 20 }}
                        name={catalystGender}
                    onChange={(e) => setCatalystGender(e.target.value)}
                      />
                      Male
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      <input
                        className='form-check-inputt'
                        type='radio'
                       // name='inlineRadioOptions'
                        id='catalystGender'
                        value='option2'
                        style={{ height: 20 }}
                        name={catalystGender}
                    onChange={(e) => setCatalystGender(e.target.value)}
                      />
                      Female
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      <input
                        className='form-check-inputt'
                        type='radio'
                      //  name='inlineRadioOptions'
                        id='catalystGender'
                        value='option2'
                        style={{ height: 20 }}
                        name={catalystGender}
                    onChange={(e) => setCatalystGender(e.target.value)}
                      />
                      Other
                    </label>
                  </div>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='number'
                    className='form-control'
                    id='catalystMobile'
                    required
                    placeholder='Enter Mobile Number'
                    name={catalystMobile}
                    onChange={(e) => setCatalystMobile(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='number'
                    className='form-control'
                    id='catalystWhatsapp'
                    required
                    placeholder='Enter Whatsapp Number'
                    name={catalystWhatsapp}
                    onChange={(e) => setCatalystWhatsapp(e.target.value)}
                  />
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='catalystEmail'
                    required
                    placeholder='Enter Email Address'
                    name={catalystEmail}
                    onChange={(e) => setCatalystEmail(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Aadhar Number</label>
                  <input
                    type='number'
                    className='form-control'
                    id='catalystAadhar'
                    required
                    placeholder='Enter Aadhar Number'
                    name={catalystAadhar}
                    onChange={(e) => setCatalystAadhar(e.target.value)}
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Catalyst Type</label>
                  <select className='form-select'
                   name={catalystGender}
                   onChange={(e) => setCatalystGender(e.target.value)}>
                    <option select disabled>
                      Select your Catalyst Type
                    </option>
                    <option value='1'>Student</option>
                    <option value='2'>Faculty</option>
                    <option value='2'>Corporate</option>
                    <option value='2'>Volunteer</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle' style={{ fontSize: "19px" }}>
                    Family Socio-Economic Background
                  </label>
                  <select className='form-select'
                   name={catalystFamilyBackground}
                   onChange={(e) => setCatalystFamilyBackground(e.target.value)}>
                    <option select disabled>
                      Select your Socio-Economic Background
                    </option>
                    <option value='1'>Upper Class</option>
                    <option value='2'>Middle Upper Class</option>
                    <option value='2'>Middle Lower Class</option>
                    <option value='2'>Lower Class</option>
                  </select>
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
                    className='form-control'
                    id='catalystAddress'
                    placeholder='Flat, House no., Building, Company, Apartment'
                    name={catalystAddress}
                    onChange={(e) => setCatalystAddress(e.target.value)}
                  />
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>City</label>
                  <input
                    type='name'
                    className='form-control'
                    placeholder='City'
                    id='catalystCity'
                    name={catalystCity}
                    onChange={(e) => setCatalystCity(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Taluka</label>
                  <input
                    type='name'
                    className='form-control'
                    placeholder='Taluka'
                    id='catalystTaluka'
                    name={catalystTaluka}
                    onChange={(e) => setCatalystTaluka(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>District</label>
                  <input
                    type='name'
                    className='form-control'
                    placeholder='District'
                    id='catalystDist'
                    name={catalystDist}
                    onChange={(e) => setCatalystDist(e.target.value)}
                  />
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>State</label>
                  <input
                    type='name'
                    className='form-control'
                    placeholder='State'
                    id='catalystState'
                    name={catalystState}
                    onChange={(e) => setCatalystState(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Country</label>
                  <input
                    type='name'
                    className='form-control'
                    placeholder='Country'
                    id='catalystCountry'
                    name={catalystCountry}
                    onChange={(e) => setCatalystCountry(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Pincode</label>
                  <input
                    type='name'
                    className='form-control'
                    placeholder='Pincode'
                    id='catalystPin'
                    name={catalystPin}
                    onChange={(e) => setCatalystPin(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle' style={{ fontSize: "18px" }}>
                    What best defines your native place?
                  </label>
                  <select className='form-select'
                   name={catalystBelongsTo}
                   onChange={(e) => setCatalystBelongsTo(e.target.value)}
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
                </div>
              </div>

              {/* Academic Details */}
              <h2 className='title'>Academic Details</h2>

              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select className='form-select'>
                    <option select disabled>
                      Select Institute
                    </option>
                    <option value='1'>ABC</option>
                    <option value='2'>XYZ</option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Stream</label>
                  <input
                    type='name'
                    className='form-control'
                    id='catalystStreamBranch'
                    required
                    placeholder='Enter Stream'
                    name={catalystStreamBranch}
                    onChange={(e) => setCatalystStreamBranch(e.target.value)}
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Pass Out Year</label>
                  <input
                    type='number'
                    className='form-control'
                    id='catalystYear'
                    required
                    placeholder='Enter Passout Year'
                    name={catalystYear}
                    onChange={(e) => setCatalystYear(e.target.value)}
                  />
                </div>
              </div>

              {/* Background Details */}
              <h2 className='title'>Background Details</h2>
              <div className='radio-container'>
                <p className='labelStyle'>Have you tried startup before?</p>
                <label className='radio-label'>
                  <input type='radio' name='startup' value='yes'
                  onChange={(e) => setCatalystTriedStartupBefore(e.target.value)} />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input type='radio' name='startup' value='no' 
                  onChange={(e) => setCatalystTriedStartupBefore(e.target.value)}/>
                  <span className='radio-custom'></span>
                  No
                </label>
                <label className='radio-label'>
                  <input type='radio' name='startup' value='planning'
                  onChange={(e) => setCatalystTriedStartupBefore(e.target.value)} />
                  <span className='radio-custom'></span>
                  Planning
                </label>
              </div>

              <div className='radio-container'>
                <p className='labelStyle'>
                  Are you eligible for benefits provided to EBC(Economically
                  Backward Class)?
                </p>
                <label className='radio-label' >
                  <input type='radio' name='ebs' value='yes' 
                 
                  onChange={(e) => setCatalystEBC(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input type='radio' name='ebs' value='no' 
                  onChange={(e) => setCatalystEBC(e.target.value)}/>
                  <span className='radio-custom'></span>
                  No
                </label>
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
