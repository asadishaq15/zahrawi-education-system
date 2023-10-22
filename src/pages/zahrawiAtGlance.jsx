import React from 'react';
import campusPhoto1 from '../images/evaluationPhoto.jpg'
import campusPhoto2 from '../images/evaluation2.jpg'
import childPhoto from '../images/childPhoto.jpeg'
import campusPhoto3 from '../images/campusPhoto.jpg'
const ZahrawiAtGlance = () => {
  return (
    <div className="zahrawi-at-glance responsive-margin">
  <h2>Campus Photos</h2>
  <div className="photo-gallery">
    <div className="photo">
      <img src={campusPhoto1} alt="Campus Photo 1" />
      
    </div>
    <div className="photo">
      <img src={campusPhoto2} alt="Campus Photo 2" />
      
    </div>
    <div className="photo">
      <img src={childPhoto} alt="Campus Photo 2" />
      
    </div>
    <div className="photo">
      <img src={campusPhoto3} alt="Campus Photo 2" />
      
    </div>
  </div>
</div>

  );
};

export default ZahrawiAtGlance;
