import React, { useState, useRef } from "react";
import axios from "axios";

export const Sign = () => {
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

  // Reset from after successfull submission
  const studentForm = useRef(null);

  const sendStudentDetails = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/register/",
      data: {
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
      },
    }).then((response) => {
      alert(`Thank you for submitting your details.`);
      console.log(response.data);
      studentForm.current.reset();
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
              ref={studentForm}
              onSubmit={sendStudentDetails}
            >
              <h2 className='title'>Profile Details (Sign In)</h2>
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder='Enter First Name'
                    name={stdFname}
                    onChange={(e) => setStdFname(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder='Enter Last Name'
                    name={stdLname}
                    onChange={(e) => setStdLname(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Date of birth</label>
                  <input
                    type='date'
                    className='form-control'
                    required
                    name={stdDOB}
                    onChange={(e) => setStdDOB(e.target.value)}
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
                        id='stdGender'
                        value='male'
                        style={{ height: 20 }}
                        name={stdGender}
                        onChange={(e) => setStdGender(e.target.value)}
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
                        id='stdGender'
                        value='female'
                        style={{ height: 20 }}
                        name={stdGender}
                        onChange={(e) => setStdGender(e.target.value)}
                      />
                      Female
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio2'>
                      <input
                        className='form-check-inputt'
                        type='radio'
                        // name='inlineRadioOptions'
                        id='stdGender'
                        value='other'
                        style={{ height: 20 }}
                        name={stdGender}
                        onChange={(e) => setStdGender(e.target.value)}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder='Enter Mobile Number'
                    name={stdMobile}
                    onChange={(e) => setStdMobile(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                    placeholder='Enter Whatsapp Number'
                    name={stdWhatsapp}
                    onChange={(e) => setStdWhatsapp(e.target.value)}
                  />
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    required
                    placeholder='Enter Email'
                    name={stdEmail}
                    onChange={(e) => setStdEmail(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Aadhar Number</label>
                  <input
                    type='number'
                    className='form-control'
                    required
                    placeholder='Enter Adhar Number'
                    name={stdAadhar}
                    onChange={(e) => setStdAadhar(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Socio-Economic Background
                  </label>
                  <select
                    className='form-select'
                    name={stdFamBackground}
                    onChange={(e) => setStdFamBackground(e.target.value)}
                  >
                    <option selected disabled>
                      Select Socio-Economic Background
                    </option>
                    <option value='Urban'>Urban</option>
                    <option value='Semi Urban'>Semi Urban</option>
                  </select>
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
                    className='form-control'
                    id='stdAddress'
                    placeholder='Flat, House no., Building, Company, Apartment'
                    name={stdAddress}
                    onChange={(e) => setStdAddress(e.target.value)}
                  />
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>City</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdAddrCity'
                    placeholder='Enter City'
                    name={stdAddrCity}
                    onChange={(e) => setStdAddrCity(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Taluka</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdAddrTaluka'
                    placeholder='Enter Taluka'
                    name={stdAddrTaluka}
                    onChange={(e) => setStdAddrTaluka(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>District</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdAddrDist'
                    placeholder='Enter District'
                    name={stdAddrDist}
                    onChange={(e) => setStdAddrDist(e.target.value)}
                  />
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>State</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdAddrState'
                    placeholder='Enter State'
                    name={stdAddrState}
                    onChange={(e) => setStdAddrState(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Country</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdAddrCountry'
                    placeholder='Enter Country'
                    name={stdAddrCountry}
                    onChange={(e) => setStdAddrCountry(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Pincode</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdAddrPin'
                    placeholder='Enter Pincode'
                    name={stdAddrPin}
                    onChange={(e) => setStdAddrPin(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle' style={{ fontSize: "18px" }}>
                    What best defines your native place?
                  </label>
                  <select
                    className='form-select'
                    name={stdBelongsTo}
                    onChange={(e) => setStdBelongsTo(e.target.value)}
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
                </div>
              </div>

              <br />
              <br />

              <h2 className='title'>Academic Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select
                    className='form-select'
                    name={stdInstiID}
                    onChange={(e) => setStdInstiID(e.target.value)}
                  >
                    <option selected disabled>
                      Select Institute
                    </option>
                    <option value='1'>option1</option>
                    <option value='2'>option2</option>
                  </select>
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Branch</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdBranch'
                    placeholder='Enter Branch'
                    name={stdBranch}
                    onChange={(e) => setStdBranch(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Stream</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdStream'
                    placeholder='Enter Stream'
                    name={stdStream}
                    onChange={(e) => setStdStream(e.target.value)}
                  />
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Passout Year</label>
                  <input
                    type='text'
                    className='form-control'
                    id='stdPassoutYear'
                    placeholder='Enter Passout Year'
                    name={stdPassoutYear}
                    onChange={(e) => setStdPassoutYear(e.target.value)}
                  />
                </div>
              </div>

              <br />
              <br />
              <h2 className='title'>Additional Details</h2>
              <div className='radio-container'>
                <p className='labelStyle'>Have you tried Startup before?</p>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='startupYes'
                    value='yes'
                    name='stdTriedStartupBefore'
                    onChange={(e) => setStdTriedStartupBefore(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='startupNo'
                    value='no'
                    name='stdTriedStartupBefore'
                    onChange={(e) => setStdTriedStartupBefore(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  No
                </label>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='startupPlanning'
                    value='planning'
                    name='stdTriedStartupBefore'
                    onChange={(e) => setStdTriedStartupBefore(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  Planning
                </label>
              </div>

              <div className='radio-container'>
                <p className='labelStyle'>
                  Do you need us to onboard your parents for their support?
                </p>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='parentSupportYes'
                    value='yes'
                    name='stdParentSupport'
                    onChange={(e) => setStdParentSupport(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='parentSupportNo'
                    value='no'
                    name='stdParentSupport'
                    onChange={(e) => setStdParentSupport(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  No
                </label>
              </div>

              <div className='radio-container'>
                <p className='labelStyle'>Have you taken Educational Loan?</p>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='eduLoanYes'
                    value='yes'
                    name='stdEduLoan'
                    onChange={(e) => setStdEduLoan(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='eduLoanNo'
                    value='no'
                    name='stdEduLoan'
                    onChange={(e) => setStdEduLoan(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  No
                </label>
              </div>

              <div className='radio-container'>
                <p className='labelStyle'>
                  Are you eligible for benefits provided to EBC(Economically
                  Backward Class)?
                </p>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='ebcYes'
                    value='yes'
                    name='stdEBC'
                    onChange={(e) => setStdEBC(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  Yes
                </label>
                <label className='radio-label'>
                  <input
                    type='radio'
                    id='ebcNo'
                    value='no'
                    name='stdEBC'
                    onChange={(e) => setStdEBC(e.target.value)}
                  />
                  <span className='radio-custom'></span>
                  No
                </label>
              </div>

              {/* <div className='col-12 col-xl-12 col-lg-12 mb-3'>
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
              </div> */}

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
