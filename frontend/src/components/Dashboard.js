import Header from "../components/Header";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

const apiUrl = `${config.backendUrl}/dashboard/`; // Construct Backend API URL

export const Dashboard = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
  };
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

   // team
   const [team, setTeam] = useState({});
   const logedInUserId = userDetails.team_id;
   useEffect(() => {
     // data fetching
     axios
       .get(`http://127.0.0.1:8000/TeamGetData/${logedInUserId}/`)
       .then((response) => {
         setTeam(response.data.team);
       })
       .catch((error) => {
         console.error("Error fetching submitted data:", error);
       });
   }, [logedInUserId]);

  const [activeContent, setActiveContent] = useState('content');

  const toggleContent = (contentId) => {
    setActiveContent(contentId);
  };


  return (
    <>
      <Header />
      <ContactModal />
      <div className='section-padding container'>

        {/* Dashboard header section */}
        <div className='dashboard_header'>
            {userDetails ? (
              <>
                <div className='row'>
                  <div className="message col-12">
                  <h3>
                    Hi, {userDetails.first_name} {userDetails.last_name} (
                    {userDetails.user_id})
                  </h3>
                  <h3>{userDetails.message}</h3>
                  </div>
                  <br />
                  <div className='data col-xl-6 col-lg-6 col-sm-12'>
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
                  </div>
                </div>
              </>
            ) : (
              <h4>Loading user details...</h4>
            )}
        </div>

        {/* sidebar */}
        <div class="sidebar">
          <a href="#content" class="sidebar_item" onClick={() => toggleContent('content')}>
            Profile
          </a>
          <a href="#TeamDetail" class="sidebar_item" onClick={() => toggleContent('TeamDetail')}>
            Team Members
          </a>
          <a href="#ideaDetail" class="sidebar_item" onClick={() => toggleContent('ideaDetail')}>Submitted Ideas</a>
          <a href="#" class="sidebar_item">Idea Status</a>
          <a href="#" class="sidebar_item">Logout</a>
        </div>

        <div class="wrapper">
          {/* main content */}
          <div class="main container">
            <div id='content' className={`content-section ${activeContent === 'content' ? 'active' : ''}`}>

              <br />
              {/* Student details */}
              <h3>Student Details</h3>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Student FName :</b>{" "}
                    <span>{stud.stdFname}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b> Student LName :</b>{" "}
                    <span>{stud.stdLname}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Date of Birth :</b>{" "}
                    <span>{stud.stdDOB}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Gender :</b>{" "}
                    <span>{stud.stdGender}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Mobile Number :</b>{" "}
                    <span>{stud.stdMobile}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Whatsapp Number :</b>{" "}
                    <span>{stud.stdWhatsapp}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Email : </b><span>{stud.Email}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Student Address :</b>{" "}
                    <span>{stud.stdAddress}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>City :</b>{" "}
                    <span>{stud.stdAddrCity}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>District :</b>{" "}
                    <span>{stud.stdAddrDist}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>State :</b>{" "}
                    <span>{stud.stdAddrState}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Country :</b>{" "}
                    <span>{stud.stdAddrCountry}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Pincode :</b>{" "}
                    <span>{stud.stdAddrPin}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Institute Name :</b>{" "}
                    <span>{stud.stdInstiID}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Stream :</b>{" "}
                    <span>{stud.stdStream}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Branch :</b>{" "}
                    <span>{stud.stdBranch}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>PassOut Year :</b>{" "}
                    <span>{stud.stdPassoutYear}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    <b>Tried StartUp Before :</b>
                    <span>
                      {stud.stdTriedStartupBefore}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <br />
            {/* team details */}
            <div id='TeamDetail' className={`content-section ${activeContent === 'TeamDetail' ? 'active' : ''}`}>
              <h3>Team Details</h3>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Team Name :{" "}
                    <span  >{team.teamName}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Team CEO :{" "}
                    <span  >{team.teamCEO}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Team COO :{" "}
                    <span  >{team.teamCOO}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Team CMO :{" "}
                    <span  >{team.teamCMO}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Team CTO :{" "}
                    <span  >{team.teamCTO}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Team CFO :{" "}
                    <span  >{team.teamCFO}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Team InstiID : <span  >{team.teamInstiId}</span>
                  </label>
                </div>
              </div>
            </div>

            <br />
            {/* idea submission */}
            <div id='ideaDetail'className={`content-section ${activeContent === 'ideaDetail' ? 'active' : ''}`}>
              <h3>Idea Details</h3>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                  Final Problem Statement:{" "}
                    <span  >{idea.ideaTeamFinalPS}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                  Problem Statement Domain:{" "}
                    <span  >{idea.ideaTeamDomain}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                  Final Solution:{" "}
                    <span  >{idea.ideaTeamFinalSoln}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                  Team Offering Type:{" "}
                    <span  >{idea.ideaTeamOfferingType}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                  Technical Requirements:{" "}
                    <span  >{idea.TeamTechReq}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                  Hardware Requirements:{" "}
                    <span  >{idea.ideaTeamHardwareReq}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                  Non-Technical Requirements: {" "}
                    <span  >{idea.ideaTeamNonTechReq}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Estimated Time for implementing your idea:{" "}
                    <span  >{idea.ideaTeamProtoTime}</span>
                  </label>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                  <label className='labelStyle'>
                    Estimated Cost for implementing your idea:
                    <span  >
                      {idea.ideaTeamProtoCost}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
