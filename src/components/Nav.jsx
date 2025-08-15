// Navbar component for Bronx Luggage
// Handles site navigation, responsive hamburger menu, and user count badge
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  // React Router hooks for current location and navigation
  const location = useLocation();
  const navigate = useNavigate();

  // State to hold a placeholder "user count" (e.g., active visitors, cart items, etc.)
  const [userCount, setUserCount] = useState(0);

  // State to track mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Simulated user count fetch (replace with real API call if needed)
  useEffect(() => {
    setUserCount(42); // Example static number
  }, []);

  /**
   * Handles clicks on hash links (e.g., #about)
   * - If on the homepage, scrolls to the section smoothly.
   * - If on another page, navigates to homepage with the hash.
   */
  const handleHashClick = (hash) => {
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${hash}`);
    }
    setMenuOpen(false); // Always close menu after navigation
  };

  return (
    <nav className="nav">
      {/* Left side: logo/title with user count badge */}
      <div className="nav-left">
        <Link
          to="/"
          className="site-title"
          style={{ position: "relative", display: "inline-block" }}
        >
          BRONX LUGGAGE
          {/* Circular badge for user count */}
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-15px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {userCount}
          </span>
        </Link>

        {/* Hamburger button for mobile menu toggle */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* Gallery page link */}
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </li>

        {/* About section link (smooth scroll if already on homepage) */}
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

        {/* Feedback page link */}
        <li>
          <Link to="/feedback" onClick={() => setMenuOpen(false)}>
            Feedback
          </Link>
        </li>

        {/* Call-to-action button linking to Shop/Gallery */}
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            <button className="butt1">Shop Now</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
