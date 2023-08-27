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
                </div>
              </>
            ) : (
              <h4>Loading user details...</h4>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
