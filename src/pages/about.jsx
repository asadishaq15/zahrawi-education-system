import React from 'react'
import Header from '../components/header'
import flag from '../images/flag.jpeg';
import Footer from '../components/footer';
import { color } from 'framer-motion';
const About = () => {

  return (
      <div>
      

    <section className="about-section responsive-margin">
    <div className="about-header">
      <h1 className='about-header-heading'>About Zahrawi Education System</h1>
      <h3 color='black'>Empowering Students for a Bright Future</h3>
    </div>
    <div className="about-content">
      <div className="about-image">
        <img src={flag} alt="School Building" />
      </div>
      <div className="about-description">
        <h2>Our Story</h2>
        <p className="about-paragraph">
        At Zahrawi, our journey is a testament to our unwavering commitment to education.
         With a rich history and dedication to shaping bright futures, we are proud of our legacy and eager for what lies ahead.
        </p>
        <h2>Our Mission</h2>
        <p className="about-paragraph">
        Our mission is clear - to nurture well-rounded individuals through dynamic education. 
        We empower students to excel academically and personally, fostering creativity and critical thinking. Join us in shaping a brighter future.
        </p>
        <h2>Our Values</h2>
        <ul className="about-values-list">
          <li className="about-value">Excellence in Education</li>
          <li className="about-value">Diversity and Inclusion</li>
          <li className="about-value">Community Engagement</li>
          <li className="about-value">Innovation and Creativity</li>
        </ul>
      </div>
    </div>
  </section>
  
      </div>
  )
}

export default About
