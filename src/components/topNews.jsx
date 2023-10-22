import React, { useState, useEffect } from 'react';

import ChildPhoto from '../images/childPhoto.jpeg';
import flag from '../images/flag.jpeg';
import poster1 from '../images/poster1.jpeg';
import poster2 from '../images/poster2.jpeg';
import poster3 from '../images/poster3.jpg'
import tagline from '../images/tagline.jpg'
import post from '../images/headerBack.jpg';

function TopNews() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    // Remove the 'preload-image' class after the page has loaded
    const images = document.querySelectorAll('.preload-image');
    images.forEach((image) => {
      image.classList.remove('preload-image');
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slideIndex]); // Only restart interval when slideIndex changes

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  return (
    <div className="homepage-slideshow-container">
    <div className="slideshow">
      <div className="mySlides fade">
        <div className="image-container">
          <img src={flag} alt="Slide 1" className="preload-image" />
        </div>
      </div>
  
      <div className="mySlides fade">
        <div className="image-container">
          <img src={poster2} alt="Slide 2" className="preload-image" />
        </div>
      </div>
  
      <div className="mySlides fade">
        <div className="image-container">
          <img src={poster1} alt="Slide 3" className="preload-image"/>
        </div>
      </div>

      <div className="mySlides fade">
        <div className="image-container">
          <img src={ChildPhoto} alt="Slide 4" className="preload-image"/>
        </div>
      </div>
      <div className="mySlides fade">
        <div className="image-container">
          <img src={poster3} alt="Slide 5" className="preload-image"/>
        </div>
      </div>
      <div className="mySlides fade">
        <div className="image-container">
          <img src={tagline} alt="Slide 6" className="preload-image"/>
        </div>
      </div>
  
      <div className="dot-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
      </div>
    </div>
  </div>
  );
}

export default TopNews;
