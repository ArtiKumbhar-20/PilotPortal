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

  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get(apiUrl, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });

          console.log("API Response:", data);
          setUserDetails(data);
        } catch (e) {
          console.log("not auth");
          console.log("Error:", e);
        }
      })();
    }
  }, []);

  // stud's
  const [stud, setStud] = useState({});
  const loggedInStudId = userDetails.student_id;
  const loggedInPanelId = userDetails.paneID;
  useEffect(() => {
    if (userDetails.user_type === "Student") {
      // student data fetching
      axios
        .get(`${config.backendUrl}/StudGetData/${loggedInStudId}/`)
        .then((response) => {
          setStud(response.data.stud);
          console.log("Student Data : ", response.data.stud);
        })
        .catch((error) => {
          console.error("Error fetching submitted data:", error);
        });
    } else {
      // Panelist data fetching
      axios
        .get(`${config.backendUrl}/PanelGetData/${loggedInPanelId}/`)
        .then((response) => {
          console.log("PanelGetData Response:", response.data.stud);
          setStud(response.data.stud);
        })
        .catch((error) => {
          console.error("Error fetching submitted data:", error);
        });
    }
  }, [loggedInPanelId]);

  // idea
  const [idea, setIdea] = useState({});
  useEffect(() => {
    // data fetching
    axios
      .get(`${config.backendUrl}/IdeaGetData/${loggedInStudId}/`)
      .then((response) => {
        setIdea(response.data.idea);
      })
      .catch((error) => {
        console.error("Error fetching submitted data:", error);
      });
  }, [loggedInStudId]);

  // team
  const [teams, setTeams] = useState({});

  useEffect(() => {
    // data fetching
    axios
      .get(`${config.backendUrl}/TeamInfo/${loggedInStudId}/`)
      .then((response) => {
        setTeams(response.data.teams);
      })
      .catch((error) => {
        console.error("Error fetching submitted data:", error);
      });
  }, [loggedInStudId]);


  const [activeSection, setActiveSection] = useState("profile"); // Default active section

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header />
      <ContactModal />
      <div className='section-padding'>
        <div className='container'>
          {/* Top Welcome Header */}
          <div className='stud_dashboard_header'>
            {userDetails ? (
              <>
                <div className='row'>
                  <div className='message col-12'>
                    <h3 className="pb-2">
                      Hi, {userDetails.first_name} {userDetails.last_name}
                      {/* ({userDetails.user_id}) */}
                      <br />
                      {userDetails.message}
                    </h3>
                  </div>
                  <br />
                  {/* <div className='data col-xl-6 col-lg-6 col-sm-12'>
                    <h4>Username: {userDetails.username}</h4>
                  </div>
                  <div className='data col-xl-6 col-lg-6 col-sm-12'>
                    <h4>Email: {userDetails.email}</h4>
                  </div>
                  <div className='data col-xl-6 col-lg-6 col-sm-12'>
                    <h4>User Type: {userDetails.user_type}</h4>
                  </div>
                  <div className='data col-xl-6 col-lg-6 col-sm-12'>
                    <h4>Student ID: {userDetails.student_id}</h4>
                  </div> */}
                </div>
              </>
            ) : (
              <h4>Loading user details...</h4>
            )}
          </div>
          {/* Dashboard */}
          <div id='sidebar-container-cust'>
            <nav
              id='sidebar-cust'
              className='col-md-3 col-lg-3 d-md-block bg-primary sidebar'
            >
              <div className='position-sticky'>
                <ul className='nav flex-column'>
                  <li
                    className={`nav-item ${activeSection === "profile" ? "active" : ""
                      }`}
                  >
                    <a
                      className='nav-link'
                      href='#profile'
                      onClick={() => handleSidebarClick("profile")}
                    >
                      Profile
                    </a>
                  </li>
                  <li
                    className={`nav-item ${activeSection === "team-members" ? "active" : ""
                      }`}
                  >
                    <a
                      className='nav-link'
                      href='#team-members'
                      onClick={() => handleSidebarClick("team-members")}
                    >
                      Team Members
                    </a>
                  </li>
                  <li
                    className={`nav-item ${activeSection === "submitted-ideas" ? "active" : ""
                      }`}
                  >
                    <a
                      className='nav-link'
                      href='#submitted-ideas'
                      onClick={() => handleSidebarClick("submitted-ideas")}
                    >
                      Submitted Ideas
                    </a>
                  </li>
                  <li
                    className={`nav-item ${activeSection === "idea-status" ? "active" : ""
                      }`}
                  >
                    <a
                      className='nav-link'
                      href='#idea-status'
                      onClick={() => handleSidebarClick("idea-status")}
                    >
                      Idea Status
                    </a>
                  </li>
                  <li
                    className={`nav-item ${activeSection === "logout-btn" ? "active" : ""
                      }`}
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
              {activeSection === "profile" && (
                <div className='section-content'>
                  <h3 className='pb-3'>Student Details</h3>
                  <form>
                    <div className='row'>
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

              {activeSection === "team-members" && (
                <div className='section-content'>
                  <h3 className='pb-3'>Team Details</h3>
                  <form>
                    <div className='row'>
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
                            value={teams.teamID}
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

              {activeSection === "submitted-ideas" && (
                <div className='section-content'>
                  <h3>Idea Details</h3>
                  {/* Submitted Ideas content */}
                </div>
              )}

              {activeSection === "idea-status" && (
                <div className='section-content'>
                  <h3>Idea Status</h3>
                  {/* Idea Status content */}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
