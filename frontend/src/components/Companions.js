import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Companions() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='service-section service-three pt-0 section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 wow fadeIn' data-wow-duration='.7s' data-wow-delay='.1s'>
            <div className='section-title-center section-head text-left'>
              <span className='subtitle'>Partners</span>
              <h2 className='title'>Companions</h2>
              <p className='text text-left'>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics
                over turn off the light
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center text-uppercase'>
          <div className='col-12 pb-3 text-center'>
            <h2 className='pb-3'>Corporate Partners</h2>
            <img
              className='img-fluid mw-250 p-2 m-3'
              src='assets/images/companions/TCS.png'
              alt='TCS logo'
            />
            <img
              className='img-fluid mw-250 p-2 m-3'
              src='assets/images/companions/bosch.png'
              alt='Bosch logo'
            />
          </div>

          <div class='break'>
            {}
            <br />
            <br />
            <br />
          </div>

          <div className='col-12 text-center '>
            <h2 className='pb-3'>Institution Partners</h2>
            <div className='institution-slider-container'>
            <Slider {...settings} className="institution-partners-slider">
                <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/Bschool-Logo.jpg'
                  alt='DPU'
                />
                <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/mit.jpeg'
                  alt='MIT logo'
                />
                <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/Cummins.png'
                  alt='Cummins logo'
                />
                <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/Cummins1.png'
                  alt='Cummins logo 2'
                />
                 <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/Bschool-Logo.jpg'
                  alt='DPU'
                />
                <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/mit.jpeg'
                  alt='MIT logo'
                />
                <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/Cummins.png'
                  alt='Cummins logo'
                />
                <img
                  className='custom-img img-fluid mw-250 p-2 m-4'
                  src='assets/images/companions/Cummins1.png'
                  alt='Cummins logo 2'
                />
              
            </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companions;
