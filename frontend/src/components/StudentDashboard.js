import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";
import Dashboard from "./Dashboard";
import { NavLink } from "react-router-dom";


const StudentDashboard = ({ userDetails }) => {
  const loggedInStudId = userDetails.student_id;
  const loggedInPanelId = userDetails.paneID;
  const apiUrl = `${config.backendUrl}/StudGetData/${userDetails.student_id}/`;
  const [stud, setStud] = useState({});

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setStud(response.data.stud);
        console.log("Student Data : ", response.data.stud);
      })
      .catch((error) => {
        console.error("Error fetching submitted data:", error);
      });
  }, [apiUrl]);


  const [idea, setIdea] = useState({});
  useEffect(() => {
    axios
      .get(`${config.backendUrl}/IdeaGetData/${loggedInStudId}/`)
      .then((response) => {
        setIdea(response.data.idea);
      })
      .catch((error) => {
        console.error('Error fetching submitted data:', error);
      });
  }, [loggedInStudId]);

  const [teams, setTeams] = useState({});
  useEffect(() => {
    axios
      .get(`${config.backendUrl}/TeamInfo/${loggedInStudId}/`)
      .then((response) => {
        setTeams(response.data.teams);
      })
      .catch((error) => {
        console.error('Error fetching submitted data:', error);
      });
  }, [loggedInStudId]);

  const teamUniqueID = teams.teamUniqueID;

  const [ideaDetail, setIdeaDetail] = useState({});
  useEffect(() => {
    axios
      .get(`${config.backendUrl}/ideaDetailFetch/${teamUniqueID}/`)
      .then((response) => {
        setIdeaDetail(response.data.idea);
        // console.log("Idea Data: ", ideaDetail)
      })
      .catch((error) => {
        console.error('Error fetching submitted data:', error);
      });
  }, [teamUniqueID]);

  const [activeSection, setActiveSection] = useState('profile');

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", textAlign: "center", color: "gray" }}>Welcome, {userDetails.first_name}!!</h1>
      <div id='sidebar-container-cust'>
        <nav
          id='sidebar-cust'
          className='col-md-3 col-lg-3 d-md-block bg-primary sidebar'
        >
          <div className='position-sticky'>
            <ul className='nav flex-column'>
              <li
                className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`}
              >
                <a
                  className='nav-link'
                  href='#profile'
                  onClick={() => handleSidebarClick('profile')}
                >
                  Profile
                </a>
              </li>
              <li
                className={`nav-item ${activeSection === 'team-members' ? 'active' : ''}`}
              >
                <a
                  className='nav-link'
                  href='#team-members'
                  onClick={() => handleSidebarClick('team-members')}
                >
                  Team Members
                </a>
              </li>
              <li
                className={`nav-item ${activeSection === 'submitted-ideas' ? 'active' : ''}`}
              >
                <a
                  className='nav-link'
                  href='#submitted-ideas'
                  onClick={() => handleSidebarClick('submitted-ideas')}
                >
                  Submitted Ideas
                </a>
              </li>
              <li
                className={`nav-item ${activeSection === 'idea-status' ? 'active' : ''}`}
              >
                <a
                  className='nav-link'
                  href='#idea-status'
                  onClick={() => handleSidebarClick('idea-status')}
                >
                  Idea Status
                </a>
              </li>
              <li
                className={`nav-item ${activeSection === 'logout-btn' ? 'active' : ''}`}
              >
                <NavLink to='/logout' className='nav-link'>
                  <span>Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main
          id='content-cust'
          className='col-md-9 ms-sm-auto col-lg-9 px-md-4'
        >
          {/* Render content based on activeSection */}
          {activeSection === 'profile' && (
            <div className='section-content'>
              <h3 className='pb-3'>Student Details</h3>
              <form>
                <div className='row'>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Student Unique ID</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your name'
                        value={stud.stdUniqueID}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>First Name</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your name'
                        value={stud.stdFname}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Last Name</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your name'
                        value={stud.stdLname}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Date of Birth</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Date of Birth'
                        value={stud.stdDOB}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Gender</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your gender'
                        value={stud.stdGender}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Mobile Number</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your gender'
                        value={stud.stdMobile}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Whatsapp Number</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your gender'
                        value={stud.stdWhatsapp}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label for='studentEmail' className='cust-label'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control cust-input'
                        id='studentEmail'
                        placeholder='Enter your email'
                        value={stud.Email}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Student Address</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your address'
                        value={stud.stdAddress}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>City </label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your city'
                        value={stud.stdAddrCity}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>District</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your district'
                        value={stud.stdAddrDist}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>State</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter state'
                        value={stud.stdAddrState}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Country</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter country'
                        value={stud.stdAddrCountry}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Pincode</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter pin'
                        value={stud.stdAddrPin}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Institute Name</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your institute name'
                        value={stud.stdInstiID}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Stream</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your stream'
                        value={stud.stdStream}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Branch</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your branch'
                        value={stud.stdBranch}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Passout Year</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your passout year'
                        value={stud.stdPassoutYear}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>
                        Tried Startup Before
                      </label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        value={stud.stdTriedStartupBefore}
                      />
                    </div>
                  </div>
                </div>
                <button type='submit' className='btn btn-custom'>
                  Update Details
                </button>
              </form>
            </div>
          )}


          {/* Add other content sections for student */}
          {/* ... */}
          {activeSection === "team-members" && (
            <div className='section-content'>
              <h3 className='pb-3'>Team Details</h3>
              <form>
                <div className='row'>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Team Unique ID</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your team name'
                        value={teams.teamUniqueID}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Team Name</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your team name'
                        value={teams.teamName}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Team CEO</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter team CEO name'
                        value={teams.teamCEO}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Team COO</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter team COO name'
                        value={teams.teamCOO}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Team CMO</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter team CMO name'
                        value={teams.teamCMO}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Team CTO</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter team CTO name'
                        value={teams.teamCTO}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>Team CFO</label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter team CFO name'
                        value={teams.teamCFO}
                      />
                    </div>
                  </div>
                  <div className='col-12 col-xl-8 col-lg-4 mb-2'>
                    <div className='form-group'>
                      <label className='cust-label'>
                        Team Institute Name
                      </label>
                      <input
                        type='text'
                        className='form-control cust-input'
                        id='studentName'
                        placeholder='Enter your institute name'
                        value={teams.teamInstiID.instName}
                      // value='Zeal College of Engineering & Research, Pune'
                      />
                    </div>
                  </div>
                </div>
                <button type='submit' className='btn btn-custom'>
                  Update Details
                </button>
              </form>
            </div>
          )}

          {activeSection === 'submitted-ideas' && (
            <div className='section-content'>
              <h3>Submitted Idea</h3>
              <hr style={{ borderBottom: '2px solid #000', margin: '15px 0 30px 0' }} />
              <div className='section-content'>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card" style={{ border: '1.4px solid #EDEEEE', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                      <div class="card-body">
                        <h6 class="card-title"><b>Idea ID:{ideaDetail.ideaUniqueID}</b></h6>
                        <hr style={{ borderBottom: '1px solid #000', margin: '15px 0' }} />
                        <p class="card-text mb-1"><b>Team Name:</b> {ideaDetail.ideaTeamName} </p>
                        <p class="card-text mb-1"><b>Offering Type:</b> {ideaDetail.offering_type} </p>
                        <p class="card-text mb-1"><b>Domain:</b> {ideaDetail.domain} </p>
                        <p class="card-text mb-3"><b>Description:</b> {ideaDetail.final_ps}</p>
                        <a href={ideaDetail.ideaUniqueID} className='btn btn-custom' style={{ fontSize: 'small' }}>View More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'idea-status' && (
            <div className='section-content'>
              <h3>Idea Status</h3>
              <hr style={{ borderBottom: '2px solid #000', margin: '15px 0 30px 0' }} />
              {/* <p><b>Idea Status: </b>{ideaDetail.ideaStatus}</p> */}
              <ol className="process_checkout">
                <li className={`step ${ideaDetail.ideaStatus === 'Submitted' ? 'completed' : (ideaDetail.ideaStatus === 'Reviewed' || ideaDetail.ideaStatus === 'Remarked' || ideaDetail.ideaStatus === 'Closed' ? 'completed' : 'active')}`}>
                  <span className="step-icon"></span>
                  <span className="step-label">Submitted</span>
                </li>
                <li className={`step ${ideaDetail.ideaStatus === 'Reviewed' ? 'completed' : (ideaDetail.ideaStatus === 'Submitted' ? 'active' : 'completed')}`}>
                  <span className="step-icon"></span>
                  <span className="step-label">Reviewed</span>
                </li>
                <li className={`step ${ideaDetail.ideaStatus === 'Remarked' ? 'completed' : ((ideaDetail.ideaStatus === 'Submitted' ? '' : ideaDetail.ideaStatus === 'Reviewed' ? 'active' : 'completed'))}`}>
                  <span className="step-icon"></span>
                  <span className="step-label">Remarked</span>
                </li>
                <li className={`step ${ideaDetail.ideaStatus === 'Closed' ? 'completed' : ((ideaDetail.ideaStatus === 'Submitted' || ideaDetail.ideaStatus === 'Reviewed' ? '' : ideaDetail.ideaStatus === 'Remarked' ? 'active' : ''))}`}>
                  <span className="step-icon"></span>
                  <span className="step-label">Closed</span>
                </li>
              </ol>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
