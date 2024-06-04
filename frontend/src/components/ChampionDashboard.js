import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

const ChampionDashboard = ({ userDetails }) => {
  const [panelist, setPanelist] = useState({});
  const [activeSection, setActiveSection] = useState("profile");

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

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
  }, [userDetails.paneID]);

  return (
    <div>
      <h1>Welcomeee, {userDetails.first_name}!</h1>
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
                className={`nav-item ${activeSection === "pass" ? "active" : ""}`}
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
          {activeSection === "profile" && (
            <div className="section-content">
              <h3>Panelist Details</h3>
              {/* Add profile content */}
            </div>
          )}

          {activeSection === "evaluated" && (
            <div className="section-content">
              <h3>Evaluated Ideas</h3>
              {/* Add evaluated ideas content */}
            </div>
          )}

          {activeSection === "assigned" && (
            <div className="section-content">
              <h3>Assigned Ideas</h3>
              {/* Add assigned ideas content */}
            </div>
          )}

          {activeSection === "pass" && (
            <div className="section-content">
              <h3>Change Password</h3>
              {/* Add change password form */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ChampionDashboard;
