function AboutHome() {
  return (
    <>
      <div
        id='aboutSection'
        className='service-section service-three section-padding'
      >
        <div className='container'>
          <div className='row'>
            <div
              className='col-12 wow fadeIn'
              data-wow-duration='.7s'
              data-wow-delay='.1s'
            >
              <div className='section-title-center section-head text-left'>
                <span className='subtitle'>Who we are</span>
                <h2 className='title'>About Us</h2>
                <p className='text text-left'>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. when the musics over turn off the light
                </p>
              </div>
            </div>
          </div>
          <div className='row' style={{ margin: "8px" }}>
            <div className='left-partition col-lg-7 col-md-12'>
              <h2 className='mb-4'>VISION</h2>
              <p className='customText'>
                YOUTH EMPOWERMENT THROUGH EXPERIENTIAL, ENRICHING, AND
                EVERLASTING EXPOSURE !
              </p>
              <h2 className='mb-4'>MISSION</h2>
              <p className='customText'>
                ON A MISSION TO EMPOWER 1 MILLION YOUTH!
              </p>
              <h2 className='mb-4'>DOMAINS</h2>
              <div className='row'>
                <div className='col-md-4'>
                  <img
                    src='assets/images/SDGs.png'
                    alt='Domain 1'
                    className='img-fluid'
                    style={{ height: "100px" }}
                  />
                </div>
                <div className='col-md-6'>
                  <img
                    src='assets/images/image.png'
                    alt='Domain 2'
                    className='img-fluid'
                    style={{ height: "100px" }}
                  />
                </div>
              </div>
            </div>
            <div className='CounterBg right-partition col-lg-5 col-md-12'>
              <div className='row'>
                <div className='col-md-6 col-sm-6'>
                  <div className='counter'>
                    <h3 className='CounterTitle'>150+</h3>
                    <p className='CounterText'>#IDEAS</p>
                    <hr />
                  </div>
                </div>
                <div className='col-md-6 col-sm-6'>
                  <div className='counter'>
                    <h3 className='CounterTitle'>07+</h3>
                    <p className='CounterText'>#STARTUP</p>
                    <hr />
                  </div>
                </div>
                <div className='col-md-6 col-sm-6'>
                  <div className='counter'>
                    <h3 className='CounterTitle'>09+</h3>
                    <p className='CounterText'>#EVENTS</p>
                    <hr />
                  </div>
                </div>
                <div className='col-md-6 col-sm-6'>
                  <div className='counter'>
                    <h3 className='CounterTitle'>830+</h3>
                    <p className='CounterText'>#YOUTH</p>
                    <hr />
                  </div>
                </div>
                <div className='col-md-6 col-sm-6'>
                  <div className='counter'>
                    <h3 className='CounterTitle'>65+</h3>
                    <p className='CounterText'>#VOLUNTEERS</p>
                  </div>
                </div>
                <div className='col-md-6 col-sm-6'>
                  <div className='counter'>
                    <h3 className='CounterTitle'>03+</h3>
                    <p className='CounterText'>#INSTITUTIONS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHome;
