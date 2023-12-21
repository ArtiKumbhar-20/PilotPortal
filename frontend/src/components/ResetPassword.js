import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import config from './config';
import { validatePassword } from "./formValidator";

const apiUrl = `${config.backendUrl}/change-password/`;

export const ResetPassword = () => {
  const { otp, email } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const resetPassword = async () => {
    try {
      const response = await axios.post(`${apiUrl}${otp}/${email}/`, {
        new_password: password,
        confirm_password: confirmPassword,
        email,
      });

      if (response.status === 200) {
        setMessage(response.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (response.status === 400) {
        setError(response.data.error);
      }
    } catch (error) {
      setError('Failed to reset password. Please try again.');
    }
  };

  const submitPassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError('Please enter password in both fields');
      return;
    }

  const passwordValidationError = validatePassword(password);
  if (passwordValidationError) {
    setError(passwordValidationError);
    return;
  }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    await resetPassword();
  };


  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          <div className='col-lg-6 mb-30 mx-auto'>
            {!message ? (
              <form
                onSubmit={submitPassword}
                className='comment-form-inner contact-form wow fadeIn'
                data-wow-duration='1.5s'
                data-wow-delay='.1s'
              >
                <h2 className='title'>Reset Password</h2>
                {error && <div className='alert alert-danger' role='alert'>{error}</div>}
                <div className='row'>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                    <input
                      className={'form-control ' + (error ? 'is-invalid' : '')}
                      placeholder='*New Password
                      (Minimum 8 characters, with uppercase, lowercase, and a symbol)'
                      name='password'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                    <input
                      className={'form-control ' + (error ? 'is-invalid' : '')}
                      placeholder='*Confirm Password'
                      name='confirmPassword'
                      type='password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className='col-12 text-center mt-4'>
                  <button className='btn btn-style-one' type='submit'>
                    <span>Submit</span>
                  </button>
                </div>
                {/* <div className='row'>
                  <div className='col-12 col-xl-12 col-lg-12'>
                    <p className='text-muted mt-3'>
                      Password must contain at least 8 characters including uppercase, lowercase, and a symbol.
                    </p>
                  </div>
                </div> */}
              </form>
            ) : (
              <div className='alert alert-success' role='alert'>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;