import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {
  // Login Auth
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  // Scroll to Home's About
  const scrollToAbout = () => {
    const element = document.getElementById("aboutSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className='header-wrapper sticky-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='flex-center justify-content-between'>
                <div className='logo'>
                  <a href='index.html'>
                    <img
                      src='assets/images/logo/logo.png'
                      alt='Logo'
                      style={{ maxWidth: "120px" }}
                    />
                  </a>
                </div>

                <div className='flex-center header-right'>
                  <div className='d-none d-lg-flex header-right_menu'>
                    <nav className='main-menu'>
                      <ul>
                        <li>
                          <NavLink to='/' activeClassName='is-active'>
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={scrollToAbout}
                            style={{ color: "#1c1c1c" }}
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <NavLink to='/Home'>Ideation</NavLink>
                        </li>
                        <li>
                          <a
                            href='#'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                          >
                            Contact Us
                          </a>
                        </li>
                        {isAuth ? (
                          <li>
                            <NavLink to='/Dashboard'>Your Account</NavLink>
                          </li>
                        ) : null}
                      </ul>
                    </nav>
                  </div>

                  <div className='header-right_actions home-two-header-right flex-center'>
                    <div className='header-button'>
                      {isAuth ? (
                        <NavLink to='/logout' className='btn btn-style-two'>
                          <span>Logout</span>
                        </NavLink>
                      ) : (
                        <NavLink to='/login' className='btn btn-style-two'>
                          <span>Login</span>
                        </NavLink>
                      )}
                    </div>

                    <div className='hamburger d-block d-lg-none'>
                      <a
                        className='header-action-btn header-action-btn-menu hamburger_button d-flex'
                        href='#/'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#offcanvas-header'
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='offcanvas offcanvas-end' id='offcanvas-header'>
        <div className='offcanvas-header'>
          <div className='logo'>
            <a href='index.html'>
              <img
                src='assets/images/logo/logo.png'
                alt=''
                style={{ maxWidth: "120px" }}
              />
            </a>
          </div>
          <button
            type='button'
            className='btn-close text-reset mobilemenu-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <i className='fas fa-times'></i>
          </button>
        </div>
        <div className='offcanvas-body'>
          <nav>
            <ul className='mobile-menu'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Ideation</a>
              </li>
              <li>
                <a
                  href='#'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
