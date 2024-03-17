import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

const apiUrl = `${config.backendUrl}/dashboard/`; // Construct Backend API URL

export const Dashboard = () => {

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch and set authentication token from wherever you store it (e.g., local storage)
    const authToken = localStorage.getItem('authToken');
    // Use authToken as needed in your component
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError('All fields must be filled');
      setMessage('');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      setMessage('');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/home/changepassword/', {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (response.status === 200) {
        setMessage(response.data.message);
        setError('');
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');

        setTimeout(() => {
          setMessage('');
        }, 2000);

      } else {
        setError('Old password is incorrect.');
        setMessage('');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred.');
      }
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  // To change the value of inputs to edit
  const handleInputChange = (field, value) => {
    setStud({
      ...stud,
      [field]: value,
    });
  };

  // To change the value of inputs to edit
  const handleTeamInputChange = (field, value) => {
    setTeams({
      ...teams,
      [field]: value,
    });
  };

  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      return window.location.href = "/Login";
    }
    else {
      (async () => {
        try {
          const { data } = await axios.get(apiUrl, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });

          // console.log("API Response:", data);
          setUserDetails(data);
        } catch (error) {
          console.error("Not auth | Error:", error);
        }
      })();
    }
  }, []);


  const [stud, setStud] = useState({});
  const [panelist, setPanelist] = useState({});
  const loggedInStudId = userDetails.student_id;
  const loggedInPanelId = userDetails.paneID;

  useEffect(() => {
    if (userDetails.user_type === 'Student') {
      axios
        .get(`${config.backendUrl}/StudGetData/${loggedInStudId}/`)
        .then((response) => {
          setStud(response.data.stud);
          console.log('Student Data : ', response.data.stud);
        })
        .catch((error) => {
          console.error('Error fetching submitted data:', error);
        });
    } else {
      axios
        .get(`${config.backendUrl}/PanelGetData/${loggedInPanelId}/`)
        .then((response) => {
          console.log('PanelGetData Response:', response.data.panelist);
          setPanelist(response.data.panelist);
        })
        .catch((error) => {
          console.error('Error fetching submitted data:', error);
        });
    }
  }, [loggedInPanelId]);

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

  const [activeSection, setActiveSection] = useState('profile');

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header />
      <ContactModal />
      <div className='section-padding'>
        <div className='container'>
          <div className='stud_dashboard_header'>
            {userDetails ? (
              <>
                <div className='row'>
                  <div className='message col-12'>
                    <h3 className="pb-2">
                      Hi, {userDetails.first_name} {userDetails.last_name}
                      <br />
                      {userDetails.message}
                    </h3>
                  </div>
                </div>
              </>
            ) : (
              <h4>Loading user details...</h4>
            )}
          </div>

          {userDetails.user_type === 'Student' && (
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
                    <h3>Submitted Ideas</h3>
                    <hr style={{ borderBottom: '2px solid #000', margin: '15px 0 30px 0' }} />
                    <div className='section-content'>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card" style={{ border: '1.4px solid #EDEEEE', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div class="card-body">
                              <h6 class="card-title"><b>Idea ID:</b></h6>
                              <hr style={{ borderBottom: '1px solid #000', margin: '15px 0' }} />
                              <p class="card-text">With supporting text </p>
                              <p class="card-text">The catchy tune has now led to countless memes, parodies and reels, and has even given birth to its own dance craze.</p>
                              <button type='submit' className='btn btn-custom' style={{ fontSize: 'small' }}>View More</button>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="card" style={{ border: '1.4px solid #EDEEEE', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div class="card-body">
                              <h6 class="card-title"><b>Idea ID:</b></h6>
                              <hr style={{ borderBottom: '1px solid #000', margin: '15px 0' }} />
                              <p class="card-text">With supporting text </p>
                              <p class="card-text">The catchy tune has now led to countless memes, parodies and reels, and has even given birth to its own dance craze.</p>
                              <button type='submit' className='btn btn-custom' style={{ fontSize: 'small' }}>View More</button>
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

                  </div>
                )}

              </main>
            </div>
          )}

          {userDetails.user_type === 'Panelist' && (
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
                      className={`nav-item ${activeSection === 'evaluated' ? 'active' : ''}`}
                    >
                      <a
                        className='nav-link'
                        href='#evaluated'
                        onClick={() => handleSidebarClick('evaluated')}
                      >
                        Evaluated Ideas
                      </a>
                    </li>
                    <li
                      className={`nav-item ${activeSection === 'assigned' ? 'active' : ''}`}
                    >
                      <a
                        className='nav-link'
                        href='#assigned'
                        onClick={() => handleSidebarClick('assigned')}
                      >
                        Assigned Ideas
                      </a>
                    </li>
                    <li
                      className={`nav-item ${activeSection === 'pass' ? 'active' : ''}`}
                    >
                      <a
                        className='nav-link'
                        href='#pass'
                        onClick={() => handleSidebarClick('pass')}
                      >
                        Change Password
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <main
                id='panelist-content-cust'
                className='col-md-9 ms-sm-auto col-lg-9 px-md-4'
              >
                {/* Render content based on activeSection */}
                {activeSection === 'profile' && (
                  <div className='section-content'>
                    <h3 >Panelist Details</h3>
                    <hr style={{ borderBottom: '2px solid #000', margin: '15px 0 30px 0' }} />
                    <form>
                      <div className='row'>
                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>First Name</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='First Name'
                              value={panelist.panelistFname}
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
                              placeholder='Last Name'
                              value={panelist.panelistLname}
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
                              value={panelist.panelistDOB}
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
                              placeholder='Gender'
                              value={panelist.panelistGender}
                            />
                          </div>
                        </div>

                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Email</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='Email'
                              value={panelist.panelistEmail}
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
                              placeholder='Mobile Numbers'
                              value={panelist.panelistMobile}
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
                              placeholder='Whatsapp Number'
                              value={panelist.panelistWhatsapp}
                            />
                          </div>
                        </div>

                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Adhar Number</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='Adhar Number'
                              value={panelist.panelistAadhar}
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
                              placeholder='Institute Name'
                              value={panelist.panelistInstiID}
                            //value={panelist.panelistInstiID.instName}
                            />
                          </div>
                        </div>

                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Domain</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='Domain'
                              value={panelist.panelistDomain}
                            />
                          </div>
                        </div>

                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Degree</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='Degree'
                              value={panelist.panelistDegree}
                            />
                          </div>
                        </div>

                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Designation</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='Designation'
                              value={panelist.panelistDesignation}
                            />
                          </div>
                        </div>

                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Total Years of Experience</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='Experience'
                              value={panelist.panelistTotalExp}
                            />
                          </div>
                        </div>

                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Total Ideas Evaluated</label>
                            <input
                              type='text'
                              className='form-control cust-input'
                              id='studentName'
                              placeholder='Total Ideas Evaluated'
                              value={panelist.panelistIdeaEvaluated}
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


                {/* ... */}
                {activeSection === "evaluated" && (
                  <div className='section-content'>
                    <h3>Evaluated Ideas</h3>
                    <hr style={{ borderBottom: '2px solid #000', margin: '15px 0 30px 0' }} />

                    <div class="row">

                      <div class="col-sm-6">
                        <div class="card" style={{ border: '1.4px solid #EDEEEE', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                          <div class="card-body">
                            <h5 class="card-title">Idea ID:</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content. The catchy tune has now led to countless memes, parodies and reels, and has even given birth to its own dance craze.</p>
                            <h6>Date of Evaluation: </h6>
                          </div>
                        </div>
                      </div>



                      <div class="col-sm-6">
                        <div class="card" style={{ border: '1.4px solid #EDEEEE', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                          <div class="card-body">
                            <h5 class="card-title">Idea ID:</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content. The catchy tune has now led to countless memes, parodies and reels, and has even given birth to its own dance craze.</p>
                            <h6>Date of Evaluation:</h6>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/*.................................................... */}
                {activeSection === "assigned" && (
                  <div className='section-content'>
                    <h3>Assigned Ideas</h3>
                    <hr style={{ borderBottom: '2px solid #000', margin: '15px 0 30px 0' }} />
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="card" style={{ border: '1.4px solid #EDEEEE', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                          <div class="card-body">
                            <h5 class="card-title">Idea ID:</h5>
                            <p class="card-text">With supporting text </p>
                            <p class="card-text">The catchy tune has now led to countless memes, parodies and reels, and has even given birth to its own dance craze.</p>
                            <button type='submit' className='btn btn-custom' style={{ fontSize: 'small' }}>Evaluate</button>
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="card" style={{ border: '1.4px solid #EDEEEE', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                          <div class="card-body">
                            <h5 class="card-title">Idea ID:</h5>
                            <p class="card-text">With supporting text </p>
                            <p class="card-text">The catchy tune has now led to countless memes, parodies and reels, and has even given birth to its own dance craze.</p>

                            <button type='submit' className='btn btn-custom' style={{ fontSize: 'small' }}>Evaluate</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/*.................................................... */}
                {activeSection === "pass" && (
                  <div className='section-content'>
                    <h3>Change Password</h3>
                    <hr style={{ borderBottom: '2px solid #000', margin: '15px 0 30px 0' }} />
                    {error && <div className='alert alert-danger' role='alert'>{error}</div>}
                    {message && <div className='alert alert-success' role='alert'>{message}</div>}
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Old Password</label>
                            <input
                              className={'form-control ' + (error ? 'is-invalid' : '')}
                              placeholder='Enter Old Password'
                              type='password'
                              value={oldPassword}
                              onChange={(e) => setOldPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>New Password</label>
                            <input
                              className={'form-control ' + (error ? 'is-invalid' : '')}
                              placeholder='Enter New Password'
                              type='password'
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className='col-12 col-xl-4 col-lg-4 mb-2'>
                          <div className='form-group'>
                            <label className='cust-label'>Confirm Password</label>
                            <input
                              className={'form-control ' + (error ? 'is-invalid' : '')}
                              placeholder='Confirm your Password'
                              type='password'
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <button type='submit' className='btn btn-custom'>
                        Confirm
                      </button>
                    </form>
                  </div>
                )}


              </main>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};