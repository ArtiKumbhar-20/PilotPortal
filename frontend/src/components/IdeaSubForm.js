import React, { useState, useRef } from "react";
import axios from "axios";
//Step 1:
import { validateRequired } from "./formValidator";

import config from "./config";
const apiUrl = `${config.backendUrl}/ideasub/`; // Construct Backend API URL

export const IdeaSubForm = () => {

  // Fetch Institute List from backend
  // const [institutes, setInstitutes] = useState([]);
  // useEffect(() => {
  //   fetch(`${config.backendUrl}/getInstitutesList/`)  // Adjust the URL as per your Django server
  //     .then(response => response.json())
  //     .then(data => setInstitutes(data.institutes))
  //     .catch(error => console.error('Error fetching institutes:', error));
  // }, []);

  const [loading, setLoading] = useState(false);
  // const [ideaID, setIdeaID] = useState('');
  const [ideaTeamID, setIdeaTeamID] = useState("");
  const [ideaTeamName, setIdeaTeamName] = useState("");
  // const [ideaTeamInstiID, setIdeaTeamInstiID] = useState("");
  // const [ideaTeamCFO, setIdeaTeamCFO] = useState("");
  // const [ideaTeamCEO, setIdeaTeamCEO] = useState("");
  // const [ideaTeamCTO, setIdeaTeamCTO] = useState("");
  // const [ideaTeamCOO, setIdeaTeamCOO] = useState("");
  // const [ideaTeamCMO, setIdeaTeamCMO] = useState("");
  const [ideaTeamPSdetail, setIdeaTeamPSdetail] = useState("");
  const [ideaTeamPersona1, setIdeaTeamPersona1] = useState("");
  const [ideaTeamPersona2, setIdeaTeamPersona2] = useState("");
  const [ideaTeamInterviews, setIdeaTeamInterviews] = useState("");
  const [ideaTeamQuestions, setIdeaTeamQuestions] = useState("");
  const [ideaTeamInsights, setIdeaTeamInsights] = useState("");
  const [ideaTeamFinalPS, setIdeaTeamFinalPS] = useState("");
  const [ideaTeamDomain, setIdeaTeamDomain] = useState("");
  const [ideaTeamSDG, setIdeaTeamSDG] = useState("");
  const [ideaTeamSolnCount, setIdeaTeamSolnCount] = useState("");
  const [ideaTeamTopSoln1, setIdeaTeamTopSoln1] = useState("");
  const [ideaTeamTopSoln2, setIdeaTeamTopSoln2] = useState("");
  const [ideaTeamTopSoln3, setIdeaTeamTopSoln3] = useState("");
  const [ideaTeamQuickVal, setIdeaTeamQuickVal] = useState("");
  const [ideaTeamFinalSoln, setIdeaTeamFinalSoln] = useState("");
  const [ideaTeamOfferingType, setIdeaTeamOfferingType] = useState("");
  const [ideaTeamTechReq, setIdeaTeamTechReq] = useState("");
  const [ideaTeamHardwareReq, setIdeaTeamHardwareReq] = useState("");
  const [ideaTeamNonTechReq, setIdeaTeamNonTechReq] = useState("");
  const [ideaTeamProtoTime, setIdeaTeamProtoTime] = useState("");
  const [ideaTeamProtoCost, setIdeaTeamProtoCost] = useState("");
  const [ideaTeamIncuSupport, setIdeaTeamIncuSupport] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState("");

  // Step 2: For Validation
  // State to hold form field errors
  const [formErrors, setFormErrors] = useState({
    ideaTeamID: "",
    ideaTeamName: "",
    // ideaTeamInstiID: "",
    // ideaTeamCFO: "",
    // ideaTeamCEO: "",
    // ideaTeamCTO: "",
    // ideaTeamCOO: "",
    // ideaTeamCMO: "",
    ideaTeamPSdetail: "",
    ideaTeamPersona1: "",
    ideaTeamPersona2: "",
    ideaTeamInterviews: "",
    ideaTeamQuestions: "",
    ideaTeamInsights: "",
    ideaTeamFinalPS: "",
    ideaTeamDomain: "",
    ideaTeamSDG: "",
    ideaTeamSolnCount: "",
    ideaTeamTopSoln1: "",
    ideaTeamTopSoln2: "",
    ideaTeamTopSoln3: "",
    ideaTeamQuickVal: "",
    ideaTeamFinalSoln: "",
    ideaTeamOfferingType: "",
    TeamTechReq: "",
    ideaTeamHardwareReq: "",
    ideaTeamNonTechReq: "",
    ideaTeamProtoTime: "",
    ideaTeamProtoCost: "",
    ideaTeamIncuSupport: "",
  });

  // Reset from after successfull submission
  const ideaForm = useRef(null);

  const sendIdeaDetails = async (event) => {
    event.preventDefault();

    

    // Step 3: For Validation
    const newFormErrors = {
      ideaTeamID: validateRequired(ideaTeamID),
      ideaTeamName: validateRequired(ideaTeamName),
      // ideaTeamInstiID: validateRequired(ideaTeamInstiID),
      // ideaTeamCFO: validateRequired(ideaTeamCFO),
      // ideaTeamCEO: validateRequired(ideaTeamCEO),
      // ideaTeamCTO: validateRequired(ideaTeamCTO),
      // ideaTeamCOO: validateRequired(ideaTeamCOO),
      // ideaTeamCMO: validateRequired(ideaTeamCMO),
      ideaTeamPSdetail: validateRequired(ideaTeamPSdetail),
      ideaTeamPersona1: validateRequired(ideaTeamPersona1),
      ideaTeamPersona2: validateRequired(ideaTeamPersona2),
      ideaTeamInterviews: validateRequired(ideaTeamInterviews),
      ideaTeamQuestions: validateRequired(ideaTeamQuestions),
      ideaTeamInsights: validateRequired(ideaTeamInsights),
      ideaTeamFinalPS: validateRequired(ideaTeamFinalPS),
      ideaTeamDomain: validateRequired(ideaTeamDomain),
      ideaTeamSDG: validateRequired(ideaTeamSDG),
      ideaTeamSolnCount: validateRequired(ideaTeamSolnCount),
      ideaTeamTopSoln1: validateRequired(ideaTeamTopSoln1),
      ideaTeamTopSoln2: validateRequired(ideaTeamTopSoln2),
      ideaTeamTopSoln3: validateRequired(ideaTeamTopSoln3),
      ideaTeamQuickVal: validateRequired(ideaTeamQuickVal),
      ideaTeamFinalSoln: validateRequired(ideaTeamFinalSoln),
      ideaTeamOfferingType: validateRequired(ideaTeamOfferingType),
      ideaTeamTechReq: validateRequired(ideaTeamTechReq),
      ideaTeamHardwareReq: validateRequired(ideaTeamHardwareReq),
      ideaTeamNonTechReq: validateRequired(ideaTeamNonTechReq),
      ideaTeamProtoTime: validateRequired(ideaTeamProtoTime),
      ideaTeamProtoCost: validateRequired(ideaTeamProtoCost),
      ideaTeamIncuSupport: validateRequired(ideaTeamIncuSupport),
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
        console.log(formErrors); // Add this line before the axios call
        const generatedIdeaUniqueID = Math.floor(100_000_000 + Math.random() * 900_000_000);

        const response = await axios.post(apiUrl, {
          ideaUniqueID: generatedIdeaUniqueID,
          // ideaID,
          ideaTeamID,
          ideaTeamName,
          // ideaTeamInstiID,
          // ideaTeamCFO,
          // ideaTeamCEO,
          // ideaTeamCTO,
          // ideaTeamCOO,
          // ideaTeamCMO,
          ideaTeamPSdetail,
          ideaTeamPersona1,
          ideaTeamPersona2,
          ideaTeamInterviews,
          ideaTeamQuestions,
          ideaTeamInsights,
          ideaTeamFinalPS,
          ideaTeamDomain,
          ideaTeamSDG,
          ideaTeamSolnCount,
          ideaTeamTopSoln1,
          ideaTeamTopSoln2,
          ideaTeamTopSoln3,
          ideaTeamQuickVal,
          ideaTeamFinalSoln,
          ideaTeamOfferingType,
          ideaTeamTechReq,
          ideaTeamHardwareReq,
          ideaTeamNonTechReq,
          ideaTeamProtoTime,
          ideaTeamProtoCost,
          ideaTeamIncuSupport,
        });
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        // ideaForm.current.reset();
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    // <h1>Idea Submission Form</h1>

    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          <div className='col-lg-12 mb-30'>
            <form
              id='contact-form'
              className='comment-form-inner contact-form wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
              ref={ideaForm}
              onSubmit={sendIdeaDetails}
            >
              <h2 className='title'>Team Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Team ID</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamID: validateRequired(value),
                      }));
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamID ? "is-invalid" : "")
                    }
                    placeholder='Enter Team ID'
                    name={ideaTeamID}
                  />
                  {formErrors.ideaTeamID && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamID}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Team Name</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamName(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamName: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamName ? "is-invalid" : "")
                    }
                    placeholder='Enter Team Name'
                    name={ideaTeamName}
                  />
                  {formErrors.ideaTeamName && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamName}
                    </div>
                  )}
                </div>

              </div>
              <br />
              <h2 className='title'>Idea Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Problem Statement</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamPSdetail(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamPSdetail: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamPSdetail ? "is-invalid" : "")
                    }
                    placeholder='Initial Problem Statement in detail'
                    name={ideaTeamPSdetail}
                  />
                  {formErrors.ideaTeamPSdetail && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamPSdetail}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Persona 1 - Customer Segment 1
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamPersona1(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamPersona1: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamPersona1 ? "is-invalid" : "")
                    }
                    placeholder='Persona 1 - Customer Segment 1'
                    name={ideaTeamPersona1}
                  />
                  {formErrors.ideaTeamPersona1 && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamPersona1}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Persona 2 - Customer Segment 2
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamPersona2(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamPersona2: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamPersona2 ? "is-invalid" : "")
                    }
                    placeholder='Persona 2 - Customer Segment 2'
                    name={ideaTeamPersona2}
                  />
                  {formErrors.ideaTeamPersona2 && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamPersona2}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    How many interviews you had about this idea?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.ideaTeamInterviews ? "is-invalid" : "")
                    }
                    name={ideaTeamInterviews}
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamInterviews(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamInterviews: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Number of Interviews
                    </option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='more than 10'>More Than 10</option>
                  </select>
                  {formErrors.ideaTeamInterviews && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamInterviews}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    What interview questions you prepared for your past
                    interview?{" "}
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamQuestions(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamQuestions: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamQuestions ? "is-invalid" : "")
                    }
                    placeholder='Enter questions'
                    name={ideaTeamQuestions}
                  />
                  {formErrors.ideaTeamQuestions && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamQuestions}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    What insights you gathered from your research
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamInsights(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamInsights: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamInsights ? "is-invalid" : "")
                    }
                    placeholder='Enter insights'
                    name={ideaTeamInsights}
                  />
                  {formErrors.ideaTeamInsights && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamInsights}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Final Problem Statement</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamFinalPS(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamFinalPS: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamFinalPS ? "is-invalid" : "")
                    }
                    placeholder='Enter Final Problem Statement'
                    name={ideaTeamFinalPS}
                  />
                  {formErrors.ideaTeamFinalPS && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamFinalPS}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Select Problem Statement Domain
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.ideaTeamDomain ? "is-invalid" : "")
                    }
                    name={ideaTeamDomain}
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamDomain(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamDomain: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Problem Statement Domain
                    </option>
                    <option value='Health'>Health</option>
                    <option value='Agriculture'>Agriculture</option>
                  </select>
                  {formErrors.ideaTeamDomain && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamDomain}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    How do you map your problem statement with Sustainable
                    Development Goals?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.ideaTeamSDG ? "is-invalid" : "")
                    }
                    name={ideaTeamSDG}
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamSDG(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamSDG: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Sustainable Development Goals
                    </option>
                    <option value='Health'>Health</option>
                    <option value='Agriculture'>Agriculture</option>
                  </select>
                  {formErrors.ideaTeamSDG && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamSDG}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    How many solutions you have formulated for your idea?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.ideaTeamSolnCount ? "is-invalid" : "")
                    }
                    name={ideaTeamSolnCount}
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamSolnCount(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamSolnCount: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Number of Ideas
                    </option>
                    <option value='1'>1</option>
                    <option value='1'>2</option>
                    <option value='1'>3</option>
                    <option value='1'>4</option>
                    <option value='1'>5</option>
                    <option value='1'>6</option>
                  </select>
                  {formErrors.ideaTeamSolnCount && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamSolnCount}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 1</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamTopSoln1(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamTopSoln1: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamTopSoln1 ? "is-invalid" : "")
                    }
                    placeholder='Enter Top Solution 1'
                    name={ideaTeamTopSoln1}
                  />
                  {formErrors.ideaTeamTopSoln1 && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamTopSoln1}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 2</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamTopSoln2(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamTopSoln2: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamTopSoln2 ? "is-invalid" : "")
                    }
                    placeholder='Enter Top Solution 2'
                    name={ideaTeamTopSoln2}
                  />
                  {formErrors.ideaTeamTopSoln2 && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamTopSoln2}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 3</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamTopSoln3(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamTopSoln3: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamTopSoln3 ? "is-invalid" : "")
                    }
                    placeholder='Enter Top Solution 3'
                    name={ideaTeamTopSoln3}
                  />
                  {formErrors.ideaTeamTopSoln3 && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamTopSoln3}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    What insights you have gathered for quick validation?
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamQuickVal(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamQuickVal: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamQuickVal ? "is-invalid" : "")
                    }
                    placeholder='Enter insights gathered for quick validation'
                    name={ideaTeamQuickVal}
                  />
                  {formErrors.ideaTeamQuickVal && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamQuickVal}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Final Solution</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamFinalSoln(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamFinalSoln: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamFinalSoln ? "is-invalid" : "")
                    }
                    placeholder='Enter Final Solution'
                    name={ideaTeamFinalSoln}
                  />
                  {formErrors.ideaTeamFinalSoln && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamFinalSoln}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Team Offering Type</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.ideaTeamOfferingType ? "is-invalid" : "")
                    }
                    name={ideaTeamOfferingType}
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamOfferingType(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamOfferingType: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Team Offering Type
                    </option>
                    <option value='Health'>Health</option>
                    <option value='Agriculture'>Agriculture</option>
                  </select>
                  {formErrors.ideaTeamOfferingType && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamOfferingType}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Technical Requirements</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamTechReq(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamTechReq: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamTechReq ? "is-invalid" : "")
                    }
                    placeholder='Enter Technical Requirements'
                    name={ideaTeamTechReq}
                  />
                  {formErrors.ideaTeamTechReq && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamTechReq}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Hardware Requirements</label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamHardwareReq(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamHardwareReq: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamHardwareReq ? "is-invalid" : "")
                    }
                    placeholder='Enter Hardware Requirements'
                    name={ideaTeamHardwareReq}
                  />
                  {formErrors.ideaTeamHardwareReq && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamHardwareReq}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Non-Technical Requirements
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamNonTechReq(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamNonTechReq: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamNonTechReq ? "is-invalid" : "")
                    }
                    placeholder='Enter Non-Technical Requirements'
                    name={ideaTeamNonTechReq}
                  />
                  {formErrors.ideaTeamNonTechReq && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamNonTechReq}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Estimated Time for implementing your idea
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamProtoTime(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamProtoTime: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamProtoTime ? "is-invalid" : "")
                    }
                    placeholder='Enter Estimated Time'
                    name={ideaTeamProtoTime}
                  />
                  {formErrors.ideaTeamProtoTime && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamProtoTime}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Estimated Cost for implementing your idea
                  </label>
                  <input
                    type='text'
                    onChange={(e) => {
                      const value = e.target.value;
                      setIdeaTeamProtoCost(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        ideaTeamProtoCost: validateRequired(value),
                      }));
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.ideaTeamProtoCost ? "is-invalid" : "")
                    }
                    placeholder='Enter Estimated Cost'
                    name={ideaTeamProtoCost}
                  />
                  {formErrors.ideaTeamProtoCost && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamProtoCost}
                    </div>
                  )}
                </div>

                <div class='radio-container'>
                  <p className='labelStyle'>Do you have Incubator Support?</p>
                  <label className='radio-label'>
                    <input
                      className={
                        formErrors.ideaTeamIncuSupport ? "is-invalid" : ""
                      }
                      type='radio'
                      id='parentSupportYes'
                      value='yes'
                      name='ideaTeamIncuSupport'
                      onChange={(e) => {
                        const value = e.target.value;
                        setIdeaTeamIncuSupport(value);
                        setFormErrors((prevErrors) => ({
                          ...prevErrors,
                          ideaTeamIncuSupport: validateRequired(value),
                        }));
                      }}
                    />
                    <span className='radio-custom'></span>
                    Yes
                  </label>
                  <label className='radio-label'>
                    <input
                      className={
                        formErrors.ideaTeamIncuSupport ? "is-invalid" : ""
                      }
                      type='radio'
                      id='parentSupportNo'
                      value='no'
                      name='ideaTeamIncuSupport'
                      onChange={(e) => {
                        const value = e.target.value;
                        setIdeaTeamIncuSupport(value);
                        setFormErrors((prevErrors) => ({
                          ...prevErrors,
                          ideaTeamIncuSupport: validateRequired(value),
                        }));
                      }}
                    />
                    <span className='radio-custom'></span>
                    No
                  </label>
                  {formErrors.ideaTeamIncuSupport && (
                    <div className='invalid-feedback'>
                      {formErrors.ideaTeamIncuSupport}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexcheckDefault'
                      // name={ideaTeamterms}
                      // onChange={(e) => setideaTeamterms(e.target.value)}
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
                </div>
                {formError && (
                <div className='col-12 mb-3'>
                  <div className='alert alert-danger'>{formError}</div>
                </div>
              )}
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
