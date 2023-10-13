import React from "react";
function Footer() {
  return (
    <footer className='footer-wrapper-three mt-0'>
      <div className='container'>
        <div className='row mb-n30'>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-30 wow fadeIn'
            data-wow-duration='1.5s'
            data-wow-delay='.1s'
          >
            <div className='footer-widget negative-margin'>
              <div className='logo'>
                <a href='index.html'>
                  <img
                    src='assets/images/logo/logo.png'
                    alt=''
                    style={{ maxWidth: "130px" }}
                  />
                </a>
              </div>
              <ul className='footer-widget-list-icon'>
                <li>
                  <i className='fas fa-map-marker-alt'></i>{" "}
                  <span>
                    20 ABC, PQR <br /> SPD, HSLN 1348
                  </span>
                </li>
                <li>
                  <i className='fas fa-envelope'></i>{" "}
                  <span>
                    <a
                      href='mailto:connect@evolvingx.org'
                      style={{ color: "#AEA7C3" }}
                    >
                      connect@evolvingx.org
                    </a>
                  </span>{" "}
                </li>
                <li>
                  <i className='fas fa-phone'></i>
                  <span>+123 456 7890</span>{" "}
                </li>
              </ul>
              <ul className='social-icon d-flex flex-start'>
                <li>
                  <a href='https://www.facebook.com/' className='facebook'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/' className='twitter'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/' className='linkedin'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/' className='instagram'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className='col-lg-3 col-md-4 col-sm-5 col-12 mb-30 d-flex justify-content-lg-center justify-content-md-end wow fadeIn'
            data-wow-duration='1.5s'
            data-wow-delay='.1s'
          >
            <div className='footer-widget'>
              <h5 className='footer-widget-title'>Quick Links</h5>
              <ul className='footer-widget-list'>
                <li>
                  <a href='#'>About us</a>
                </li>
                <li>
                  <a href='#'>Sign Up</a>
                </li>
                <li>
                  <a href='#'>Sign In</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className='col-lg-3 col-md-4 col-sm-6 col-12 mb-30 d-flex justify-content-lg-center justify-content-sm-end wow fadeIn'
            data-wow-duration='1.5s'
            data-wow-delay='.1s'
          >
            <div className='footer-widget'>
              <h5 className='footer-widget-title'>Other Links</h5>
              <ul className='footer-widget-list'>
                <li>
                  <a href='about.html'>Ideation</a>
                </li>
                <li>
                  <a href='about.html'>Team Creation</a>
                </li>
                <li>
                  <a href='about.html'>Idea Submission</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className='col-lg-3 col-md-6 col-sm-7 col-12 mb-30 d-flex justify-content-sm-end wow fadeIn'
            data-wow-duration='1.5s'
            data-wow-delay='.1s'
          >
            <div className='footer-widget'>
              <h5 className='footer-widget-title'>Upcoming Events</h5>
              <ul className='sidebar-blog'>
                <li>
                  <a href='blog-details.html' className='image'>
                    <img
                      src='assets/images/events/blog-post-5.png'
                      alt='Blog Post'
                    />
                  </a>
                  <div className='content'>
                    <span className='subtitle'>Event 1</span>
                    <a className='title' href='blog-details.html'>
                      Lorem Lorem Ipsum Lorem
                    </a>
                    <span className='date'>25 Feb 2022</span>
                  </div>
                </li>
                <li>
                  <a href='blog-details.html' className='image'>
                    <img
                      src='assets/images/events/blog-post-5.png'
                      alt='Blog Post'
                    />
                  </a>
                  <div className='content'>
                    <span className='subtitle'>Event 2</span>
                    <a className='title' href='blog-details.html'>
                      Lorem Lorem Ipsum Lorem
                    </a>
                    <span className='date'>24 Jun 2022</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div
              className='copyright wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
            >
              <p className='order-md-1 order-2'>
                © 2023 by <span>EvolvingX</span>
              </p>

              <ul className='footer-bootm-list order-md-2 order-1'>
                <li>
                  <a href='#'>Terms & Condition</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
