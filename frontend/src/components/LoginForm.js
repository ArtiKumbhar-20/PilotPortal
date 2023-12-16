import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "./formValidator";
import config from "./config";
const apiUrl = `${config.backendUrl}/token/`; // Construct Backend API URL

export const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    // Check if the user is already logged in
    if (localStorage.getItem("access_token")) {
      navigate("/Dashboard");
    }
  }, [navigate]);

  const submit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateLoginForm(username, password);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const user = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        apiUrl,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );

      const data = response.data;

      // Set tokens and navigate to dashboard
      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data["access"]}`;
      navigate("/Dashboard");
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 400 || error.response.status === 401)
      ) {
        console.error("Inside Catch", error);
        setLoginError("Invalid username or password");
      } else {
        console.error("Login failed", error);
        setLoginError("Invalid username or password");
      }
    }
  };

  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          <div className='col-lg-6 mb-30 mx-auto'>
            <form
              onSubmit={submit}
              className='comment-form-inner contact-form wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
            >
              <h2 className='title'>Log In</h2>
              {/* Display the login error message */}
              {loginError && (
                <div className='alert alert-danger' role='alert'>
                  {loginError}
                </div>
              )}
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <input
                    className={
                      "form-control " + (errors.username ? "is-invalid" : "")
                    }
                    aria-describedby='emailHelp'
                    placeholder='*Username'
                    name='username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && (
                    <div className='invalid-feedback'>{errors.username}</div>
                  )}
                </div>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <input
                    className={
                      "form-control " + (errors.password ? "is-invalid" : "")
                    }
                    name='password'
                    type='password'
                    aria-describedby='emailHelp'
                    placeholder='*Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>{errors.password}</div>
                  )}
                </div>
              </div>

              <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit'>
                  <span>Submit</span>
                </button>
              </div>
              <div className='col-12 text-center mt-4'>
                <p className='forgot'>Forgot Password ?</p>
                <h6>
                  <a href='123.html'>Click here</a> to reset password
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
