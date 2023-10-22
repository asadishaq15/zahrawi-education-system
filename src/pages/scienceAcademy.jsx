import React from 'react'
import { Link } from 'react-router-dom'

const ScienceAcademy = () => {
  return (
    <div>
     <div className="education-page">
      <div className="metric-box responsive-margin">
        <h2>Zahrawi Science Academy</h2>
        <p>
          Zahrawi Science Academy offers a specialized program for students aspiring to pursue a career in the medical field.
          Our curriculum is tailored to provide a strong foundation in subjects such as Biology, Chemistry, and Physics.
        </p>
        <p>
          Our experienced faculty members are dedicated to preparing students for entrance exams and guiding them toward success.
          We provide state-of-the-art laboratories and resources to enhance practical learning.
        </p>
        <p>
          Whether you dream of becoming a doctor, pharmacist, or pursuing any other healthcare profession, Zahrawi Science Academy is your pathway to achieving your goals.
        </p>
        <Link to="/admissionform">
          <button className="apply-button">Apply now!</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default ScienceAcademy
