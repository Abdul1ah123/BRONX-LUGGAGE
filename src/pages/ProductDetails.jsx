import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/gallery")} className="back-btn">
          Back to Gallery
        </button>
      </div>
    );
  }

  const images = [product.image1, product.image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="product-images">
        <button onClick={handlePrev} className="arrow-btn">‹</button>
        <img src={images[currentIndex]} alt={product.name} className="main-image" />
        <button onClick={handleNext} className="arrow-btn">›</button>
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>

        {/* NEW: Leave Feedback button */}
        <button
          className="back-btn"
          onClick={() =>
            navigate(`/feedback?product=${encodeURIComponent(product.name)}`)
          }
          style={{ marginTop: "12px" }} /* remove if you don't want inline spacing */
        >
          Leave Feedback
        </button>
      </div>
    </div>
  );
}
