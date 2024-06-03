import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="service-section service-three pt-0 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeIn" data-wow-duration=".7s" data-wow-delay=".1s">
            <div className="section-title-center section-head text-left">
              <span className="subtitle">What People Say</span>
              <h2 className="title">Testimonials</h2>
              <p className="text text-left">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. when the musics over turn off the light
              </p>
            </div>
          </div>
        </div>
        <Slider {...testimonialSettings} className="row" >
        <div className='col-xl-4 col-lg-6 col-md-6 col-12 mt-3 ' >
              <div
                className='testimonialtwo-single text-center'
                style={{ padding: "30px 30px",  margin: "0 15px" }}
              >
                <div className='testimonialtwo-top'>
                  <div className='testimonialtwo-quote'>
                    <img
                      src='assets/images/quote/quote-2.png'
                      alt='Quote'
                      style={{ maxWidth: "55px" }}
                    />
                  </div>
                  <p className='testimonialtwo-text'>
                    Sed do eiusmod tempor indun tokhon dekhesi tumi nei onoto ei
                    diner pashe vebe dekho sob sukh ut labore et dolore magna
                    aliq ua.
                  </p>
                </div>
                <div className='border-middle'>
                  <img
                    src='assets/images/testimonial/border.png'
                    alt='Testimonial-Border'
                  />
                </div>
                <div className='testimonialtwo-content'>
                  <div className='testimonialtwo-thumb'>
                    <img
                      src='assets/images/testimonial/left.png'
                      alt='Testimonial'
                    />
                  </div>
                  <div className='testimonialtwo-info'>
                    <span className='name'>XYZ</span>
                    <span className='designation'>TCS, Pune</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-12  mt-3'>
              <div
                className='testimonialtwo-single text-center'
                style={{ padding: "30px 30px", margin: "0 15px" }}
              >
                <div className='testimonialtwo-top'>
                  <div className='testimonialtwo-quote'>
                    <img
                      src='assets/images/quote/quote-2.png'
                      alt='Quote'
                      style={{ maxWidth: "55px" }}
                    />
                  </div>
                  <p className='testimonialtwo-text'>
                    Sed do eiusmod tempor indun tokhon dekhesi tumi nei onoto ei
                    diner pashe vebe dekho sob sukh ut labore et dolore magna
                    aliq ua.
                  </p>
                </div>
                <div className='border-middle'>
                  <img
                    src='assets/images/testimonial/border.png'
                    alt='Testimonial-Border'
                  />
                </div>
                <div className='testimonialtwo-content'>
                  <div className='testimonialtwo-thumb'>
                    <img
                      src='assets/images/testimonial/left.png'
                      alt='Testimonial'
                    />
                  </div>
                  <div className='testimonialtwo-info'>
                    <span className='name'>XYZ</span>
                    <span className='designation'>TCS, Pune</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-12  mt-3'>
              <div
                className='testimonialtwo-single text-center'
                style={{ padding: "30px 30px", margin: "0 15px" }}
              >
                <div className='testimonialtwo-top'>
                  <div className='testimonialtwo-quote'>
                    <img
                      src='assets/images/quote/quote-2.png'
                      alt='Quote'
                      style={{ maxWidth: "55px" }}
                    />
                  </div>
                  <p className='testimonialtwo-text'>
                    Sed do eiusmod tempor indun tokhon dekhesi tumi nei onoto ei
                    diner pashe vebe dekho sob sukh ut labore et dolore magna
                    aliq ua.
                  </p>
                </div>
                <div className='border-middle'>
                  <img
                    src='assets/images/testimonial/border.png'
                    alt='Testimonial-Border'
                  />
                </div>
                <div className='testimonialtwo-content'>
                  <div className='testimonialtwo-thumb'>
                    <img
                      src='assets/images/testimonial/left.png'
                      alt='Testimonial'
                    />
                  </div>
                  <div className='testimonialtwo-info'>
                    <span className='name'>XYZ</span>
                    <span className='designation'>TCS, Pune</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-12  mt-3'>
              <div
                className='testimonialtwo-single text-center'
                style={{ padding: "30px 30px", margin: "0 15px" }}
              >
                <div className='testimonialtwo-top'>
                  <div className='testimonialtwo-quote'>
                    <img
                      src='assets/images/quote/quote-2.png'
                      alt='Quote'
                      style={{ maxWidth: "55px" }}
                    />
                  </div>
                  <p className='testimonialtwo-text'>
                    Sed do eiusmod tempor indun tokhon dekhesi tumi nei onoto ei
                    diner pashe vebe dekho sob sukh ut labore et dolore magna
                    aliq ua.
                  </p>
                </div>
                <div className='border-middle'>
                  <img
                    src='assets/images/testimonial/border.png'
                    alt='Testimonial-Border'
                  />
                </div>
                <div className='testimonialtwo-content'>
                  <div className='testimonialtwo-thumb'>
                    <img
                      src='assets/images/testimonial/left.png'
                      alt='Testimonial'
                    />
                  </div>
                  <div className='testimonialtwo-info'>
                    <span className='name'>XYZ</span>
                    <span className='designation'>TCS, Pune</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6 col-12  mt-3'>
              <div
                className='testimonialtwo-single text-center'
                style={{ padding: "30px 30px", margin: "0 15px" }}
              >
                <div className='testimonialtwo-top'>
                  <div className='testimonialtwo-quote'>
                    <img
                      src='assets/images/quote/quote-2.png'
                      alt='Quote'
                      style={{ maxWidth: "55px" }}
                    />
                  </div>
                  <p className='testimonialtwo-text'>
                    Sed do eiusmod tempor indun tokhon dekhesi tumi nei onoto ei
                    diner pashe vebe dekho sob sukh ut labore et dolore magna
                    aliq ua.
                  </p>
                </div>
                <div className='border-middle'>
                  <img
                    src='assets/images/testimonial/border.png'
                    alt='Testimonial-Border'
                  />
                </div>
                <div className='testimonialtwo-content'>
                  <div className='testimonialtwo-thumb'>
                    <img
                      src='assets/images/testimonial/left.png'
                      alt='Testimonial'
                    />
                  </div>
                  <div className='testimonialtwo-info'>
                    <span className='name'>XYZ</span>
                    <span className='designation'>TCS, Pune</span>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
      </div>
    </div>
  );
}
