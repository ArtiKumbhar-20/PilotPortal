// import React from "react";
// import { Link } from "react-router-dom";
import React from "react";
export default function EventsList() {
  return (
    <div className='service-section service-three pt-0 section-padding'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-12 wow fadeIn'
            data-wow-duration='.7s'
            data-wow-delay='.1s'
          >
            <div className='section-title-center section-head text-left'>
              {/* Title */}

              <h2 className='title'>Upcoming Events</h2>
              <p className='text text-left'>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. when the musics over turn off the light
              </p>
            </div>
          </div>
        </div>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n25'>
          <div className='col mb-30'>
            <div
              className='blog wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
            >
              <div className='blog-thumbnail'>
                <a href='blog-details.html' className='image'>
                  <img src='assets/images/events/event2.jpg' alt='Blog' />
                </a>
              </div>
              <div className='blog-info'>
                <ul className='meta'>
                  <li>Pune</li>
                  <li>Aug 08, 2023</li>
                </ul>
                <h3 className='title text-uppercase'>Youth Empowerment</h3>
                <p className='text'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className='col mb-30'>
            <div
              className='blog wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.2s'
            >
              <div className='blog-thumbnail'>
                <a href='blog-details.html' className='image'>
                  <img src='assets/images/events/event2.jpg' alt='Blog ' />
                </a>
              </div>
              <div className='blog-info'>
                <ul className='meta'>
                  <li>Nashik</li>
                  <li>Aug 08, 2023</li>
                </ul>
                <h3 className='title text-uppercase'>Youth Empowerment</h3>
                <p className='text'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className='col mb-30'>
            <div
              className='blog wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.3s'
            >
              <div className='blog-thumbnail'>
                <a href='blog-details.html' className='image'>
                  <img src='assets/images/events/event2.jpg' alt='Blog' />
                </a>
              </div>
              <div className='blog-info'>
                <ul className='meta'>
                  <li>Nagpur</li>
                  <li>Aug 08, 2023</li>
                </ul>
                <h3 className='title text-uppercase'>Youth Empowerment</h3>
                <p className='text'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
