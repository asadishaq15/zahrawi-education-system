import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:zeskaror@gmail.com">zeskaror@gmail.com</a></p>
          <p>Phone: 0606811643</p>
          <p>Complaints & Suggestions:0344481164</p>
          
        </div>
        <div className="footer-section">
  <h3>Follow Us</h3>
  <ul className="social-icons">
    <li>
      <a
        href="https://www.facebook.com/zahrawikaror?mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </a>
    </li>
  </ul>
</div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li>
              <Link to="/">Home</Link> {/* Use the Link component for client-side routing */}
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/admissionform">Apply Admission</Link>
            </li>
            <li>
              <Link to="/apply-jobs">Apply Jobs</Link>
            </li>
            <li>
              <Link to="/contact-form">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright 2023. All Rights Reserved.</p>
        <p>Powered by WebGurus</p>
      </div>
    </footer>
  );
};

export default Footer;
