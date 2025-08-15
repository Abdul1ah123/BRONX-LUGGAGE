import { Link } from 'react-router-dom';

// Import category images
import outdoorImg from '../assets/a03b0fdecc156d8c10c83868a6d3177c.jpg';
import businessImg from '../assets/business.jpg';
import kidsImg from '../assets/kids.jpg';
import accessImg from '../assets/access.jpg';

export default function Categories() {
  // Define the categories and their images
  const items = [
    { label: 'Outdoor', image: outdoorImg },
    { label: 'Business Travel', image: businessImg }, // Matches Gallery.jsx category exactly
    { label: 'Kids', image: kidsImg },
    { label: 'Accessories', image: accessImg },
  ];

  return (
    <section className="categories-section">
      {/* Section title */}
      <h2 className="categories-title">Categories</h2>

      {/* Category cards grid */}
      <div className="category-grid">
        {items.map((item, index) => (
          <Link
            key={index}
            to={`/gallery?category=${encodeURIComponent(item.label)}`} // Pass category name in URL
            className="category-card"
            style={{
              backgroundImage: `url(${item.image})`, // Use image as background
              backgroundSize: 'cover', // Cover full area
              backgroundPosition: 'center', // Center the image
            }}
          >
            {/* Overlay with category name */}
            <div className="overlay">
              <p>{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
