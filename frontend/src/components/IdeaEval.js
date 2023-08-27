import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "./config";
const apiUrl = `${config.backendUrl}/IdeaSubGetData/`; // Construct Backend API URL

function IdeaEval() {
  const [team, setTeam] = useState({});
  const [panelist, setPanelist] = useState({});

  useEffect(() => {
    // Fetch data from Django API
    axios
      .get(apiUrl)
      .then((response) => {
        setTeam(response.data.team);
        setPanelist(response.data.panelist);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='mb-n30'>
          <div className='col-lg-12 mb-30'>
            <form
              id='contact-form'
              className='comment-form-inner contact-form wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
              action='#'
            >
              {/* Title */}
              <h2 className='title'>Idea Evaluation</h2>
              <div className='row'>
                <div className='col-6'>
                  {/* Display the team ID and name */}
                  <p>Team ID: {team.id}</p>
                  <p>Team Name: {team.name}</p>
                </div>
                <div className='col-6'>
                  {/* Display the panelist ID and name */}
                  <p>Panelist ID: {panelist.id}</p>
                  <p>Panelist Name: {panelist.name}</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'> Panelist ID</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Panelist ID'
                    value={panelist.id}
                  />
                </div>
                <div className='col-12 col-xl-6 col-lg-6 mb-3'>
                  <label className='labelStyle'>Team ID</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Team ID'
                    value={team.id}
                  />
                </div>
                {/* RadioButton */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is this Idea Affordable?</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    {" "}
                    Is this Idea Sustainable?
                  </label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Is this Idea Scalable?</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is this Idea Universal?</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Does Idea Grow Rapidly?</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is this Idea Excellent?</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Is this Idea Distinctive?
                  </label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Does Idea has WOW Factor?
                  </label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Is there Scope IPs?</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    Does Idea have Market Need?
                  </label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Supply Chain</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Scope Revenue</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>
                    {" "}
                    Is there any Competition?
                  </label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Ease of Operation</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'> Bonus Mark</label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-5 col-lg-5 mb-3'>
                  <label className='labelStyle'>
                    Can you recommend this idea to Incubator?
                  </label>
                  <select className='form-select'>
                    <option selected disabled>
                      Select
                    </option>
                    <option value='1'>Yes</option>
                    <option value='2'> No </option>
                  </select>
                </div>

                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Area of Improvement</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    aria-describedby='emailHelp'
                    placeholder='Area of Improvement'
                  />
                </div>

                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexcheckDefault'
                      style={{
                        height: 20,
                        padding: 0,
                        marginBottom: -8,
                        marginRight: 12,
                        width: 20,
                      }}
                    />
                    {/* Terms and Conditions */}
                    <label
                      className='form-check-label labelStyle'
                      htmlFor='flexCheckDefault'
                    >
                      I agree to all terms and conditions.
                    </label>
                  </div>
                </div>
              </div>
              {/* Submit */}
              <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit'>
                  <span>Submit Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaEval;
