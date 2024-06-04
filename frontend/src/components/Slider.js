import React from "react";
function Slider() {
  return (
    <div className='slider-section'>
      <div className='swiper sliderone animation-style-01'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide '>
            <div
              className='slingle-slider single-slider-three overlay slider-bg-image'
              style={{
                backgroundImage: "../assets/images/slider/01_home_01.png",
                // backgroundColor: "#E9EDF4",
              }}
            >
              <span className='shape shape-11 layery' data-speed='2'>
                <img src='assets/images/slider/shape-11.png' alt='Shape' />
              </span>
              <span className='shape shape-seven'>
                <img src='assets/images/slider/circle-three.png' alt='Shape' />
              </span>
              <span className='shape shape-12 layer' data-speed='2'>
                <img src='assets/images/slider/shape-5.png' alt='Shape' />
              </span>
              <span className='shape shape-13'>
                <img src='assets/images/slider/circle-six.png' alt='Shape' />
              </span>
              <div className='shape shape-14'>
                <img src='assets/images/slider/shape-12.png' alt='Shape' />
              </div>
              <div className='shape shape-15'>
                <img src='assets/images/slider/shape-13.png' alt='Shape' />
              </div>
              <div className='shape shape-16'>
                <img src='assets/images/slider/shape-14.png' alt='Shape' />
              </div>
              <div className='shape shape-17'>
                <img src='assets/images/slider/shape-15.png' alt='Shape' />
              </div>
              <div className='shape shape-18'>
                <img src='assets/images/slider/shape-16.png' alt='Shape' />
              </div>
              <div className='slider-content-wrapper'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-5 align-self-center'>
                      <div className='slider-content'>
                        <span className='subtitle'>Entrepreneurs</span>
                        <h2 className='title'>Startup Week</h2>
                        <p className='text'>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more
                        </p>
                        <a
                          href='#'
                          className='btn btn-style-one'
                        >
                          <span>Let's get Started!</span>
                        </a>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-7'>
                      <div className='slider-image h-100'>
                        <div className='slider-image-three js-tilt'>
                          {/* Main Image */}
                          <img
                            src='assets/images/slider/img.jpg'
                            alt='Slider'
                          />
                        </div>
                        <span className='shape shape-circle-two'>
                          <img
                            src='assets/images/slider/circle-four.png'
                            alt='Shape'
                          />
                        </span>
                        <div className='shape shape-circle-three'>
                          <img
                            src='assets/images/slider/circle-five.png'
                            alt='Shape'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;
