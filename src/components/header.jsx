import React, { useState, useEffect ,useRef} from 'react';
import collegeLogo from '../images/college-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 786);
  const dropdownRef = useRef(null);

  const noBorder = {
    border: 'none',
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 786);
      setIsDropdownOpen(false);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header-content responsive-margin">
          <div className="logo-title">
            <div className="logo" style={noBorder}>
              <img src={collegeLogo} alt="College Logo" />
            </div>
            <div className="title">
              <h1>Zahrawi Education System</h1>
              <p>Discovering Knowledge</p>
            </div>
          </div>
          {isSmallScreen ? (
            /* Hamburger menu for small screens */
            <div className="hamburger-menu"  ref={dropdownRef}>
              <button className="hamburger-button" onClick={toggleDropdown}>
                ☰
              </button>
              {isDropdownOpen && (
                <div className="hamburger-dropdown-content">
                  <Link to="/">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Home
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      About
                    </button>
                  </Link>
                  <Link to="/principal-message">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Chairman's Message
                    </button>
                  </Link>
                  <Link to="/vision-mission">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Vision & Mission
                    </button>
                  </Link>
                  <Link to="/admissionform">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Apply for Admission
                    </button>
                  </Link>
                  <Link to="/apply-jobs">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Apply for Job
                    </button>
                  </Link>
                  <Link to="/why-zahrawi">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Why Zahrawi?
                    </button>
                  </Link>
                  <Link to="/zahrawi-at-a-glance">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Zahrawi at Glance
                    </button>
                  </Link>
                  <Link to="/contact-form">
                    <button className="hamburger-dropdown-button" onClick={closeDropdown}>
                      Contact Us
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            /* Buttons for larger screens */
            <div className="buttons">
              <Link to="/">
                <button className="header-button">Home</button>
              </Link>
              <div className="dropdown">
                <button className="header-button" onClick={toggleDropdown}>
                  About &#9662;
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <Link to="/principal-message">
                      <button className="dropdown-button">Chairman's Message</button>
                    </Link>
                    <Link to="/vision-mission">
                      <button className="dropdown-button">Vision & Mission</button>
                    </Link>
                    <Link to="/why-zahrawi">
                      <button className="dropdown-button">Why Zahrawi?</button>
                    </Link>
                    <Link to="/zahrawi-at-a-glance">
                      <button className="dropdown-button">Zahrawi at glance</button>
                    </Link>
                    <Link to="/contact-form">
                      <button className="dropdown-button">Contact Us</button>
                    </Link>
                  </div>
                )}
              </div>
              <div className="dropdown">
                <button className="header-button" onClick={toggleDropdown}>
                  Forms &#9662;
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <Link to="/admissionform">
                      <button className="dropdown-button">Admission Form</button>
                    </Link>
                    <Link to="/apply-jobs">
                      <button className="dropdown-button">Job Form</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
