import React, { useState } from "react";
function IdeaUpdate() {

  const [inputsDisabled, setInputsDisabled] = useState(false);
  const [inputValues, setInputValues] = useState({
   
  });

  const handleButtonClick = () => {
    setInputsDisabled((prevState) => !prevState);
  };

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

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
              <h2 className='title'>Idea Status</h2>
              <div className='row'>
                {/* row 1 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Status Name</label>
                  <input
          value={inputValues.StatusName}
          type='text'
          placeholder='Status Name'                       
          id='ideaStatStatus'
          text-color='gray'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "StatusName")}
        />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Market Research</label>
                  <input
          value={inputValues.MarketResearch}
          type='text'
          placeholder='Market Research'                       
          id='ideaStatMarketResearch'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "MarketResearch")}
        />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Advance Bootcamp</label>
                  <input
          value={inputValues.AdvanceBootcamp}
          type='text'
          placeholder='Advance Bootcamp'                       
          id='ideaStatAdvBoot'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "AdvanceBootcamp")}
        />
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incubation Support</label>
                  <input
          value={inputValues.IncubationSupport}
          type='text'
          placeholder='Incubation Support'                       
          id='ideaStatIncuSupport'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "IncubationSupport")}
        />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Trademark</label>
                  <input
          value={inputValues.IPRTrademark}
          type='text'
          placeholder='IPR Trademark'                       
          id='ideaStatIPRTrademark'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "IPRTrademark")}
        />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Patent</label>
                  <input
          value={inputValues.IPRPatent}
          type='text'
          placeholder='IPR Patent'                       
          id='ideaStatIPRPatent'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "IPRPatent")}
        />
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Copyright</label>
                  <input
          value={inputValues.IPRCopyright}
          type='text'
          placeholder='IPR Copyright'                       
          id='ideaStatIPRCopyright'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "IPRCopyright")}
        />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Bussiness Plan</label>
                  <input
          value={inputValues.BussinessPlan}
          type='text'
          placeholder='Bussiness Plan'                       
          id='ideaStatBusinessPlan'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "BussinessPlan")}
        />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Trade Secrets</label>
                  <input
          value={inputValues.IPRTradeSecrets}
          type='text'
          placeholder='IPR Trade Secrets'                       
          id='ideaStatIPRTradeSecrets'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "IPRTradeSecrets")}
        />
                </div>

                {/* row 4 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Status Prototype</label>
                  <input
          value={inputValues.StatusPrototype}
          type='text'
          placeholder='Status Prototype'              
          id='ideaStatProto'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "StatusPrototype")}
        />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Team Placement</label>
                  <input
          value={inputValues.TeamPlacement}
          type='text'
          placeholder='Team Placement'
          id='ideaStatTeamPlacement'        
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "TeamPlacement")}
        />
              
                    
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incorporation Status</label>
                  <input
          value={inputValues.IncorporationStatus}
          type='text'
          placeholder='Incorporation Status'
          id='ideaStatIncorpStatus'        
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "IncorporationStatus")}
        />
        
                </div>

                {/* row 5 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Employability Skilling</label>
                  <input
          placeholder='Employability Skilling'
          value={inputValues.EmployabilitySkilling}
          type='text'
          id='ideaStatEmploybilitySkilling'
          disabled={inputsDisabled}
          onChange={(e) => handleInputChange(e, "EmployabilitySkilling")}
        />
                </div>
              </div>

              {/* terms and condition */}
              <div className='col-12 col-xl-12 col-lg-12 mb-3'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexcheckDefault'
                    style={{ height: 20, padding: 0, marginBottom:-8, marginRight: 12, width: 20 }}
                  />
                  <label className='form-check-label labelStyle' htmlFor='flexCheckDefault'>
                    I agree to all terms and conditions.
                  </label>
                </div>
              </div>

              {/* Save and Update */}
              <div className='col-12 text-center mt-4' >
                
                  <button style={{ color: 'white' }}className='btn btn-style-one' type='button' onClick={handleButtonClick}>
                  {inputsDisabled ? "Save" : "Update"}         
                  </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeaUpdate