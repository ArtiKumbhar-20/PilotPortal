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

          // console.log("API Response:", data);
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
  const loggedInUserId = userDetails.student_id;
  useEffect(() => {
    // data fetching
    axios
      .get(`http://127.0.0.1:8000/StudGetData/${loggedInUserId}/`)
      .then((response) => {
        setStud(response.data.stud);
      })
      .catch((error) => {
        console.error("Error fetching submitted data:", error);
      });
  }, [loggedInUserId]);

  // idea
  const [idea, setIdea] = useState({});
  useEffect(() => {
    // data fetching
    axios
      .get(`http://127.0.0.1:8000/IdeaGetData/${loggedInUserId}/`)
      .then((response) => {
        setIdea(response.data.idea);
      })
      .catch((error) => {
        console.error("Error fetching submitted data:", error);
      });
  }, [loggedInUserId]);

  return (
    <>
      <Header />
      <ContactModal />
      <div className='section-padding'>
        <div className='container'>
          <div className='mt-5 text-center'>
            {userDetails ? (
              <>
                <h3>
                  Hi, {userDetails.first_name} {userDetails.last_name} (
                  {userDetails.user_id})
                </h3>
                <h3>{userDetails.message}</h3>
                <br />
                <div className='row'>
                  <div className='col-4'>
                    <h4>Username: {userDetails.username}</h4>
                  </div>
                  <div className='col-4'>
                    <h4>Email: {userDetails.email}</h4>
                  </div>
                  <div className='col-4'>
                    <h4>User Type: {userDetails.user_type}</h4>
                  </div>
                  <div className='col-4'>
                    <h4>Student ID: {userDetails.student_id}</h4>
                  </div>
                </div>
              </>
            ) : (
              <h4>Loading user details...</h4>
            )}
          </div>
        </div>
      </div>

      {/* Student dashboard */}
      <div class="wrapper">
        {/* sidebar */}
        <div class="sidebar">
          <a href="#" class="sidebar_item">Profile</a>
          <a href="#" class="sidebar_item">Team Members</a>
          <a href="#" class="sidebar_item">Submitted Ideas</a>
          <a href="#" class="sidebar_item">Idea Status</a>
          <a href="#" class="sidebar_item">Logout</a>
        </div>

        {/* vertical line */}
        <div class="v1"></div>

        {/* main content */}
        <div class="main">
          <div id='content'>

            <h3>Student Details</h3>

            <div className='row'>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Student FName :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdFname}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Student LName :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdLname}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Date of Birth :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdDOB}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Gender :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdGender}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Mobile Number :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdMobile}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Whatsapp Number :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdWhatsapp}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Email : <span style={{ color: "#f43f5e" }}>{stud.Email}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Student Address :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdAddress}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  City :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdAddrCity}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  District :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdAddrDist}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  State :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdAddrState}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Country :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdAddrCountry}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Pincode :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdAddrPin}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Institute Name :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdInstiID}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Stream :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdStream}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Branch :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdBranch}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  PassOut Year :{" "}
                  <span style={{ color: "#f43f5e" }}>{stud.stdPassoutYear}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Tried StartUp Before :
                  <span style={{ color: "#f43f5e" }}>
                    {stud.stdTriedStartupBefore}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* idea submission */}
          <div id='content'>
            <h3>Idea Details</h3>
            <div className='row'>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                Final Problem Statement:{" "}
                  <span style={{ color: "#f43f5e" }}>{idea.ideaTeamFinalPS}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                Problem Statement Domain:{" "}
                  <span style={{ color: "#f43f5e" }}>{idea.ideaTeamDomain}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                Final Solution:{" "}
                  <span style={{ color: "#f43f5e" }}>{idea.ideaTeamFinalSoln}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                Team Offering Type:{" "}
                  <span style={{ color: "#f43f5e" }}>{idea.ideaTeamOfferingType}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                Technical Requirements:{" "}
                  <span style={{ color: "#f43f5e" }}>{idea.TeamTechReq}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                Hardware Requirements:{" "}
                  <span style={{ color: "#f43f5e" }}>{idea.ideaTeamHardwareReq}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                Non-Technical Requirements: {" "}
                  <span style={{ color: "#f43f5e" }}>{idea.ideaTeamNonTechReq}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Estimated Time for implementing your idea:{" "}
                  <span style={{ color: "#f43f5e" }}>{idea.ideaTeamProtoTime}</span>
                </label>
              </div>
              <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                <label className='labelStyle'>
                  Estimated Cost for implementing your idea:
                  <span style={{ color: "#f43f5e" }}>
                    {idea.ideaTeamProtoCost}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
