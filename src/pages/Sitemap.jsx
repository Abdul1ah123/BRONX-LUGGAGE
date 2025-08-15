import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <div className="sitemap-container">
      {/* Page Title */}
      <h1>Sitemap</h1>
      <p>Find all the pages on Bronx Luggage easily.</p>

      {/* Main sitemap list */}
      <ul className="sitemap-list">
        
        {/* Home section with anchor links */}
        <li>
          <Link to="/">Home</Link>
          <ul>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </li>

        {/* Gallery section with categories */}
        <li>
          <Link to="/gallery">Gallery</Link>
          <ul>
            <li>
              <Link to="/gallery?category=Outdoor">Outdoor</Link>
            </li>
            <li>
              <Link to="/gallery?category=Business%20Travel">Business Travel</Link>
            </li>
            <li>
              <Link to="/gallery?category=Kids">Kids</Link>
            </li>
            <li>
              <Link to="/gallery?category=Accessories">Accessories</Link>
            </li>

            {/* Subsection for product details */}
            <li>
              <span style={{ color: "#555", fontWeight: "bold" }}>
                Item Description
              </span>
              <ul>
                <li>
                  <Link to="/feedback">Feedback Page</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
