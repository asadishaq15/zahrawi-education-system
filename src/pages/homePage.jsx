import React from 'react'
import Header from '../components/header'
import WelcomeSection from '../components/welcomeSection'
import Child from '../images/childPhoto.jpeg'; // Import the image
import classroom from '../images/classroom.jpeg'
import playArea from '../images/play area.webp'
import cafeteria from '../images/cafeteria.jpeg'

import { Link } from 'react-router-dom';
import TopNews from '../components/topNews';
import WelcomeMessage from '../components/welcomeSection';
const HomePage = () => {

 
  return (
    <div className='homepage-wrap'>
   
   <TopNews/>
   <WelcomeMessage/>
    <div className="education-info responsive-margin">
      <h1 className="heading">Offered Courses</h1>
    
    <div className="education-container responsive-margin">
    <div class="education-box" >
  <h2>P.G to Metric</h2>
  <p>Our P.G to Metric program is designed to prepare students for success in their academic journey.Offering Mathematics, Science, Languages, and more.</p>
  <Link to="/higher-secondary">
    <button className="apply-button">Explore More</button>
  </Link>
</div>
<div class="education-box" >
  <h2>Zahrawi Science Academy</h2>
  <p>Our curriculum is tailored to provide a strong foundation in subjects such as Biology, Chemistry, and Physics</p>
  <Link to="/science-academy">
    <button className="apply-button">Explore More</button>
  </Link>
</div>
<div class="education-box" >
  <h2>Zahrawi Quran Academy</h2>
  <p>Our dedicated instructors guide students in the recitation and memorization of the Quran, helping them develop a deep understanding of its verses.</p>
  <Link to="/Quran-academy">
    <button className="apply-button">Explore More</button>
  </Link>
</div>
<div class="education-box" >
  <h2>ZIET</h2>
  <p>At ZIET, you'll explore cutting-edge fields like computer science, artificial intelligence, cybersecurity, and software development.</p>
  <Link to="/ziet">
    <button className="apply-button">Explore More</button>
  </Link>
</div>

      </div>
    </div>
    <div className="facilities responsive-margin" >
      <h1 className="heading">Our Facilities</h1>
    
    
      <div className="box-container responsive-margin">
  <div className="box">
    <img src={classroom} alt="classroom" />
    <h3>Ventilated Classrooms</h3>
    <p>Our ventilated classrooms provide a comfortable and conducive learning environment. Proper ventilation ensures a healthy atmosphere for students to focus on their studies.</p>
  </div>
  <div className="box">
    <img src={playArea} alt="playArea" />
    <h3>Play Area for Kids</h3>
    <p>We have a dedicated play area for kids where they can engage in fun and recreational activities. It's a safe and enjoyable space for children to socialize and play during their breaks.</p>
  </div>
  <div className="box">
    <img src={cafeteria} alt="cafeteria" />
    <h3>Best Cafeteria</h3>
    <p>Our cafeteria offers a wide range of delicious and nutritious meals for students. It's the perfect place to grab a bite, relax, and recharge during the school day.</p>
  </div>
</div>
    </div>
  </div>
  
  
  )
}

export default HomePage
