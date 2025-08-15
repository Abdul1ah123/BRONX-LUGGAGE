import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const [dateTime, setDateTime] = useState(new Date());
  const [geoLocation, setGeoLocation] = useState("Fetching location...");

  // Live date and time updater
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Geolocation fetch
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Reverse geocode using OpenStreetMap Nominatim API
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            if (data.address) {
              const city = data.address.city || data.address.town || data.address.village || "";
              const country = data.address.country || "";
              setGeoLocation(`${city}, ${country}`);
            } else {
              setGeoLocation("Location unavailable");
            }
          } catch (error) {
            setGeoLocation("Unable to fetch location");
          }
        },
        () => {
          setGeoLocation("Location permission denied");
        }
      );
    } else {
      setGeoLocation("Geolocation not supported");
    }
  }, []);

  const handleHashClick = (hash) => {
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Slogan */}
        <div className="footer-logo">
          <h2>BRONX LUGGAGE</h2>
          <p>Your journey, our luggage – built for style, comfort, and durability.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashClick("#about");
                }}
              >
                About
              </a>
            </li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@bronxluggage.com</p>
          <p>Phone: +234 800 123 4567</p>
          <p>Address: 123 Bronx Avenue, Lagos, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bronx Luggage. All Rights Reserved. |{" "}
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()} | {geoLocation}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
