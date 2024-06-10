import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./IdeaModal.css"

import axios from 'axios';

function IdeaModal({ ideaID , onFetchDetails}) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({}); // data instead of idea here
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //fetching 
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:8000/Ideadetails/${ideaID}/`);
      setData(response.data); // Directly set the response data to state
      onFetchDetails(response.data); // Pass data to parent component or callback
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }
  //idea table
  const [idea, setSubmittedData] = useState({});
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
  const paragraphStyles = {
    fontSize: '20px',   // Increase font size
    color: '#1e3a8a'       // Change font color
  };

  const spanStyle = {
    fontSize: '20px',
    color: '#1e3a8a'
  };

  return (
    <>
      <Button  className="modal-button" variant="primary" onClick={handleShow}>
        View Idea Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Idea Details</Modal.Title>
        </Modal.Header>
        

             
{/* <h4 className='title'>Team Details</h4>
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
</div> */}



  <table className='table' style={tableStyle}>
  <tbody>
  <tr>
  <td style={cellStyle}><label className='labelStyle'>Problem Statement</label></td>
  <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamPSdetail}</p></label></td>
</tr>
<tr>
  <td style={cellStyle}><label className='labelStyle'>Persona 1 - Customer Segment 1</label></td>
  <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamPersona1}</p></label></td>
</tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Persona 2 - Customer Segment 2</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamPersona2}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>How many interviews you had about this idea?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamInterviews}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>What interview questions you prepared for your past interview?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamQuestions}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>What insights you gathered from your research?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamInsights}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Final Problem Statement</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamFinalPS}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Problem Statement Domain</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamDomain}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>How do you map your problem statement with Sustainable Development Goals?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamSDG}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>How many solutions you have formulated for your idea?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamSolnCount}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Top Solution 1</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamTopSoln1}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Top Solution 2</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamTopSoln2}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Top Solution 3</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamTopSoln3}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>What insights you have gathered for quick validation?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamQuickVal}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Final Solution</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamFinalSoln}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Team Offering Type</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamOfferingType}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Technical Requirements</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamTechReq}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Hardware Requirements</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamHardwareReq}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Non-Technical Requirements</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamNonTechReq}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Estimated Time for implementing your idea</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamProtoTime}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Estimated Cost for implementing your idea</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamProtoCost}</p></label></td>
    </tr>
    <tr>
      <td style={cellStyle}><label className='labelStyle'>Do you have Incubator Support?</label></td>
      <td style={cellStyle}><label className='labelStyle'><p style={paragraphStyles}>{data.ideaTeamIncuSupport}</p></label></td>
    </tr>
  </tbody>
</table>

              <div className='col-12 text-center mt-4'>
                <button className='btn btn-style-one' type='submit' onClick={handleClose}>
                  <span>Start Evaluation</span>
                </button>
              </div>

      
      </Modal>
    </>
  );
}

export default IdeaModal;