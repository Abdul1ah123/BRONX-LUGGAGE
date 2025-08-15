import React, { useRef, useEffect, useState } from 'react';
import AboutPic from '../assets/aboutPic.jpg';

function About() {
  // Create a reference to the "about" section for observing when it appears in view
  const aboutRef = useRef(null);

  // State to track if the section is visible in the viewport
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create an intersection observer to detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Mark as visible
          observer.disconnect(); // Stop observing after first view
        }
      },
      { threshold: 0.2 } // Trigger when at least 20% of the section is visible
    );

    // Start observing if the element exists
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`about ${isVisible ? 'visible' : ''}`} // Add 'visible' class for animations
    >
      {/* Left text content */}
      <div className="about1">
        <h2>About Bronx Luggage</h2>
        <p>
          At Bronx Luggage, we believe every journey deserves the perfect companion.
          From rugged outdoor adventures to sleek business trips, fun family vacations,
          and stylish everyday accessories, our collections are designed to match your
          lifestyle and your destination.
          <br /><br />
          Located in the heart of Festival Market Place, <br />
          Known worldwide for their durability, style, and innovation, Bronx Luggage
          offers products that blend quality craftsmanship with modern design.
          <br /><br />
          You can contact us at support@bronxluggage.com, <br />
          or give us a call at +234 800 123 4567
        </p>
      </div>

      {/* Right image section */}
      <div className="about2">
        <img src={AboutPic} alt="About Bronx Luggage" className="aPic" />
      </div>
    </div>
  );
}

export default About;
