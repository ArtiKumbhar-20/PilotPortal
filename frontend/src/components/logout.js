import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "./config";
const apiUrl = `${config.backendUrl}/logout/`; // Construct Backend API URL

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          apiUrl,
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          { withCredentials: true }
        );

        console.log("logout", data);
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        navigate("/login");
      } catch (e) {
        console.log("logout not working");
      }
    })();
  }, [navigate]);

  return <div></div>;
};
