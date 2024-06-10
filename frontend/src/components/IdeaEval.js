import React, { useRef, useState } from "react";
import axios from "axios";
import { validateRequired } from "./formValidator";
import config from "./config";
import Button from 'react-bootstrap/Button';
import IdeaModal from "./ideaModal";
import { useSearchParams, useHistory } from 'react-router-dom';

const apiUrl = `${config.backendUrl}/ideaeval/`;

export const IdeaEval = ({ onIdeaEvaluated }) => {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const ideaID = searchParams.get('ideaID');
  const panelistID = searchParams.get('panelistID');
  const ideaTeamName = searchParams.get('ideaTeamName');
  const ideaTeamID = searchParams.get('ideaTeamID');
  const [ideateamspdetails, setIdeateamspdetails] = useState(null);

  // Extract the required detail from ideateamspdetails
  const ideaTeamPSdetail = ideateamspdetails ? ideateamspdetails.ideaTeamPSdetail : "";

  console.log(`Idea ID: ${ideaID}, Panelist ID: ${panelistID}, Team Name: ${ideaTeamName}, Team SP Details: ${ideaTeamPSdetail}`);

  // Modal function
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [evalAffordable, setevalAffordable] = useState("");
  const [evalSustainable, setevalSustainable] = useState("");
  const [evalScalable, setevalScalable] = useState("");
  const [evalUniversal, setevalUniversal] = useState("");
  const [evalRapid, setevalRapid] = useState("");
  const [evalExcellent, setevalExcellent] = useState("");
  const [evalDistinctive, setevalDistinctive] = useState("");
  const [evalWow, setevalWow] = useState("");
  const [evalScopeIPs, setevalScopeIPs] = useState("");
  const [evalMarketNeed, setevalMarketNeed] = useState("");
  const [evalSupplyChain, setevalSupplyChain] = useState("");
  const [evalScopeRevenue, setevalScopeRevenue] = useState("");
  const [evalCompetition, setevalCompetition] = useState("");
  const [evalEaseOfOperation, setevalEaseOfOperation] = useState("");
  const [evalBonus, setevalBonus] = useState("");
  const [evalRecommendedToIncu, setevalRecommendedToIncu] = useState("");
  const [evalAreaOfImprov, setevalAreaOfImprov] = useState("");
  const [evalOverallFeedback, setevalOverallFeedback] = useState("");

  const [formErrors, setFormErrors] = useState({
    evalAffordable: "",
    evalSustainable: "",
    evalScalable: "",
    evalUniversal: "",
    evalRapid: "",
    evalExcellent: "",
    evalDistinctive: "",
    evalWow: "",
    evalScopeIPs: "",
    evalMarketNeed: "",
    evalSupplyChain: "",
    evalScopeRevenue: "",
    evalCompetition: "",
    evalEaseOfOperation: "",
    evalBonus: "",
    evalRecommendedToIncu: "",
    evalAreaOfImprov: "",
    evalOverallFeedback: "",
  });

  const ideaEvaluate = useRef(null);

  const sendIdeaEvalDetails = async (event) => {
    event.preventDefault();

    const newFormErrors = {
      evalAffordable: validateRequired(evalAffordable),
      evalSustainable: validateRequired(evalSustainable),
      evalScalable: validateRequired(evalScalable),
      evalUniversal: validateRequired(evalUniversal),
      evalRapid: validateRequired(evalRapid),
      evalExcellent: validateRequired(evalExcellent),
      evalDistinctive: validateRequired(evalDistinctive),
      evalWow: validateRequired(evalWow),
      evalScopeIPs: validateRequired(evalScopeIPs),
      evalMarketNeed: validateRequired(evalMarketNeed),
      evalSupplyChain: validateRequired(evalSupplyChain),
      evalScopeRevenue: validateRequired(evalScopeRevenue),
      evalCompetition: validateRequired(evalCompetition),
      evalEaseOfOperation: validateRequired(evalEaseOfOperation),
      evalBonus: validateRequired(evalBonus),
      evalRecommendedToIncu: validateRequired(evalRecommendedToIncu),
      evalAreaOfImprov: validateRequired(evalAreaOfImprov),
      evalOverallFeedback: validateRequired(evalOverallFeedback),
    };

    setFormErrors(newFormErrors);

    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      setLoading(true);
      try {
        const response = await axios.post(apiUrl, {
          evalPanelistID: panelistID,
          evalTeamID: ideaTeamID,
          evalTeamName: ideaTeamName,
          ideaTeamPSdetail, // Include the PS detail
          ideaID,
          evalAffordable,
          evalSustainable,
          evalScalable,
          evalUniversal,
          evalRapid,
          evalExcellent,
          evalDistinctive,
          evalWow,
          evalScopeIPs,
          evalMarketNeed,
          evalSupplyChain,
          evalScopeRevenue,
          evalCompetition,
          evalEaseOfOperation,
          evalBonus,
          evalRecommendedToIncu,
          evalAreaOfImprov,
          evalOverallFeedback,
        });
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        ideaEvaluate.current.reset();
        window.location.href = "http://localhost:3000/Dashboard";

      } catch (error) {
        console.error("Error submitting form:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
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
              ref={ideaEvaluate}
              onSubmit={sendIdeaEvalDetails}
            >
              < IdeaModal  ideaID={ideaID} onFetchDetails={setIdeateamspdetails} />
              <h2 className='title'>Idea Evaluation</h2>

              <div className='row'>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Panelist ID</label>
                  <input
                    type='text'
                    id='panelistID'
                    className='form-control'
                    value={panelistID}
                    readOnly
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Team ID</label>
                  <input
                    type='text'
                    id='teamID'
                    className='form-control'
                    value={ideaTeamID}
                    readOnly
                  />
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Team Name</label>
                  <input
                    type='text'
                    id='teamName'
                    className='form-control'
                    value={ideaTeamName}
                    readOnly
                  />
                </div>

                {/* RadioButton */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is this Idea Affordable?</label>

                  <select
                    className={
                      "form-select " +
                      (formErrors.evalAffordable ? "is-invalid" : "")
                    }
                    name={evalAffordable}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalAffordable(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalAffordable: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalAffordable && (
                    <div className='invalid-feedback'>
                      {formErrors.evalAffordable}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    {" "}
                    Is this Idea Sustainable?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalSustainable ? "is-invalid" : "")
                    }
                    name={evalSustainable}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalSustainable(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalSustainable: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalSustainable && (
                    <div className='invalid-feedback'>
                      {formErrors.evalSustainable}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    {" "}
                    Is this Idea Scalable?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalScalable ? "is-invalid" : "")
                    }
                    name={evalScalable}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalScalable(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalScalable: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalScalable && (
                    <div className='invalid-feedback'>
                      {formErrors.evalScalable}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is this Idea Universal?</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalUniversal ? "is-invalid" : "")
                    }
                    name={evalUniversal}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalUniversal(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        setevalUniversal: validateRequired(value),
                      }));
                    }}

                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalUniversal && (
                    <div className='invalid-feedback'>
                      {formErrors.evalUniversal}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Does Idea Grow Rapidly?</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalRapid ? "is-invalid" : "")
                    }
                    name={evalRapid}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalRapid(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalRapid: validateRequired(value),
                      }));
                    }}

                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalRapid && (
                    <div className='invalid-feedback'>
                      {formErrors.evalRapid}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is this Idea Excellent?</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalExcellent ? "is-invalid" : "")
                    }
                    name={evalExcellent}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalExcellent(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalExcellent: validateRequired(value),
                      }));
                    }}

                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalExcellent && (
                    <div className='invalid-feedback'>
                      {formErrors.evalExcellent}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Is this Idea Distinctive?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalDistinctive ? "is-invalid" : "")
                    }
                    name={evalDistinctive}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalDistinctive(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalDistinctive: validateRequired(value),
                      }));
                    }}

                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalDistinctive && (
                    <div className='invalid-feedback'>
                      {formErrors.evalDistinctive}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Does Idea has WOW Factor?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalWow ? "is-invalid" : "")
                    }
                    name={evalWow}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalWow(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalWow: validateRequired(value),
                      }));
                    }}

                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalWow && (
                    <div className='invalid-feedback'>
                      {formErrors.evalWow}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is there Scope IPs?</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalScopeIPs ? "is-invalid" : "")
                    }
                    name={evalScopeIPs}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalScopeIPs(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalScopeIPs: validateRequired(value),
                      }));
                    }}

                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalScopeIPs && (
                    <div className='invalid-feedback'>
                      {formErrors.evalScopeIPs}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Does Idea have Market Need?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalMarketNeed ? "is-invalid" : "")
                    }
                    name={evalMarketNeed}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalMarketNeed(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalMarketNeed: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalMarketNeed && (
                    <div className='invalid-feedback'>
                      {formErrors.evalMarketNeed}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Supply Chain</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalSupplyChain ? "is-invalid" : "")
                    }
                    name={evalSupplyChain}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalSupplyChain(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalSupplyChain: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalSupplyChain && (
                    <div className='invalid-feedback'>
                      {formErrors.evalSupplyChain}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Scope Revenue</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalScopeRevenue ? "is-invalid" : "")
                    }
                    name={evalScopeRevenue}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalScopeRevenue(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalScopeRevenue: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalScopeRevenue && (
                    <div className='invalid-feedback'>
                      {formErrors.evalScopeRevenue}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    {" "}
                    Is there any Competition?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalCompetition ? "is-invalid" : "")
                    }
                    name={evalCompetition}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalCompetition(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalCompetition: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalCompetition && (
                    <div className='invalid-feedback'>
                      {formErrors.evalCompetition}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Ease of Operation</label>
                  <select
                    className={
                      (formErrors.evalEaseOfOperation ? "is-invalid" : "")
                    }
                    name={evalEaseOfOperation}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalEaseOfOperation(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalEaseOfOperation: validateRequired(value),
                      }));
                    }}
                  >
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalEaseOfOperation && (
                    <div className='invalid-feedback'>
                      {formErrors.evalEaseOfOperation}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Bonus Mark</label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalBonus ? "is-invalid" : "")
                    }
                    name={evalBonus}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalBonus(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalBonus: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalBonus && (
                    <div className='invalid-feedback'>
                      {formErrors.evalBonus}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-5 col-lg-5 mb-3'>
                  <label className='labelStyle'>
                    Can you recommend this idea to Incubator?
                  </label>
                  <select
                    className={
                      "form-select " +
                      (formErrors.evalRecommendedToIncu ? "is-invalid" : "")
                    }
                    name={evalRecommendedToIncu}
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalRecommendedToIncu(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalRecommendedToIncu: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                  {formErrors.evalRecommendedToIncu && (
                    <div className='invalid-feedback'>
                      {formErrors.evalRecommendedToIncu}
                    </div>
                  )}
                </div>

                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Area of Improvement</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalAreaOfImprov(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalAreaOfImprov: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.evalAreaOfImprov ? "is-invalid" : "")
                    }
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Area of Improvement'
                    name={evalAreaOfImprov}


                  />
                  {formErrors.evalAreaOfImprov && (
                    <div className='invalid-feedback'>
                      {formErrors.evalAreaOfImprov}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Overall Feedback</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalOverallFeedback(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalOverallFeedback: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.evalOverallFeedback ? "is-invalid" : "")
                    }
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Overall Feedback'
                    name={evalOverallFeedback}

                  />
                  {formErrors.evalOverallFeedback && (
                    <div className='invalid-feedback'>
                      {formErrors.evalOverallFeedback}
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
                  <button className='btn btn-style-one' type='submit' disabled={loading}>
                    <span>{loading ? 'Submitting...' : 'Submit Now'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IdeaEval;
