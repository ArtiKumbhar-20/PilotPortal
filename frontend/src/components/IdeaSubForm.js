import React, { useState, useRef } from "react";
import axios from "axios";

export const IdeaSubForm = () => {
  // const [ideaID, setIdeaID] = useState('');
  const [ideaTeamID, setIdeaTeamID] = useState('');
  const [ideaTeamName, setIdeaTeamName] = useState('');
  const [ideaTeamInstiID, setIdeaTeamInstiID] = useState('');
  const [ideaTeamCFO, setIdeaTeamCFO] = useState('');
  const [ideaTeamCEO, setIdeaTeamCEO] = useState('');
  const [ideaTeamCTO, setIdeaTeamCTO] = useState('');
  const [ideaTeamCOO, setIdeaTeamCOO] = useState('');
  const [ideaTeamCMO, setIdeaTeamCMO] = useState('');
  const [ideaTeamPSdetail, setIdeaTeamPSdetail] = useState('');
  const [ideaTeamPersona1, setIdeaTeamPersona1] = useState('');
  const [ideaTeamPersona2, setIdeaTeamPersona2] = useState('');
  const [ideaTeamInterviews, setIdeaTeamInterviews] = useState('');
  const [ideaTeamQuestions, setIdeaTeamQuestions] = useState('');
  const [ideaTeamInsights, setIdeaTeamInsights] = useState('');
  const [ideaTeamFinalPS, setIdeaTeamFinalPS] = useState('');
  const [ideaTeamDomain, setIdeaTeamDomain] = useState('');
  const [ideaTeamSDG, setIdeaTeamSDG] = useState('');
  const [ideaTeamSolnCount, setIdeaTeamSolnCount] = useState('');
  const [ideaTeamTopSoln1, setIdeaTeamTopSoln1] = useState('');
  const [ideaTeamTopSoln2, setIdeaTeamTopSoln2] = useState('');
  const [ideaTeamTopSoln3, setIdeaTeamTopSoln3] = useState('');
  const [ideaTeamQuickVal, setIdeaTeamQuickVal] = useState('');
  const [ideaTeamFinalSoln, setIdeaTeamFinalSoln] = useState('');
  const [ideaTeamOfferingType, setIdeaTeamOfferingType] = useState('');
  const [ideaTeamTechReq, setIdeaTeamTechReq] = useState('');
  const [ideaTeamHardwareReq, setIdeaTeamHardwareReq] = useState('');
  const [ideaTeamNonTechReq, setIdeaTeamNonTechReq] = useState('');
  const [ideaTeamProtoTime, setIdeaTeamProtoTime] = useState('');
  const [ideaTeamProtoCost, setIdeaTeamProtoCost] = useState('');
  const [ideaTeamIncuSupport, setIdeaTeamIncuSupport] = useState('');
  // const [recordCreatedOn, setRecordCreatedOn] = useState('');
  // const [recordCreatedBy, setRecordCreatedBy] = useState('');
  // const [recordUpdatedOn, setRecordUpdatedOn] = useState('');
  // const [recordUpdatedBy, setRecordUpdatedBy] = useState('');
  
  // Reset from after successfull submission
  const ideaForm = useRef(null);

  const sendIdeaDetails = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/ideasub/",
      data: {
        // ideaID,
  ideaTeamID,
  ideaTeamName,
  ideaTeamInstiID,
  ideaTeamCFO,
  ideaTeamCEO,
  ideaTeamCTO,
  ideaTeamCOO,
  ideaTeamCMO,
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
  // recordCreatedBy,
  // recordCreatedOn,
  // recordUpdatedOn,
  // recordUpdatedBy
      },

    }).then((response) => {
      alert(`Thank you for submitting your details.`);
      console.log(response.data);
      // studentForm.current.reset();
    });
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
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team ID'
                    name={ideaTeamID}
                    onChange={(e) => setIdeaTeamID(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Team Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team Name'
                    name={ideaTeamName}
                    onChange={(e) => setIdeaTeamName(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute Name</label>
                  <select className='form-select'
                  name={ideaTeamInstiID}
                  onChange={(e) => setIdeaTeamInstiID(e.target.value)}
                  >
                    <option selected disabled>
                      Select Institute
                    </option>
                    <option value='1'>DYP</option>
                  </select>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>CEO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Executive aspects of your ideas'
                    name={ideaTeamCEO}
                    onChange={(e) => setIdeaTeamCEO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>CFO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Financial aspects of your ideas'
                    name={ideaTeamCFO}
                    onChange={(e) => setIdeaTeamCFO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>CTO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Technological aspects of your ideas'
                    name={ideaTeamCTO}
                    onChange={(e) => setIdeaTeamCTO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>COO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Operational aspects of your ideas'
                    name={ideaTeamCOO}
                    onChange={(e) => setIdeaTeamCOO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>CMO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Marketing aspects of your ideas'
                    name={ideaTeamCMO}
                    onChange={(e) => setIdeaTeamCMO(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <h2 className='title'>Idea Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Problem Statement</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Initial Problem Statement in detail'
                    name={ideaTeamPSdetail}
                    onChange={(e) => setIdeaTeamPSdetail(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Persona 1 - Customer Segment 1
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Persona 1 - Customer Segment 1'
                    name={ideaTeamPersona1}
                    onChange={(e) => setIdeaTeamPersona1(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Persona 2 - Customer Segment 2
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Persona 2 - Customer Segment 2'
                    name={ideaTeamPersona2}
                    onChange={(e) => setIdeaTeamPersona2(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    How many interviews you had about this idea?
                  </label>
                  <select className='form-select'
                   name={ideaTeamInterviews}
                   onChange={(e) => setIdeaTeamInterviews(e.target.value)}
                  >
                    <option selected disabled>
                      Select Number of Interviews
                    </option>
                    <option value='1'>1</option>
                  </select>
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    What interview questions you prepared for your past
                    interview?{" "}
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter questions'
                    name={ideaTeamQuestions}
                    onChange={(e) => setIdeaTeamQuestions(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    What insights you gathered from your research
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter insights'
                    name={ideaTeamInsights}
                    onChange={(e) => setIdeaTeamInsights(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Final Problem Statement</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Final Problem Statement'
                    name={ideaTeamFinalPS}
                    onChange={(e) => setIdeaTeamFinalPS(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Select Problem Statement Domain
                  </label>
                  <select className='form-select'
                   name={ideaTeamDomain}
                   onChange={(e) => setIdeaTeamDomain(e.target.value)}
                  >
                    <option selected disabled>
                      Select Problem Statement Domain
                    </option>
                    <option value='1'>Health</option>
                    <option value='1'>Agriculture</option>
                  </select>
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    How do you map your problem statement with Sustainable
                    Development Goals?
                  </label>
                  <select className='form-select'
                   name={ideaTeamSDG}
                   onChange={(e) => setIdeaTeamSDG(e.target.value)}
                  >
                    <option selected disabled>
                      Select Sustainable Development Goals
                    </option>
                    <option value='1'>Health</option>
                    <option value='1'>Agriculture</option>
                  </select>
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    How many solutions you have formulated for your idea?
                  </label>
                  <select className='form-select'
                   name={ideaTeamSolnCount}
                   onChange={(e) => setIdeaTeamSolnCount(e.target.value)}
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
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 1</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Top Solution 1'
                    name={ideaTeamTopSoln1}
                    onChange={(e) => setIdeaTeamTopSoln1(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 2</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Top Solution 2'
                    name={ideaTeamTopSoln2}
                    onChange={(e) => setIdeaTeamTopSoln2(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 3</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Top Solution 3'
                    name={ideaTeamTopSoln3}
                    onChange={(e) => setIdeaTeamTopSoln3(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    What insights you have gathered for quick validation?
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter insights gathered for quick validation'
                    name={ideaTeamQuickVal}
                    onChange={(e) => setIdeaTeamQuickVal(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Final Solution</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Final Solution'
                    name={ideaTeamFinalSoln}
                    onChange={(e) => setIdeaTeamFinalSoln(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Team Offering Type</label>
                  <select className='form-select'
                   name={ideaTeamOfferingType}
                   onChange={(e) => setIdeaTeamOfferingType(e.target.value)}
                  >
                    <option selected disabled>
                      Select Team Offering Type
                    </option>
                    <option value='1'>Health</option>
                    <option value='1'>Agriculture</option>
                  </select>
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Technical Requirements</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Technical Requirements'
                    name={ideaTeamTechReq}
                    onChange={(e) => setIdeaTeamTechReq(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Hardware Requirements</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Hardware Requirements'
                    name={ideaTeamHardwareReq}
                    onChange={(e) => setIdeaTeamHardwareReq(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Non-Technical Requirements
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Non-Technical Requirements'
                    name={ideaTeamNonTechReq}
                    onChange={(e) => setIdeaTeamNonTechReq(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Estimated Time for implementing your idea
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Estimated Time'
                    name={ideaTeamProtoTime}
                    onChange={(e) => setIdeaTeamProtoTime(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>
                    Estimated Cost for implementing your idea
                  </label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Enter Estimated Cost'
                    name={ideaTeamProtoCost}
                    onChange={(e) => setIdeaTeamProtoCost(e.target.value)}
                  />
                </div>

                <div class='radio-container'>
                  <p className='labelStyle'>Do you have Incubator Support?</p>
                  <label class='radio-label'>
                    <input type='radio'  
                    value='yes' 
                    name={ideaTeamIncuSupport}
                    onChange={(e) => setIdeaTeamIncuSupport(e.target.value)}
                    />
                    <span class='radio-custom'></span>
                    Yes
                  </label>
                  <label class='radio-label'>
                    <input type='radio' 
                    value='no' 
                    name={ideaTeamIncuSupport}
                    onChange={(e) => setIdeaTeamIncuSupport(e.target.value)}
                    />
                    <span class='radio-custom'></span>
                    No
                  </label>
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
}
