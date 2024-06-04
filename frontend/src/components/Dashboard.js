import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import StudentDashboard from "./StudentDashboard";
import PanelistDashboard from "./PanelistDashboard";
import ChampionDashboard from "./ChampionDashboard";
import CatylistDashboard from "./CatylistDashboard";
import axios from "axios";
import config from "./config";

const apiUrl = `${config.backendUrl}/dashboard/`;

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      return (window.location.href = "/Login");
    } else {
      (async () => {
        try {
          const { data } = await axios.get(apiUrl, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });
          setUserDetails(data);
          setIsLoading(false); // Update loading state after setting userDetails
        } catch (error) {
          console.error("Not auth | Error:", error);
          setIsLoading(false); // Also update loading state on error
        }
      })();
    }
  }, []);

  const renderDashboard = () => {
    if (!isLoading && userDetails.user_type) { // Check if isLoading is false and userDetails.user_type exists
      if (userDetails.user_type === "Student") {
        return <StudentDashboard userDetails={userDetails} />;
      } else if (userDetails.user_type === "Panelist") {
        return <PanelistDashboard userDetails={userDetails} />;
      } else if (userDetails.user_type === "Catylist") {
        return <CatylistDashboard userDetails={userDetails} />;
      } else if (userDetails.user_type === "Champion") {
        return <ChampionDashboard userDetails={userDetails} />;
      } else {
        return null; // Handle other user types if needed
      }
    } else {
      return <p>Loading...</p>; // Show loading message while waiting for API response
    }
  };

  return (
    <>
      <Header />
      <ContactModal />
      <div className="section-padding">
        <div className="container">{renderDashboard()}</div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
