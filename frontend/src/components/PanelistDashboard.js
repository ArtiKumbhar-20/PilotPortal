import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

import { useNavigate } from 'react-router-dom';

const PanelistDashboard = ({ userDetails }) => {

  //paas ideaID 
  let navigate = useNavigate(); 

  const handleEvaluate = (ideaID, panelistID, ideaTeamName,ideaTeamID) => {
    // Constructing the URL with query parameters
    const queryParams = new URLSearchParams({
      ideaID,
      panelistID, 
      ideaTeamName,
      ideaTeamID,
    });
      // console.log(queryParams)  
    // Redirect to /ideaevaluation with the constructed query parameters
    navigate(`/ideaevaluation?${queryParams.toString()}`);
  };
  


  const loggedInPanelId = userDetails.paneID;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [panelist, setPanelist] = useState({});
  const [ideas, setIdeas] = useState([]); // State for holding ideas
  const [evaluatedIdeas, setEvaluatedIdeas] = useState([]); // State for holding evaluated ideas
  const [activeSection, setActiveSection] = useState("profile");

  

  useEffect(() => {
    // Fetch and set authentication token from wherever you store it (e.g., local storage)
    const authToken = localStorage.getItem("authToken");
    // Use authToken as needed in your component
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("All fields must be filled");
      setMessage("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      setMessage("");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/home/changepassword/",
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (response.status === 200) {
        setMessage(response.data.message);
        setError("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");

        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else {
        setError("Old password is incorrect.");
        setMessage("");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
      setMessage("");
    } finally {
      setLoading(false);
    }
  };
//profile api
  useEffect(() => {
    const apiUrl = `${config.backendUrl}/PanelGetData/${userDetails.paneID}/`;
    axios
     .get(apiUrl)
     .then((response) => {
        setPanelist(response.data.panelist);
      })
     .catch((error) => {
        console.error("Error fetching panelist data:", error);
      });

    // Fetching ideas data
    const ideasApiUrl = `http://localhost:8000/panelist/${loggedInPanelId}/ideas/`;
    axios
     .get(ideasApiUrl)
     .then((response) => {
        const filteredIdeas = response.data.filter(idea => idea.evaluateStatus === 'yes');
        setIdeas(filteredIdeas); // Set the fetched ideas here
      })
     .catch((error) => {
        console.error("Error fetching ideas data:", error);
      });
      
      // Fetching evaluated ideas data
      const evaluatedIdeasApiUrl = `http://localhost:8000/evaluated-ideas/${loggedInPanelId}/`;
      axios
        .get(evaluatedIdeasApiUrl)
        .then((response) => {
          setEvaluatedIdeas(response.data);
        })
        .catch((error) => {
          console.error("Error fetching evaluated ideas data:", error);
        });
    }, [userDetails.paneID]);

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };
  

  return (
    <div>
      <h1 style={{ fontSize: "24px", textAlign: "center", color: "gray" }}>
        Welcome, {userDetails.first_name}!
      </h1>
      <br />
      <div id="sidebar-container-cust">
        <nav
          id="sidebar-cust"
          className="col-md-3 col-lg-3 d-md-block bg-primary sidebar"
        >
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li
                className={`nav-item ${
                  activeSection === "profile" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#profile"
                  onClick={() => handleSidebarClick("profile")}
                >
                  Profile
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "evaluated" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#evaluated"
                  onClick={() => handleSidebarClick("evaluated")}
                >
                  Evaluated Ideas
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "assigned" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#assigned"
                  onClick={() => handleSidebarClick("assigned")}
                >
                  Assigned Ideas
                </a>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "pass" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#pass"
                  onClick={() => handleSidebarClick("pass")}
                >
                  Change Password
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main
          id="panelist-content-cust"
          className="col-md-9 ms-sm-auto col-lg-9 px-md-4"
        >
          {/* Render content based on activeSection */}
          {activeSection === "profile" && (
            <div className="section-content">
              <h3>Panelist Details</h3>
              <hr
                style={{
                  borderBottom: "2px solid #000",
                  margin: "15px 0 30px 0",
                }}
              />
              <form>
                <div className="row">
                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">First Name</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="First Name"
                        value={panelist.panelistFname}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Last Name"
                        value={panelist.panelistLname}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Date of Birth</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Date of Birth"
                        value={panelist.panelistDOB}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Gender</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Gender"
                        value={panelist.panelistGender}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Email</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Email"
                        value={panelist.panelistEmail}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Mobile Numbers"
                        value={panelist.panelistMobile}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Whatsapp Number</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Whatsapp Number"
                        value={panelist.panelistWhatsapp}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Adhar Number</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Adhar Number"
                        value={panelist.panelistAadhar}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
    <div className="form-group">
        <label className="cust-label">Institute Name</label>
        <input
            type="text"
            className="form-control cust-input"
            id="studentName"
            placeholder="Institute Name"
            value={panelist?.panelistInstiID?.instName || ''}
        />
    </div>
</div>


                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Domain</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Domain"
                        value={panelist.panelistDomain}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Degree</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Degree"
                        value={panelist.panelistDegree}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Designation</label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Designation"
                        value={panelist.panelistDesignation}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">
                        Total Years of Experience
                      </label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Experience"
                        value={panelist.panelistTotalExp}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">
                        Total Ideas Evaluated
                      </label>
                      <input
                        type="text"
                        className="form-control cust-input"
                        id="studentName"
                        placeholder="Total Ideas Evaluated"
                        value={panelist.panelistIdeaEvaluated}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-custom">
                  Update Details
                </button>
              </form>
            </div>
          )}

          {/* ... */}
          {activeSection === "evaluated" && (
            <div className="section-content">
              <h3>Evaluated Ideas</h3>
              <hr
                style={{
                  borderBottom: "2px solid #000",
                  margin: "15px 0 30px 0",
                }}
              />
              <div className="row">
                {evaluatedIdeas.map((idea) => (
                  <div key={idea.evalID} className="col-sm-6">
                    <div
                      className="card"
                      style={{
                        border: "1.4px solid #EDEEEE",
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        marginBottom: "15px",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Idea ID: {idea.ideaID}</h5>
                        <p className="card-text">
                          <b>Problem Statement: </b>{idea.ideaTeamPSdetail}
                        </p>
                        <h6>Date of Evaluation: {idea.recordCreatedOn}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/*.................................................... */}
          {activeSection === "assigned" && (
        <div className="section-content">
          <h3>Assigned Ideas</h3>
          <hr style={{borderBottom: "2px solid #000",margin: "15px 0 30px 0"}}/>
          <div className="row">
            {ideas.map((idea) => (
              
              <div key={idea.ideaID} className="col-sm-6">
                <div className="card" style={{border: "1.4px solid #EDEEEE", borderRadius: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",marginBottom:"15px"}}>
                  <div className="card-body">
                    <h5 className="card-title">Idea ID: {idea.ideaID} </h5>
                    <p className="card-text"><b>Idea Team Name:</b> {idea.ideaTeamName}</p>
                    <p className="card-text"><b>Problem Statement:</b> 
                       {idea.ideaTeamPSdetail}
                    </p>
                    <button
                      type="submit"
                      className="btn btn-custom "
                      style={{ fontSize: "small" }}
                      onClick={() => handleEvaluate(idea.ideaID, idea.panelistID, idea.ideaTeamName,idea.ideaTeamID)}
                    >
                      Evaluate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
          {/*.................................................... */}
          {activeSection === "pass" && (
            <div className="section-content">
              <h3>Change Password</h3>
              <hr
                style={{
                  borderBottom: "2px solid #000",
                  margin: "15px 0 30px 0",
                }}
              />
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              {message && (
                <div className="alert alert-success" role="alert">
                  {message}
                </div>
              )}
              <br />
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Old Password</label>
                      <input
                        className={
                          "form-control cust-input " + (error ? "is-invalid" : "")
                        }
                        placeholder="Enter Old Password"
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">New Password</label>
                      <input
                        className={
                          "form-control cust-input " + (error ? "is-invalid" : "")
                        }
                        placeholder="Enter New Password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 col-lg-4 mb-2">
                    <div className="form-group">
                      <label className="cust-label">Confirm Password</label>
                      <input
                        className={
                          "form-control cust-input " + (error ? "is-invalid" : "")
                        }
                        placeholder="Confirm your Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-custom">
                  Confirm
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PanelistDashboard;
