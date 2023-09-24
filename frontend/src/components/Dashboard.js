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
      section.scrollIntoView({ behavior: "smooth" });
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
  const loggedInStudId = userDetails.student_id;
  const loggedInPanelId = userDetails.paneID;
  useEffect(() => {
    if (userDetails.user_type == "Student") {
      // student data fetching
      axios
        .get(`http://127.0.0.1:8000/StudGetData/${loggedInStudId}/`)
        .then((response) => {
          console.log("StudGetData Response:", response.data.stud);
          setStud(response.data.stud);
        })
        .catch((error) => {
          console.error("Error fetching submitted data:", error);
        });
    } else {
      // Panelist data fetching
      axios
        .get(`http://127.0.0.1:8000/PanelGetData/${loggedInPanelId}/`)
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
      .get(`http://127.0.0.1:8000/IdeaGetData/${loggedInStudId}/`)
      .then((response) => {
        setIdea(response.data.idea);
      })
      .catch((error) => {
        console.error("Error fetching submitted data:", error);
      });
  }, [loggedInStudId]);

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

  const [activeContent, setActiveContent] = useState("content");

  const toggleContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <>
      <Header />
      <ContactModal />
      <div className='stud_section-padding container'>
        {/* Dashboard header section */}
        <div className='stud_dashboard_header'>
          {userDetails ? (
            <>
              <div className='row'></div>
            </>
          ) : null}

          {/* sidebar */}
          <div class='stud_sidebar'>
            <a
              href='#content'
              class='stud_sidebar_item'
              onClick={() => toggleContent("content")}
            >
              Profile
            </a>
            <a
              href='#TeamDetail'
              class='stud_sidebar_item'
              onClick={() => toggleContent("TeamDetail")}
            >
              Team Members
            </a>
            <a
              href='#ideaDetail'
              class='stud_sidebar_item'
              onClick={() => toggleContent("ideaDetail")}
            >
              Submitted Ideas
            </a>
            <a href='#' class='stud_sidebar_item'>
              Idea Status
            </a>
            <a href='#' class='stud_sidebar_item'>
              Logout
            </a>
          </div>

          <div class='stud_wrapper'>
            {/* main content */}
            <div class='stud_main container'>
              <div
                id='content'
                className={`content-section ${
                  activeContent === "content" ? "active" : ""
                }`}
              >
                <br />
                {/* Student details */}
                <h3>Student Details</h3>
                <div className='row'>
                  <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                    <label className='labelStyle'>
                      <b>Student FName :</b> <span>{stud.stdFname}</span>
                    </label>
                  </div>
                  <div className='col-12 col-xl-6 col-lg-6 col-sm-12 mb-3'>
                    <label className='labelStyle'>
                      <b> Student LName :</b> <span>{stud.stdLname}</span>
                    </label>
                  </div>
                  {/* Other student details */}
                </div>
              </div>

              <br />
              {/* team details */}
              <div
                id='TeamDetail'
                className={`content-section ${
                  activeContent === "TeamDetail" ? "active" : ""
                }`}
              >
                <h3>Team Details</h3>
                <div className='row'>{/* Team details */}</div>
              </div>

              <br />
              {/* idea submission */}
              <div
                id='ideaDetail'
                className={`content-section ${
                  activeContent === "ideaDetail" ? "active" : ""
                }`}
              >
                <h3>Idea Details</h3>
                <div className='row'>{/* Idea details */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
