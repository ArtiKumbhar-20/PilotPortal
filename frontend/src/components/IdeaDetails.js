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
    color: '#1e3a8a'       // Change font color
  };

  const spanStyle = {
    fontSize: '20px',
    color: '#1e3a8a'
  };

  function applyTableStyles() {
    const tableStyle = {
      border: '1px solid #94a3b8',
      borderCollapse: 'collapse',
      width: '100%',
      borderRadius: '20px',
    };
  
    const cellStyle = {
      border: '1px solid #94a3b8',
      padding: '8px',
      textAlign: 'left',
      width: '50%',
      
    };

    return { tableStyle, cellStyle };
  }

    // Use the styles in your JSX
    const { tableStyle, cellStyle } = applyTableStyles();

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
  <div className='col-6 col-xl-6 col-lg-6 mb-3'>
    <table style={tableStyle} >
      <tr>
        <td style={cellStyle}><label className='labelStyle'>Team ID</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.id}</span></td>
      </tr>
      <tr>
        <td style={cellStyle}><label className='labelStyle'>Team Name</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.name}</span></td>
      </tr>
      <tr>
        <td style={cellStyle}><label className='labelStyle'>Institute Name</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.insti_id}</span></td>
      </tr>
      <tr>
        <td style={cellStyle}><label className='labelStyle'>CEO</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.ceo}</span></td>
      </tr>
    </table>
  </div>
  <div className='col-6 col-xl-6 col-lg-6 mb-3'>
    <table style={tableStyle}>
      <tr>
        <td style={cellStyle}><label className='labelStyle'>CFO</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.cfo}</span></td>
      </tr>
      <tr>
        <td style={cellStyle}><label className='labelStyle'>CTO</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.cto}</span></td>
      </tr>
      <tr>
        <td style={cellStyle}><label className='labelStyle'>COO</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.coo}</span></td>
      </tr>
      <tr>
        <td style={cellStyle}><label className='labelStyle'>CMO</label></td>
        <td style={cellStyle}><span style={spanStyle}>{idea.cmo}</span></td>
      </tr>
    </table>
  </div>
</div>


<h2 className='title'>  Idea Details</h2>
  <table className='table' style={tableStyle}>
  <tbody>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Problem Statement</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.ps_detail}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Persona 1 - Customer Segment 1</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.persona_1}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Persona 2 - Customer Segment 2</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.persona_2}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>How many interviews you had about this idea?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.interviews}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>What interview questions you prepared for your past interview?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.questions}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>What insights you gathered from your research?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.insights}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Final Problem Statement</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.final_ps}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Problem Statement Domain</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.sdg}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>How do you map your problem statement with Sustainable Development Goals?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.soln_count}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>How many solutions you have formulated for your idea?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.top_soln_1}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Top Solution 1</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.top_soln_2}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Top Solution 2</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.top_soln_3}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Top Solution 3</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.id}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>What insights you have gathered for quick validation?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.quick_val}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Final Solution</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.final_soln}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Team Offering Type</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.offering_type}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Technical Requirements</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.tech_req}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Hardware Requirements</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.hardware_req}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Non-Technical Requirements</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.non_tech_req}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Estimated Time for implementing your idea</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.proto_time}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Estimated Cost for implementing your idea</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.proto_cost}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Do you have Incubator Support?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{idea.incu_support}</p></label></td>
    </tr>
  </tbody>
</table>

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
