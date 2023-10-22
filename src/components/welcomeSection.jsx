
import React from 'react';


function WelcomeMessage() {
  return (
    <div className="welcome-message responsive-margin">
      <div className="heading-container ">
        <h2 className="welcome-heading">Welcome to Zahrawi Education System</h2>
      </div>
      <div className="message-container">
        <p className="welcome-paragraph">
       Zahrawi Education System is a well established institute. The principal seat of Zahrawi is at Karor .
        Zahrawi Education System was established and founded by Mr. Kashif Javed in 2015, and since then it has steadily grown into one of the leading higher education institutions in Layyah. 
        It plays a major role in grooming future leaders who can make a positive difference to the world around them. 
        Zahrawi Education system is a comprehensive institute having multidisciplinary programs that includes nursery to metriculations, Intermediate in Engineering and Medical, 
        Computer Sciences, Hifz-e-Quran course and ZIET.
        </p>
      </div>
    </div>
  );
}

export default WelcomeMessage;






























// import React, { useEffect, useRef, useState } from 'react';
// import ChildPhoto from '../images/childPhoto.PNG';
// import flag from '../images/flag.jpeg';
// import poster1 from '../images/poster1.jpeg';
// import poster2 from '../images/poster2.jpeg';

// function WelcomeSection() {
//   const imageRef = useRef(null);
//   const paragraphRef = useRef(null);

//   // Array of images for the slideshow
//   const images = [ChildPhoto, flag, poster1, poster2];

//   // State to keep track of the current image index
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     // Function to handle scroll events
//     const handleScroll = () => {
//       const image = imageRef.current;
//       const paragraph = paragraphRef.current;
//       const maxTranslate = -6; 

//       // Get the current scroll position
//       const scrollY = window.scrollY;


//       const translation = (scrollY / window.innerHeight) * maxTranslate;

//       // Apply the translation only when the screen width is greater than 780px
//       if (window.innerWidth > 780) {
//         image.style.transition = 'none';
//         image.style.transform = `translateX(${translation}%)`;
//         paragraph.style.transition = 'none';
//         paragraph.style.transform = `translateX(${-translation}%)`;
//       }
//     };

//     // Add the scroll event listener
//     window.addEventListener('scroll', handleScroll);

    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Use a timer to automatically advance to the next image every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextImage();
//     }, 6000);

//     // Clear the timer when the component unmounts
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const imageStyles = {
//     width: '300px',
//     height: '330px', 
//     objectFit: 'cover', 
//   };

//   return (
//     <section className="welcome-section">
//       {/* Welcome header */}
//       <div className="welcome-header">
//         <h1>Welcome to Al-Zahrawi Ecosystem</h1>
//         <p>Discover a World of Knowledge and Opportunities</p>
//       </div>
    
//       <div className="welcome-content">
//         <div className="welcome-text"></div>
       
//         <div className="welcome-image">
         
//           <img
//             ref={imageRef}
//             src={images[currentImageIndex]}
//             alt="Students on campus"
//             className="rounded-image" 
//             style={imageStyles} 
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WelcomeSection;





// {/* <div className="horizontal-paragraph-container">
// <div className="horizontal-paragraph-column">
//   <p ref={paragraphRef} className="horizontal-paragraph">
//     <h2>Principal's message:</h2>
//     At Al-Zahrawi School & College, we believe in fostering creativity and empowering our students to excel in both academics and extracurricular activities. Our dedicated faculty and state-of-the-art facilities create an environment where students can thrive and reach their full potential. Join us in shaping a brighter future.
//   </p>
// </div>
// </div> */}