import React from 'react'
import { Link } from 'react-router-dom'
const PgToMetric = () => {
  return (
    <div className="education-page">
    <div className="metric-box responsive-margin">
      <h2>P.G to Metric</h2>
      <p>
        Metric, also known as Secondary Education, is the foundational level of education.
        It covers a wide range of subjects to provide students with a strong academic foundation.
      </p>
      <p>
        Our P.G to Metric program is designed to prepare students for success in their academic journey.
        We offer a comprehensive curriculum that includes essential subjects such as Mathematics, Science, Languages, and more.
        Our experienced faculty members are dedicated to helping students excel in their studies.
      </p>
      <p>
        Admission to our program is open to students who are enthusiastic about learning and committed to their education.
        Whether you're looking to build a solid academic foundation or achieve outstanding results in your Metric exams,
        our program can help you reach your goals.
      </p>
      <p>
        Join us at Zahrawi Education System and embark on a journey of knowledge and academic excellence.
      </p>
      <Link to="/admissionform">
        <button className="apply-button">Apply now</button>
      </Link>
    </div>
    </div>
  )
}

export default PgToMetric
