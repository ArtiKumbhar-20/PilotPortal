import React, { useRef,useState, useEffect } from "react";
import axios from "axios";
import { validateRequired } from "./formValidator";
import config from "./config";
const apiUrl = `${config.backendUrl}/ideaeval/`; // Construct Backend API URL

export const IdeaEval = () => {
  // const [evaluationID, setEvaluationID] = useState('');
  const [evalPanelistID, setevalPanelistID] = useState("");
  const [evalTeamID, setevalTeamID] = useState("");
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

  // Step 2: For Validation
  // State to hold form field errors
  const [formErrors, setFormErrors] = useState({
    evalPanelistID: "",
    evalTeamID: "",
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
    evalOverallFeedback:"",
  });

  // Reset from after successfull submission
  const ideaEvaluate = useRef(null);

  const sendIdeaEvalDetails = (event) => {
    event.preventDefault();

    // Step 3: For Validation
    const newFormErrors = {
      evalPanelistID: validateRequired(evalPanelistID),
      evalTeamID: validateRequired(evalTeamID),
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

    // Step 4: For Validation : Will Not Change
    setFormErrors(newFormErrors);

    // Step 5: For Validation : If statement
    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      console.log(formErrors); // Add this line before the axios call
      axios({
        method: "post",
        url: apiUrl,
        data: {
          // ideaID,
          evalPanelistID,
          evalTeamID,
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
        }, 
      }).then((response) => {
        alert(`Thank you for submitting your details.`);
        console.log(response.data);
        ideaEvaluate.current.reset();
      });
    } // Closing of If statment
  };
// const IdeaEval=()=> {
//   const [team, setTeam] = useState({});
//   const [panelist, setPanelist] = useState({});

//   useEffect(() => {
//     // Fetch data from Django API
//     axios
//       .get('http://localhost:8000/IdeaEvalView')
//       .then((response) => {
//         setTeam(response.data.team);
//         setPanelist(response.data.panelist);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

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
              {/* Title */}
              <h2 className='title'>Idea Evaluation</h2>
              <div className='row'>
                <div className='col-6'>
                  {/* Display the team ID and name */}
                  {/* <p>Team ID: {team.id}</p>
                  <p>Team Name: {team.name}</p> */}
                  <p>Team ID: </p>
                  <p>Team Name:</p>
                </div>
                <div className='col-6'>
                  {/* Display the panelist ID and name */}
                  {/* <p>Panelist ID: {panelist.id}</p>
                  <p>Panelist Name: {panelist.name}</p> */}
                  <p>Panelist ID: </p>
                  <p>Panelist Name: </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'> Panelist ID</label>
                  <input
                    type='name'
                    onChange={(e) => {const value= e.target.value;
                    setevalPanelistID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalPanelistID: validateRequired(value),
                      }));
                    }}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className={
                      "form-control " +
                      (formErrors.evalPanelistID ? "is-invalid" : "")
                    }
                    //className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Panelist ID'
                    // value={panelist.id}
                   
                    name={evalPanelistID}
                    
                  />
                  {formErrors.evalPanelistID && (
                    <div className='invalid-feedback'>
                      {formErrors.evalPanelistID}
                    </div>
                  )}
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Team ID</label>
                  <input
                    type='name'
                    onChange={(e) => {
                      const value = e.target.value;
                      setevalTeamID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        evalTeamID: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " +
                      (formErrors.evalTeamID ? "is-invalid" : "")
                    }
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team ID'
                    // value={team.id}
                    name={evalTeamID}
                  />
                  {formErrors.evalTeamID && (
                    <div className='invalid-feedback'>
                      {formErrors.evalTeamID}
                    </div>
                  )}
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
                    onChange={(e) =>{
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
                    onChange={(e) =>{
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
                    onChange={(e) =>  {
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
                    "form-select " +
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
                    <option selected disabled>
                      Select
                    </option>
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
// };                   
export default IdeaEval;