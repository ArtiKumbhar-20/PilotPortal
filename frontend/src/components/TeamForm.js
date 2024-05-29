import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { validateRequired } from "./formValidator";
import config from "./config";
const apiUrl = `${config.backendUrl}/team_register/`; // Construct Backend API URL

export const TeamForm = () => {

  // Fetch Institute List from backend
  const [institutes, setInstitutes] = useState([]);
  useEffect(() => {
    fetch(`${config.backendUrl}/getInstitutesList/`)  // Adjust the URL as per your Django server
      .then(response => response.json())
      .then(data => setInstitutes(data.institutes))
      .catch(error => console.error('Error fetching institutes:', error));
  }, []);

  const [loading, setLoading] = useState(false);
  const [teamName, setteamName] = useState("");
  const [teamCEO, setteamCEO] = useState("");
  const [teamCOO, setteamCOO] = useState("");
  const [teamCMO, setteamCMO] = useState("");
  const [teamCTO, setteamCTO] = useState("");
  const [teamCFO, setteamCFO] = useState("");
  const [teamInstiID, setteamInstiID] = useState("");
  // Alert 
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState("");

  const [formErrors, setFormErrors] = useState({
    teamName: "",
    teamCEO: "",
    teamCOO: "",
    teamCMO: "",
    teamCTO: "",
    teamCFO: "",
    teamInstiID: "",
  });

  // Reset from after successfull submission
  const teamForm = useRef(null);

  const sendTeamDetails = async (event) => {
    event.preventDefault();

   
    // Step 3
    const newFormErrors = {
      teamName: validateRequired(teamName),
      teamCEO: validateRequired(teamCEO),
      teamCOO: validateRequired(teamCOO),
      teamCMO: validateRequired(teamCMO),
      teamCTO: validateRequired(teamCTO),
      teamCFO: validateRequired(teamCFO),
      teamInstiID: validateRequired(teamInstiID),
    };

    // Step 4
    setFormErrors(newFormErrors);

    if (!agreeTerms) {
      setFormError("You must agree to the terms and conditions.");
      return;
    }

    

    if (!Object.values(newFormErrors).some((error) => error !== "")) {
      setLoading(true);
      try {
        const generatedTeamUniqueID = Math.floor(100_000_000 + Math.random() * 900_000_000);

        const response = await axios.post(apiUrl, {
          teamUniqueID: generatedTeamUniqueID,
          teamName,
          teamCEO,
          teamCFO,
          teamCMO,
          teamCOO,
          teamCTO,
          teamInstiID,
        });

        // console.log("response", response)
        // console.log("response.data", response.data)
        // console.log("response.data.error", response.data.error)
        // console.log("response.data.message: ", response.data.message)
        // console.log("response.message: ", response.message)
        // console.log("response.error: ", response.error)

        if (response.status === 201) {
          setAlertType("success");
          setAlertMessage(response.data.message);
        } else if (response.status === 409) {
          setAlertType("danger");
          setAlertMessage(response.data.error);
        }
      } catch (error) {
        setAlertType("danger");
        setAlertMessage('Failed to reset password. Please try again.');
      }
      // finally {
      //   setLoading(false);
      // }
    }
  };

  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          {alertMessage && (
            <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
              {alertMessage}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )}
          <div className='col-lg-12 mb-30'>
            <form
              id='contact-form'
              className='comment-form-inner contact-form wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
              ref={teamForm}
              onSubmit={sendTeamDetails}
            >
              {/* Title */}
              <div className='row'></div>

              {/* <h2 className='title'>Team Formation</h2> */}
              <div className='row'>
                <div className='col-6 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Team Name</label>
                  <input
                    type='text'
                    id='teamName'
                    // Step 6
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamName(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamName: validateRequired(value),
                      }));
                    }}
                    // Step 7
                    className={
                      "form-control " +
                      (formErrors.teamName ? "is-invalid" : "")
                    }
                    placeholder='Enter Team Name'
                    name={teamName}
                  />

                  {/* Step 8 */}
                  {formErrors.teamName && (
                    <div className='invalid-feedback'>
                      {formErrors.teamName}
                    </div>
                  )}
                </div>
                <div className='col-6 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Chief Executive Officer (CEO)</label>
                  <input
                    type='text'
                    id='teamCEO'
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamCEO(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamCEO: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " + (formErrors.teamCEO ? "is-invalid" : "")
                    }
                    placeholder='Team Member looking after Executive aspects of your ideas'
                    name={teamCEO}
                  />

                  {formErrors.teamCEO && (
                    <div className='invalid-feedback'>{formErrors.teamCEO}</div>
                  )}
                </div>
                <div className='col-6 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Chief Marketing Officer (CMO)</label>
                  <input
                    type='text'
                    id='teamCMO'
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamCMO(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamCMO: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " + (formErrors.teamCMO ? "is-invalid" : "")
                    }
                    placeholder='Team Member looking after Marketing aspects of your ideas'
                    name={teamCMO}
                  />

                  {formErrors.teamCMO && (
                    <div className='invalid-feedback'>{formErrors.teamCMO}</div>
                  )}
                </div>
                <div className='col-6 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Chief Operating Officer (COO)</label>
                  <input
                    type='text'
                    id='teamCOO'
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamCOO(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamCOO: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " + (formErrors.teamCOO ? "is-invalid" : "")
                    }
                    placeholder='Team Member looking after Operational aspects of your ideas'
                    name={teamCOO}
                  />

                  {formErrors.teamCOO && (
                    <div className='invalid-feedback'>{formErrors.teamCOO}</div>
                  )}
                </div>

                <div className='col-6 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Chief Financial Officer (CFO)</label>
                  <input
                    type='text'
                    id='teamCFO'
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamCFO(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamCFO: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " + (formErrors.teamCFO ? "is-invalid" : "")
                    }
                    placeholder='Team Member looking after Financial aspects of your ideas'
                    name={teamCFO}
                  />

                  {formErrors.teamCFO && (
                    <div className='invalid-feedback'>{formErrors.teamCFO}</div>
                  )}
                </div>
                <div className='col-6 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Chief Technology Officer (CTO)</label>
                  <input
                    type='text'
                    id='teamCTO'
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamCTO(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamCTO: validateRequired(value),
                      }));
                    }}
                    className={
                      "form-control " + (formErrors.teamCTO ? "is-invalid" : "")
                    }
                    placeholder='Team Member looking after Technological aspects of your ideas'
                    name={teamCTO}
                  />

                  {formErrors.teamCTO && (
                    <div className='invalid-feedback'>{formErrors.teamCTO}</div>
                  )}
                </div>

                {/* <div className='col-12 col-xl-12 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select
                    className={
                      "form-select" +
                      (formErrors.teamInstiID ? "is-invalid" : "")
                    }
                    name={teamInstiID}
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamInstiID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamInstiID: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Institute
                    </option>
                    {institutes.map((institute, index) => (
                      <option key={index} value={institute.instID}>
                        {institute.instName}
                      </option>
                    ))}
                  </select>
                  {formErrors.teamInstiID && (
                    <div className='invalid-feedback'>
                      {formErrors.teamInstiID}
                    </div>
                  )}
                </div> */}

                <div className='col-12 col-xl-12 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select
                    className={
                      "form-select "
                      + (formErrors.teamInstiID ? "is-invalid" : "")
                    }
                    name={teamInstiID}
                    onChange={(e) => {
                      const value = e.target.value;
                      setteamInstiID(value);
                      setFormErrors((prevErrors) => ({
                        ...prevErrors,
                        teamInstiID: validateRequired(value),
                      }));
                    }}
                  >
                    <option selected disabled>
                      Select Institute
                    </option>
                    {institutes.map((institute, index) => (
                      <option key={index} value={institute.instID}>
                        {institute.instName}
                      </option>
                    ))}
                  </select>
                  {formErrors.teamInstiID && (
                    <div className='invalid-feedback'>
                      {formErrors.teamInstiID}
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
                  {formError && (
                <div className='col-12 mb-3'>
                  <div className='alert alert-danger'>{formError}</div>
                </div>
              )}
                </div>
              </div>

              {/* <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit'>
                  <span>Form a team!</span>
                </button>
              </div> */}

              <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit' disabled={loading}>
                  {loading ? (
                    <span>
                      <i className="fa fa-spinner fa-spin" /> Submitting...
                    </span>
                  ) : (
                    <span>Form a team!</span>
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
