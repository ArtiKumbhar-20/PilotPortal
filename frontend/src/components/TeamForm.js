import React, { useState, useRef } from "react";
import axios from "axios";

export const TeamForm = () => {
  const [teamName, setTeamName] = useState("");
  const [teamCEO, setTeamCEO] = useState("");
  const [teamCOO, setTeamCOO] = useState("");
  const [teamCMO, setTeamCMO] = useState("");
  const [teamCTO, setTeamCTO] = useState("");
  const [teamCFO, setTeamCFO] = useState("");
  const [teamInstiID, setTeamInstiID] = useState("");

  // Reset from after successfull submission
  const teamForm = useRef(null);

  const sendTeamDetails = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/team_register/",
      data: {
        teamName,
        teamCEO,
        teamCFO,
        teamCMO,
        teamCOO,
        teamCTO,
        teamInstiID,
      },
    }).then((response) => {
      alert(`Thank you for submitting your details.`);
      console.log(response.data);
      // teamForm.current.reset();
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
              ref={teamForm}
              onSubmit={sendTeamDetails}
            >
              {/* Title */}
              <div className='row'></div>

              <h2 className='title'>Team Formation</h2>
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Team Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='teamName'
                    aria-describedby='emailHelp'
                    placeholder='Enter Team Name'
                    name={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CEO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='teamCEO'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Executive aspects of your ideas'
                    name={teamCEO}
                    onChange={(e) => setTeamCEO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>COO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='teamCOO'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Operational aspects of your ideas'
                    name={teamCOO}
                    onChange={(e) => setTeamCOO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CFO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='teamCFO'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Financial aspects of your ideas'
                    name={teamCFO}
                    onChange={(e) => setTeamCFO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CTO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='teamCTO'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Technological aspects of your ideas'
                    name={teamCTO}
                    onChange={(e) => setTeamCTO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CMO</label>
                  <input
                    type='name'
                    className='form-control'
                    id='teamCMO'
                    aria-describedby='emailHelp'
                    placeholder='Team Member looking after Marketing aspects of your ideas'
                    name={teamCMO}
                    onChange={(e) => setTeamCMO(e.target.value)}
                  />
                </div>
                <div className='col-12 col-xl-12 col-lg-6 mb-3'>
                  <label className='labelStyle'>Institute</label>
                  <select
                    className='form-select'
                    name={teamInstiID}
                    onChange={(e) => setTeamInstiID(e.target.value)}
                  >
                    <option selected disabled>
                      Select Institute
                    </option>
                    <option value='1'>
                      Cummins College of Engineering for Women, Nagpur
                    </option>
                    <option value='2'>
                      Zeal College of Engineering and Research, Pune
                    </option>
                    <option value='3'>
                      K J College of Engineering and Management Research, Pune
                    </option>
                    <option value='4'>
                      D Y Patil College of Engineering, Kolhapur
                    </option>
                  </select>
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
                  <span>Form a team!</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
