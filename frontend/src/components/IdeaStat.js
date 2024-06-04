import React, { useState, useRef } from "react";
import axios from "axios";
// Step 1: For Validation
import {
  validateRequired,
} from "./formValidator";

export const IdeaStat = () => {
  const [ideaStatStatus, setideaStatStatus] = useState("");
  const [ideaStatMarketResearch, setideaStatMarketResearch] = useState("");
  const [ideaStatAdvBoot, setideaStatAdvBoot] = useState("");
  const [ideaStatIncuSupport, setideaStatIncuSupport] = useState("");
  const [ideaStatIPRTrademark, setideaStatIPRTrademark] = useState("");
  const [ideaStatIPRPatent, setideaStatIPRPatent] = useState("");
  const [ideaStatIPRCopyright, setideaStatIPRCopyright] = useState("");
  const [ideaStatBusinessPlan, setideaStatBusinessPlan] = useState("");
  const [ideaStatIPRTradeSecrets, setideaStatIPRTradeSecrets] = useState("");
  const [ideaStatProto, setideaStatProto] = useState("");
  const [ideaStatTeamPlacement, setideaStatTeamPlacement] = useState("");
  const [ideaStatIncorpStatus, setideaStatIncorpStatus] = useState("");
  const [ideaStatEmploybilitySkilling, setideaStatEmploybilitySkilling] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState("");

  // Step 2: For Validation
  // State to hold form field errors
  const [formErrors, setFormErrors] = useState({
    ideaStatStatus: "",
    ideaStatMarketResearch: "",
    ideaStatAdvBoot: "",
    ideaStatIncuSupport: "",
    ideaStatIPRTrademark: "",
    ideaStatIPRPatent: "",
    ideaStatIPRCopyright: "",
    ideaStatBusinessPlan: "",
    ideaStatIPRTradeSecrets: "",
    ideaStatProto: "",
    ideaStatTeamPlacement: "",
    ideaStatIncorpStatus: "",
    ideaStatEmploybilitySkilling: "",
    termsAgreed: "", // New error field for the checkbox
  });

  // Reset from after successfull submission
  const ideastatForm = useRef(null);

  const sendIdeaStatDetails = (event) => {
    event.preventDefault();

    // Step 3: For Validation
    const newFormErrors = {
      ideaStatStatus: validateRequired(ideaStatStatus),
      ideaStatMarketResearch: validateRequired(ideaStatMarketResearch),
      ideaStatAdvBoot: validateRequired(ideaStatAdvBoot),
      ideaStatIncuSupport: validateRequired(ideaStatIncuSupport),
      ideaStatIPRTrademark: validateRequired(ideaStatIPRTrademark),
      ideaStatIPRPatent: validateRequired(ideaStatIPRPatent),
      ideaStatIPRCopyright: validateRequired(ideaStatIPRCopyright),
      ideaStatBusinessPlan: validateRequired(ideaStatBusinessPlan),
      ideaStatIPRTradeSecrets: validateRequired(ideaStatIPRTradeSecrets),
      ideaStatProto: validateRequired(ideaStatProto),
      ideaStatTeamPlacement: validateRequired(ideaStatTeamPlacement),
      ideaStatIncorpStatus: validateRequired(ideaStatIncorpStatus),
      ideaStatEmploybilitySkilling: validateRequired(ideaStatEmploybilitySkilling),
    };

    // Step 4: For Validation : Will Not Change
    setFormErrors(newFormErrors);

    if (!agreeTerms) {
      setFormError("You must agree to the terms and conditions.");
      return;
    }

    // Step 5: For Validation : If statement
    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      axios({
        method: "post",
        url: "http://localhost:8000/ideastat/",
        data: {
          ideaStatStatus,
          ideaStatMarketResearch,
          ideaStatAdvBoot,
          ideaStatIncuSupport,
          ideaStatIPRTrademark,
          ideaStatIPRPatent,
          ideaStatIPRCopyright,
          ideaStatBusinessPlan,
          ideaStatIPRTradeSecrets,
          ideaStatProto,
          ideaStatTeamPlacement,
          ideaStatIncorpStatus,
          ideaStatEmploybilitySkilling,
        },
      }).then((response) => {
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        ideastatForm.current.reset();
      });
    } // Closing of If statment
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
              ref={ideastatForm}
              onSubmit={sendIdeaStatDetails}
            >
                {/* Title */}
              <h2 className='title'>Idea Status</h2>
              <div className='row'>
                {/* row 1 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Status Name</label>
                  <input
                    type='text'
                    placeholder='Status Name'
                    name={ideaStatStatus}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatStatus(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatStatus: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatStatus ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatStatus && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatStatus}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Market Research</label>
                  <input
                    type='text'
                    placeholder='Market Research'
                    name={ideaStatMarketResearch}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatMarketResearch(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatMarketResearch: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatMarketResearch ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatMarketResearch && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatMarketResearch}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Advance Bootcamp</label>
                  <input
                    type='text'
                    placeholder='Advance Bootcamp'
                    name={ideaStatAdvBoot}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatAdvBoot(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatAdvBoot: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatAdvBoot ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatAdvBoot && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatAdvBoot}
                    </div>
                  )}
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incubation Support</label>
                  <input
                    type='text'
                    placeholder='Incubation Support'
                    name={ideaStatIncuSupport}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatIncuSupport(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatIncuSupport: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatIncuSupport ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatIncuSupport && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatIncuSupport}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Trademark</label>
                  <input
                    type='text'
                    placeholder='IPR Trademark'
                    name={ideaStatIPRTrademark}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatIPRTrademark(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatIPRTrademark: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatIPRTrademark ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatIPRTrademark && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatIPRTrademark}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Patent</label>
                  <input
                    type='text'
                    placeholder='IPR Patent'
                    name={ideaStatIPRPatent}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatIPRPatent(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatIPRPatent: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatIPRPatent ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatIPRPatent && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatIPRPatent}
                    </div>
                  )}
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Copyright</label>
                  <input
                    type='text'
                    placeholder='IPR Copyright'
                    name={ideaStatIPRCopyright}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatIPRCopyright(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatIPRCopyright: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatIPRCopyright ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatIPRCopyright && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatIPRCopyright}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Bussiness Plan</label>
                  <input
                    type='text'
                    placeholder='Bussiness Plan'
                    name={ideaStatBusinessPlan}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatBusinessPlan(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatBusinessPlan: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatBusinessPlan ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatBusinessPlan && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatBusinessPlan}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Trade Secrets</label>
                  <input
                    type='text'
                    placeholder='IPR Trade Secrets'
                    name={ideaStatIPRTradeSecrets}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatIPRTradeSecrets(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatIPRTradeSecrets: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatIPRTradeSecrets ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatIPRTradeSecrets && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatIPRTradeSecrets}
                    </div>
                  )}
                </div>

                {/* row 4 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Status Prototype</label>
                  <input
                    type='text'
                    placeholder='Status Prototype'
                    name={ideaStatProto}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatProto(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatProto: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatProto ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatProto && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatProto}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Team Placement</label>
                  <input
                    type='text'
                    placeholder='Team Placement'
                    name={ideaStatTeamPlacement}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatTeamPlacement(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatTeamPlacement: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatTeamPlacement ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatTeamPlacement && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatTeamPlacement}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incorporation Status</label>
                  <input
                    type='text'
                    placeholder='Incorporation Status'
                    name={ideaStatIncorpStatus}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatIncorpStatus(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatIncorpStatus: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatIncorpStatus ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatIncorpStatus && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatIncorpStatus}
                    </div>
                  )}
                </div>

                {/* row 5 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Employability Skilling</label>
                  <input
                    type='text'
                    placeholder='Employability Skilling'
                    name={ideaStatEmploybilitySkilling}
                    onChange={(e) => {
                      const value = e.target.value;
                      setideaStatEmploybilitySkilling(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaStatEmploybilitySkilling: validateRequired(value),
                      }));
                    }}
                    // Step 7: For Validation : Change className and add Field name
                    className={
                      "form-control " +
                      (formErrors.ideaStatEmploybilitySkilling ? "is-invalid" : "")
                    }
                  />
                  
                  {/* Step 8: For Validation : Display Errors */}
                  {formErrors.ideaStatEmploybilitySkilling && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaStatEmploybilitySkilling}
                    </div>
                  )}
                </div>
              </div>

              {/* terms and condition */}
              <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                <div className='form-check'>
                  <input
                    type='checkbox'
                    value=''
                    id='flexcheckDefault'
                    style={{ height: 20, padding: 0, marginBottom:-8, marginRight: 12, width: 20 }}
                    name='termsAgreed'
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    // Change className based on validation
                    className={
                      "form-check-input " +
                      (formErrors.termsAgreed ? "is-invalid" : "")
                    }
                  />
                  <label className='labelStyle' htmlFor='flexCheckDefault'>
                    I agree to all terms and conditions.
                  </label>
                  {formError && (
                <div className='col-12 mb-3'>
                  <div className='alert alert-danger'>{formError}</div>
                </div>
              )}
                </div>
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
