function IdeaStat() {
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
              <h2 className='title'>Idea Status</h2>
              <div className='row'>
                {/* row 1 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Status Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatStatus'
                    aria-describedby='emailHelp'
                    placeholder='Status Name'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Market Research</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatMarketResearch'
                    aria-describedby='emailHelp'
                    placeholder='Market Research'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Advance Bootcamp</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatAdvBoot'
                    aria-describedby='emailHelp'
                    placeholder='Advance Bootcamp'
                  />
                </div>

                {/* row 2 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incubation Support</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatIncuSupport'
                    aria-describedby='emailHelp'
                    placeholder='Incubation Support'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Trademark</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatIPRTrademark'
                    aria-describedby='emailHelp'
                    placeholder='IPR Trademark'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Patent</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatIPRPatent'
                    aria-describedby='emailHelp'
                    placeholder='IPR Patent'
                  />
                </div>

                {/* row 3 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Copyright</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatIPRCopyright'
                    aria-describedby='emailHelp'
                    placeholder='IPR Copyright'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Bussiness Plan</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatBusinessPlan'
                    aria-describedby='emailHelp'
                    placeholder='Bussiness Plan'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>IPR Trade Secrets</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatIPRTradeSecrets'
                    aria-describedby='emailHelp'
                    placeholder='IPR Trade Secrets'
                  />
                </div>

                {/* row 4 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Status Prototype</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatProto'
                    aria-describedby='emailHelp'
                    placeholder='Status Prototype'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Team Placement</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatTeamPlacement'
                    aria-describedby='emailHelp'
                    placeholder='Team Placement'
                  />
                </div>

                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Incorporation Status</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatIncorpStatus'
                    aria-describedby='emailHelp'
                    placeholder='Incorporation Status'
                  />
                </div>

                {/* row 5 */}
                <div className='col-12 col-xl-4 col-lg-4 mb-3'>
                  <label className='labelStyle'>Employability Skilling</label>
                  <input
                    type='name'
                    className='form-control'
                    id='ideaStatEmploybilitySkilling'
                    aria-describedby='emailHelp'
                    placeholder='Employability Skilling'
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

              {/* submit */}
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
  )
}

export default IdeaStat