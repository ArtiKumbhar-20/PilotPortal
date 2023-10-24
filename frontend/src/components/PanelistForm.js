import React, { useState, useRef } from "react";
import axios from "axios";
import {
  validateRequired,
  validateEmail,
  validateAadhar,
  validateMobile,
} from "./formValidator";
import config from "./config";
const apiUrl = `${config.backendUrl}/panelist_register/`; // Construct Backend API URL

export const PanelistForm = () => {
  const [panelistFname, setPanelistFname] = useState("");
  const [panelistLname, setPanelistLname] = useState("");
  const [panelistDOB, setPanelistDOB] = useState("");
  const [panelistGender, setPanelistGender] = useState("");
  const [panelistEmail, setPanelistEmail] = useState("");
  const [panelistMobile, setPanelistMobile] = useState("");
  const [panelistWhatsapp, setPanelistWhatsapp] = useState("");
  const [panelistAadhar, setPanelistAadhar] = useState("");
  const [panelistInstiID, setPanelistInstiID] = useState("");
  const [panelistDomain, setPanelistDomain] = useState("");
  const [panelistDegree, setPanelistDegree] = useState("");
  const [panelistDesignation, setPanelistDesignation] = useState("");
  const [panelistTotalExp, setPanelistTotalExp] = useState("");
  const [panelistIdeaEvaluated, setPanelistIdeaEvaluated] = useState("");

  // State to hold form field errors
  const [formErrors, setFormErrors] = useState({
    panelistFname: "",
    panelistLname: "",
    panelistDOB: "",
    panelistGender: "",
    panelistEmail: "",
    panelistMobile: "",
    panelistWhatsapp: "",
    panelistAadhar: "",
    panelistInstiID: "",
    panelistDomain: "",
    panelistDegree: "",
    panelistDesignation: "",
    panelistTotalExp: "",
    panelistIdeaEvaluated: "",
  });

  // Reset from after successfull submission
  const panelistForm = useRef(null);

  const sendPanelistDetails = (event) => {
    event.preventDefault();

    const newFormErrors = {
      panelistFname: validateRequired(panelistFname),
      panelistLname: validateRequired(panelistLname),
      panelistEmail: validateEmail(panelistEmail),
      panelistMobile: validateRequired(panelistMobile),
      panelistWhatsapp: validateRequired(panelistWhatsapp),
      panelistAadhar: validateRequired(panelistAadhar),
      panelistInstiID: validateRequired(panelistInstiID),
      panelistDomain: validateRequired(panelistDomain),
      panelistDegree: validateRequired(panelistDegree),
      panelistDesignation: validateRequired(panelistDesignation),
      panelistTotalExp: validateRequired(panelistTotalExp),
      panelistIdeaEvaluated: validateRequired(panelistIdeaEvaluated),
    };

    setFormErrors(newFormErrors);

    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      axios({
        method: "post",
        url: apiUrl,
        data: {
          panelistFname,
          panelistLname,
          panelistDOB,
          panelistGender,
          panelistEmail,
          panelistMobile,
          panelistWhatsapp,
          panelistAadhar,
          panelistInstiID,
          panelistDomain,
          panelistDegree,
          panelistDesignation,
          panelistTotalExp,
          panelistIdeaEvaluated,
        },
      }).then((response) => {
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        // panelistForm.current.reset();
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
              ref={panelistForm}
              onSubmit={sendPanelistDetails}
            >
              <h2 className='title'>Profile Details (Panelist)</h2>
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>First Name</label>
                  <input
                    type='name'
                    className={
                      "form-control " +
                      (formErrors.panelistFname ? "is-invalid" : "")
                    }
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter First Name'
                    name={panelistFname}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistFname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistFname: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.panelistFname && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistFname}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Last Name</label>
                  <input
                    type='name'
                    className={
                      "form-control " +
                      (formErrors.panelistLname ? "is-invalid" : "")
                    }
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Last Name'
                    name={panelistLname}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistLname(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistLname: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.panelistLname && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistLname}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Date of birth</label>
                  <input
                    type='date'
                    className={
                      "form-control " +
                      (formErrors.panelistDOB ? "is-invalid" : "")
                    }
                    id='stdDOB'
                    name={panelistDOB}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistDOB(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistDOB: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.panelistLname && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistLname}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Gender</label>
                  <br />
                  <br />
                  <div className='form-check form-check-inline'>
                    <label className='form-check-label' htmlFor='inlineRadio1'>
                      <input
                        className={
                          "form-check-inputt " +
                          (formErrors.panelistGender ? "is-invalid" : "")
                        }
                        type='radio'
                        id='stdGender'
                        value='male'
                        style={{ height: 20 }}
                        name={panelistGender}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPanelistGender(value);
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            panelistGender: validateRequired(value),
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
                          (formErrors.panelistGender ? "is-invalid" : "")
                        }
                        type='radio'
                        id='stdGender'
                        value='female'
                        style={{ height: 20 }}
                        name={panelistGender}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPanelistGender(value);
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            panelistGender: validateRequired(value),
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
                          (formErrors.panelistGender ? "is-invalid" : "")
                        }
                        type='radio'
                        id='stdGender'
                        value='other'
                        style={{ height: 20 }}
                        name={panelistGender}
                        onChange={(e) => {
                          const value = e.target.value;
                          setPanelistGender(value);
                          setFormErrors((prevErrors) => ({
                            ...prevErrors,
                            panelistGender: validateRequired(value),
                          }));
                        }}
                      />
                      Other
                    </label>
                  </div>
                  {formErrors.panelistGender && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistGender}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Email</label>
                  <input
                    type='email'
                    className={
                      "form-control " +
                      (formErrors.panelistEmail ? "is-invalid" : "")
                    }
                    id='stdEmail'
                    placeholder='Enter Email Address'
                    name={panelistEmail}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistEmail(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistEmail: validateEmail(value),
                      }));
                    }}
                  />
                  {formErrors.panelistEmail && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistEmail}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Mobile Number</label>
                  <input
                    type='text'
                    className={
                      "form-control " +
                      (formErrors.panelistMobile ? "is-invalid" : "")
                    }
                    id='stdMobile'
                    placeholder='Enter Mobile Number'
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    name={panelistMobile}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistMobile(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistMobile: validateMobile(value),
                      }));
                    }}
                  />
                  {formErrors.panelistMobile && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistMobile}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Whatsapp Number</label>
                  <input
                    type='text'
                    className={
                      "form-control " +
                      (formErrors.panelistWhatsapp ? "is-invalid" : "")
                    }
                    id='stdWhatsapp'
                    placeholder='Enter Whatsapp Number'
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    name={panelistWhatsapp}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistWhatsapp(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistWhatsapp: validateMobile(value),
                      }));
                    }}
                  />
                  {formErrors.panelistWhatsapp && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistWhatsapp}
                    </div>
                  )}
                </div>

                {/* row 3 */}

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Aadhar Number</label>
                  <input
                    type='text'
                    className={
                      "form-control " +
                      (formErrors.panelistAadhar ? "is-invalid" : "")
                    }
                    maxLength={12}
                    id='stdAadhar'
                    placeholder='Enter Adhar Number'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    name={panelistAadhar}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistAadhar(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistAadhar: validateAadhar(value),
                      }));
                    }}
                  />
                  {formErrors.panelistAadhar && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistAadhar}
                    </div>
                  )}
                </div>
              </div>
              <br />
              <br />

              {/* Other Details */}
              <h2 className='title'>Other Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select
                    className={
                      "form-control " +
                      (formErrors.panelistInstiID ? "is-invalid" : "")
                    }
                    name={panelistInstiID}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistInstiID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistInstiID: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Institute
                    </option>
                    <option value='1'>ABC</option>
                    <option value='2'>XYZ</option>
                  </select>
                  {formErrors.panelistInstiID && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistInstiID}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Domain</label>
                  <select
                    className={
                      "form-control " +
                      (formErrors.panelistDomain ? "is-invalid" : "")
                    }
                    name={panelistDomain}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistDomain(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistDomain: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Domain
                    </option>
                    <option value='1'>Option1</option>
                    <option value='2'>Option2</option>
                  </select>
                  {formErrors.panelistDomain && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistDomain}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Degree</label>
                  <input
                    type='name'
                    className={
                      "form-control " +
                      (formErrors.panelistDegree ? "is-invalid" : "")
                    }
                    id='panelistDegree'
                    placeholder='Enter Degree'
                    name={panelistDegree}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistDegree(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistDegree: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.panelistDegree && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistDegree}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Designation</label>
                  <input
                    type='name'
                    className={
                      "form-control " +
                      (formErrors.panelistDesignation ? "is-invalid" : "")
                    }
                    id='panelistDegree'
                    placeholder='Enter Designation'
                    name={panelistDesignation}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistDesignation(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistDesignation: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.panelistDesignation && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistDesignation}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Total years of Experience
                  </label>
                  <input
                    type='text'
                    className={
                      "form-control " +
                      (formErrors.panelistTotalExp ? "is-invalid" : "")
                    }
                    id='stdExperience'
                    placeholder='Enter Years of Experience'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    name={panelistTotalExp}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistTotalExp(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistTotalExp: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.panelistTotalExp && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistTotalExp}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Total Ideas Evaluated</label>
                  <input
                    type='text'
                    className={
                      "form-control " +
                      (formErrors.panelistIdeaEvaluated ? "is-invalid" : "")
                    }
                    id='stdIdeas'
                    placeholder='Number of Ideas Evaluated'
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    name={panelistIdeaEvaluated}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPanelistIdeaEvaluated(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        panelistIdeaEvaluated: validateRequired(value),
                      }));
                    }}
                  />
                  {formErrors.panelistIdeaEvaluated && (
                    <div className='invalid-feedback'>
                      {formErrors.panelistIdeaEvaluated}
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
