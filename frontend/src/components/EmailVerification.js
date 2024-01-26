import React, { useState } from 'react';
import config from './config';
import { useNavigate } from 'react-router-dom';

export const EmailVerification = () => {
  const apiUrl = `${config.backendUrl}/student-verify-otp/`;
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyEmail = async (e) => {
    e.preventDefault();

    if (!otp) {
      setError('OTP is required');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          verification_otp: otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        setError(data.error || 'Failed to verify OTP. Please try again.');
        setMessage('');
      }
    } catch (error) {
      setError('An error occurred.');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          <div className='col-lg-6 mb-30 mx-auto'>
            <form
              onSubmit={verifyEmail}
              className='comment-form-inner contact-form wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
            >
              <h2 className='title'>Verify Email</h2>
              <div style={{ marginTop: '-25px',marginBottom: '10px', color: 'gray' }}>An email has been sent to your registered email. Please verify your email with the OTP.</div>
              {error && <div className='alert alert-danger' role='alert'>{error}</div>}
              {message && <div className='alert alert-success' role='alert'>{message}</div>}
             
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <input
                    className={'form-control ' + (error ? 'is-invalid' : '')}
                    placeholder='*Enter OTP'
                    name='otp'
                    type='text'
                    value={otp}
                    maxLength={6}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit' disabled={loading} style={{ color: 'white' }}>
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;



