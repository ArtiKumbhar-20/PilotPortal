import React, { useState, useEffect } from "react";
import axios from "axios";



const IdeaDetails = () => {
  const [idea, setSubmittedData] = useState({});

  useEffect(() => {
    // Fetch data from Django API
    axios
      .get('http://localhost:8000/ideaDetailFetch/')
      .then((response) => {
        setSubmittedData(response.data.idea);
      })

      .catch(error => {
        console.error('Error fetching submitted data:', error);
      });
  }, []);

  const paragraphStyles = {
    fontSize: '20px',   // Increase font size
    color: '#f43f5e'       // Change font color
  };

  return (
    <div className='section-padding'>
      <div className='container'  >
        <div className='mb-n30'>
          <div className='col-lg-12 mb-30'>
            <form
              id='contact-form'
              className='comment-form-inner contact-form wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
            >
              
              <h2 className='title'>Team Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Team ID: <span style={{ color: '#f43f5e' }}>{idea.id}</span></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Team Name: <span style={{ color: '#f43f5e' }}>{idea.name}</span></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Institute Name: <span style={{ color: '#f43f5e' }}>{idea.insti_id}</span></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CEO: <span style={{ color: '#f43f5e' }}>{idea.ceo}</span></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CFO: <span style={{ color: '#f43f5e' }}>{idea.cfo}</span></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CTO: <span style={{ color: '#f43f5e' }}>{idea.cto}</span></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>COO: <span style={{ color: '#f43f5e' }}>{idea.coo}</span></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>CMO: <span style={{ color: '#f43f5e' }}>{idea.cmo}</span></label>
                  </div>
                </div>
                <h2 className='title'>  Idea Details</h2>
              <div className='row'>
                <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Problem Statement:  <p style={paragraphStyles}>{idea.ps_detail}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Persona 1 - Customer Segment 1:  <p style={paragraphStyles}>{idea.persona_1}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Persona 2 - Customer Segment 2:  <p style={paragraphStyles}>{idea.persona_2}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>How many interviews you had about this idea?:  <p style={paragraphStyles}>{idea.interviews}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>What interview questions you prepa#f43f5e for your past interview?:  <p style={paragraphStyles}>{idea.questions}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>What insights you gathe#f43f5e from your research? :  <p style={paragraphStyles}>{idea.insights}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Final Problem Statement:  <p style={paragraphStyles}>{idea.final_ps}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Problem Statement Domain:  <p style={paragraphStyles}>{idea.sdg}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>How do you map your problem statement with Sustainable Development Goals?:  <p style={paragraphStyles}>{idea.soln_count}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>How many solutions you have formulated for your idea?:  <p style={paragraphStyles}>{idea.top_soln_1}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 1:  <p style={paragraphStyles}>{idea.top_soln_2}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 2:  <p style={paragraphStyles}>{idea.top_soln_3}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Top Solution 3:  <p style={paragraphStyles}>{idea.id}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>What insights you have gathe#f43f5e for quick validation?:  <p style={paragraphStyles}>{idea.quick_val}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Final Solution:  <p style={paragraphStyles}>{idea.final_soln}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Team Offering Type:  <p style={paragraphStyles}>{idea.offering_type}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Technical Requirements:  <p style={paragraphStyles}>{idea.tech_req}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Hardware Requirements:  <p style={paragraphStyles}>{idea.hardware_req}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Non-Technical Requirements: 
                   <p style={paragraphStyles}>{idea.non_tech_req}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Estimated Time for implementing your idea:  <p style={paragraphStyles}>{idea.proto_time}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Estimated Cost for implementing your idea:  <p style={paragraphStyles}>{idea.proto_cost}</p></label>
                  </div>
                  <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                  <label className='labelStyle'>Do you have Incubator Support?:  <p style={paragraphStyles}>{idea.incu_support}</p></label>
                  </div>
                 
                </div>
                <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit'>
                  <span>Start Evaluation</span>
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
                
    
  );
};

export default IdeaDetails;
