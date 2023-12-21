import React, { useState } from 'react';
import config from './config';
import { useNavigate } from 'react-router-dom';
import { validateOTP } from "./formValidator";

export const ForgetPassword = () => {
  const apiUrl = `${config.backendUrl}/forget-password/`;
  const otpVerifyUrl = `${config.backendUrl}/verify-otp/`; 
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false); 
  const navigate = useNavigate();

  const submitEmail = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
        setEmailSent(true);
      } else {
        setError(data.error || 'Failed to send reset email. Please try again.');
        setMessage('');
      }
    } catch (error) {
      setError('An error occurred.');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
  
    const otpValidationResult = validateOTP(otp); // Validate entered OTP
  
    if (otpValidationResult) {
      setError(otpValidationResult);
      setMessage('');
      return; 
    }

    try {
      const response = await fetch(otpVerifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }), 
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
        setTimeout(() => {
          navigate(`/ResetPass/${otp}/${email}`); 
        }, 1000);
      } else {
        setError(data.error || 'Failed to verify OTP. Please try again.');
        setMessage('');
      }
    } catch (error) {
      setError('An error occurred.');
      setMessage('');
    }
  };

  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          <div className='col-lg-6 mb-30 mx-auto'>
            {!emailSent ? (
              <form
                onSubmit={submitEmail}
                className='comment-form-inner contact-form wow fadeIn'
                data-wow-duration='1.5s'
                data-wow-delay='.1s'
              >
                <h2 className='title'>Forget Password</h2>
                {error && <div className='alert alert-danger' role='alert'>{error}</div>}
                {message && <div className='alert alert-success' role='alert'>{message}</div>}
                <div className='row'>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                    <input
                      className={'form-control ' + (error ? 'is-invalid' : '')}
                      placeholder='*Email' 
                      name='email' 
                      type='email' 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-12 text-center mt-4'>
                  <button className='btn btn-style-one' type='submit' disabled={loading} style={{ color: 'white',':hover': { color: 'white' }}}>
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={verifyOTP}
                className='comment-form-inner contact-form wow fadeIn'
                data-wow-duration='1.5s'
                data-wow-delay='.1s'
              >
                <h2 className='title'>Verify OTP</h2>
                {error && <div className='alert alert-danger' role='alert'>{error}</div>}
                {message && <div className='alert alert-success' role='alert'>{message}</div>}
                <div className='row'>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                    <input
                      className={'form-control ' + (error ? 'is-invalid' : '')}
                      placeholder='*Enter OTP'
                      name='otp'
                      type='text' 
                      pattern='\d*' // Ensure only numeric input is allowed
                      inputMode='numeric' // Indicate numeric input without showing the arrows
                      value={otp}
                      maxLength={6}
                      onChange={(e) => setOTP(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-12 text-center mt-4'>
                  <button className='btn btn-style-one' type='submit' disabled={loading} style={{ color: 'white' }}>
                    {loading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
