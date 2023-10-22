import React from 'react'
import { Link } from 'react-router-dom'
const Ziet = () => {
  return (
    <div className="education-page">
    <div className="metric-box responsive-margin">
      <h2>
        <i className="fas fa-cogs"></i> Zahrawi Institute of Emerging Technologies (ZIET)
      </h2>
      <p>
        Zahrawi Institute of Emerging Technologies (ZIET) is your gateway to the world of technology and innovation. Our programs are designed to equip students with the skills and knowledge needed for a successful career in the ever-evolving tech industry.
      </p>
      <p>
        At ZIET, you'll explore cutting-edge fields like computer science, artificial intelligence, cybersecurity, and software development. Our experienced faculty members and state-of-the-art facilities ensure that you receive the best education and hands-on experience.
      </p>
      <p>
        Whether you dream of becoming a software engineer, data scientist, or a tech entrepreneur, ZIET provides the resources and mentorship to help you achieve your goals in the tech world.
      </p>
      <Link to="/admissionform">
        <button className="apply-button">Apply now</button>
      </Link>
    </div>
  </div>
  )
}

export default Ziet
