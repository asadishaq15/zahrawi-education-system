import React from 'react'
import { Link } from 'react-router-dom'
const QuranAcademy = () => {
  return (
    <div className="education-page ">
    <div className="metric-box responsive-margin">
      <h2>
        <i className="fas fa-quran"></i> Zahrawi Quran Academy
      </h2>
      <p>
        Zahrawi Quran Academy is committed to nurturing the spiritual and educational growth of students. Our program focuses on the study of the Holy Quran, Islamic teachings, and the Arabic language.
      </p>
      <p>
        Our dedicated instructors guide students in the recitation and memorization of the Quran, helping them develop a deep understanding of its verses.
      </p>
      <p>
        Whether you aim to become a Hafiz or simply seek a stronger connection with your faith, Zahrawi Quran Academy provides the resources and guidance you need.
      </p>
      <Link to="/admissionform">
        <button className="apply-button">Apply now</button>
      </Link>
    </div>
  </div>
  )
}

export default QuranAcademy
