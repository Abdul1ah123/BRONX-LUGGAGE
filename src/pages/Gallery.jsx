import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

// =============================
// IMAGE IMPORTS
// =============================

// ==== OUTDOOR IMAGES ====
import outdoor1a from "../assets/outdoor1a.jpg";
import outdoor1b from "../assets/outdoor1b.jpg";
import outdoor2a from "../assets/outdoor2a.jpg";
import outdoor2b from "../assets/outdoor2b.jpg";
import outdoor3a from "../assets/outdoor3a.jpg";
import outdoor3b from "../assets/outdoor3b.jpg";
import outdoor4a from "../assets/outdoor4a.jpg";
import outdoor4b from "../assets/outdoor4b.jpg";
import outdoor5a from "../assets/outdoor5a.jpg";
import outdoor5b from "../assets/outdoor5b.jpg";
import outdoor6a from "../assets/outdoor6a.jpg";
import outdoor6b from "../assets/outdoor6b.jpg";
import outdoor7a from "../assets/outdoor7a.jpg";
import outdoor7b from "../assets/outdoor7b.jpg";
import outdoor8a from "../assets/outdoor8a.jpg";
import outdoor8b from "../assets/outdoor8b.jpg";
import outdoor9a from "../assets/outdoor9a.jpg";
import outdoor9b from "../assets/outdoor9b.jpg";
import outdoor10a from "../assets/outdoor10a.jpg";
import outdoor10b from "../assets/outdoor10b.jpg";
import outdoor11a from "../assets/outdoor11a.jpg";
import outdoor11b from "../assets/outdoor11b.jpg";
import outdoor12a from "../assets/outdoor12a.jpg";
import outdoor12b from "../assets/outdoor12b.jpg";

// ==== BUSINESS IMAGES ====
import business1a from "../assets/business1a.jpg";
import business1b from "../assets/business1b.jpg";
import business2a from "../assets/business2a.jpg";
import business2b from "../assets/business2b.jpg";
import business3a from "../assets/business3a.jpg";
import business3b from "../assets/business3b.jpg";
import business4a from "../assets/business4a.jpg";
import business4b from "../assets/business4b.jpg";
import business5a from "../assets/business5a.jpg";
import business5b from "../assets/business5b.jpg";
import business6a from "../assets/business6a.jpg";
import business6b from "../assets/business6b.jpg";
import business7a from "../assets/business7a.jpg";
import business7b from "../assets/business7b.jpg";
import business8a from "../assets/business8a.jpg";
import business8b from "../assets/business8b.jpg";
import business9a from "../assets/business9a.jpg";
import business9b from "../assets/business9b.jpg";
import business10a from "../assets/business10a.jpg";
import business10b from "../assets/business10b.jpg";
import business11a from "../assets/business11a.jpg";
import business11b from "../assets/business11b.jpg";
import business12a from "../assets/business12a.jpg";
import business12b from "../assets/business12b.jpg";

// ==== KIDS IMAGES (.webp format) ====
import kids1a from "../assets/kid1a.webp";
import kids1b from "../assets/kid1b.webp";
import kids2a from "../assets/kid2a.webp";
import kids2b from "../assets/kid2b.webp";
import kids3a from "../assets/kid3a.webp";
import kids3b from "../assets/kid3b.webp";
import kids4a from "../assets/kid4a.webp";
import kids4b from "../assets/kid4b.webp";
import kids5a from "../assets/kid5a.webp";
import kids5b from "../assets/kid5b.webp";
import kids6a from "../assets/kid6a.webp";
import kids6b from "../assets/kid6b.webp";
import kids7a from "../assets/kid7a.webp";
import kids7b from "../assets/kid7b.webp";
import kids8a from "../assets/kid8a.webp";
import kids8b from "../assets/kid8b.webp";
import kids9a from "../assets/kid9a.webp";
import kids9b from "../assets/kid9b.webp";
import kids10a from "../assets/kid10a.webp";
import kids10b from "../assets/kid10b.webp";
import kids11a from "../assets/kid11a.webp";
import kids11b from "../assets/kid11b.webp";
import kids12a from "../assets/kid12a.webp";
import kids12b from "../assets/kid12b.webp";

// ==== ACCESSORIES IMAGES ====
import accessories1a from "../assets/accessories1a.jpg";
import accessories1b from "../assets/accessories1b.jpg";
import accessories2a from "../assets/accessories2a.jpg";
import accessories2b from "../assets/accessories2b.jpg";
import accessories3a from "../assets/accessories3a.jpg";
import accessories3b from "../assets/accessories3b.jpg";
import accessories4a from "../assets/accessories4a.jpg";
import accessories4b from "../assets/accessories4b.jpg";
import accessories5a from "../assets/accessories5a.jpg";
import accessories5b from "../assets/accessories5b.jpg";
import accessories6a from "../assets/accessories6a.jpg";
import accessories6b from "../assets/accessories6b.jpg";
import accessories7a from "../assets/accessories7a.jpg";
import accessories7b from "../assets/accessories7b.jpg";
import accessories8a from "../assets/accessories8a.jpg";
import accessories8b from "../assets/accessories8b.jpg";
import accessories9a from "../assets/accessories9a.jpg";
import accessories9b from "../assets/accessories9b.jpg";
import accessories10a from "../assets/accessories10a.jpg";
import accessories10b from "../assets/accessories10b.jpg";
import accessories11a from "../assets/accessories11a.jpg";
import accessories11b from "../assets/accessories11b.jpg";
import accessories12a from "../assets/accessories12a.jpg";
import accessories12b from "../assets/accessories12b.jpg";

// Export array for use in ProductDetails
export const galleryItems = [];

export default function Gallery() {
  const location = useLocation();
  const navigate = useNavigate();

  // ==== Filter States ====
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  // ==== Filter Options ====
  const categories = ["Outdoor", "Business Travel", "Kids", "Accessories"];
  const brands = ["Brand A", "Brand B"];
  const genders = ["Male", "Female"];

  // ==== Category to Product Mapping ====
  const imageMap = {
    Outdoor: [
      { img1: outdoor1a, img2: outdoor1b, name: "Mountain Backpack", price: "$120", description: "Durable and spacious for hiking." },
      { img1: outdoor2a, img2: outdoor2b, name: "Hiking Boots", price: "$90", description: "Waterproof boots for tough terrains." },
      { img1: outdoor3a, img2: outdoor3b, name: "Camping Tent", price: "$150", description: "Lightweight 2-person tent." },
      { img1: outdoor4a, img2: outdoor4b, name: "Travel Rucksack", price: "$110", description: "Perfect for long treks." },
      { img1: outdoor5a, img2: outdoor5b, name: "Hiking Jacket", price: "$85", description: "Windproof and breathable." },
      { img1: outdoor6a, img2: outdoor6b, name: "Water Bottle Set", price: "$25", description: "BPA-free and insulated." },
      { img1: outdoor7a, img2: outdoor7b, name: "Camping Jacket", price: "$95", description: "Keeps you warm on cold nights." },
      { img1: outdoor8a, img2: outdoor8b, name: "Trail Sneakers", price: "$80", description: "Comfort for long walks." },
      { img1: outdoor9a, img2: outdoor9b, name: "Lightweight Backpack", price: "$100", description: "Compact and durable." },
      { img1: outdoor10a, img2: outdoor10b, name: "Sleeping Bag", price: "$70", description: "All-season sleeping bag." },
      { img1: outdoor11a, img2: outdoor11b, name: "Trekking Poles", price: "$60", description: "Adjustable and sturdy." },
      { img1: outdoor12a, img2: outdoor12b, name: "Thermal Flask", price: "$30", description: "Keeps drinks hot or cold." },
    ],
    "Business Travel": [
      { img1: business1a, img2: business1b, name: "Executive Briefcase", price: "$140", description: "Premium leather briefcase for professionals." },
      { img1: business2a, img2: business2b, name: "Leather Laptop Bag", price: "$130", description: "Stylish and protective laptop bag." },
      { img1: business3a, img2: business3b, name: "Wheeled Carry-on", price: "$200", description: "Compact and airline-approved luggage." },
      { img1: business4a, img2: business4b, name: "Slim Wallet", price: "$45", description: "Minimalist wallet for everyday use." },
      { img1: business5a, img2: business5b, name: "Garment Bag", price: "$170", description: "Keeps your suits wrinkle-free." },
      { img1: business6a, img2: business6b, name: "Luxury Pen Set", price: "$55", description: "Elegant writing instrument set." },
      { img1: business7a, img2: business7b, name: "Designer Tote", price: "$160", description: "Fashionable tote for work and travel." },
      { img1: business8a, img2: business8b, name: "Rolling Laptop Case", price: "$180", description: "Spacious rolling case for laptops." },
      { img1: business9a, img2: business9b, name: "Conference Folder", price: "$60", description: "Organizer for meetings and events." },
      { img1: business10a, img2: business10b, name: "Travel Organizer", price: "$40", description: "Keeps passports and tickets in order." },
      { img1: business11a, img2: business11b, name: "Compact Makeup Case", price: "$75", description: "Travel-friendly cosmetic storage." },
      { img1: business12a, img2: business12b, name: "Portable Charger", price: "$35", description: "Fast-charging portable power bank." },
    ],
    Kids: [
      { img1: kids1a, img2: kids1b, name: "Superhero Backpack", price: "$50", description: "Fun backpack for little heroes." },
      { img1: kids2a, img2: kids2b, name: "Sports Duffel", price: "$45", description: "Perfect for school sports activities." },
      { img1: kids3a, img2: kids3b, name: "School Satchel", price: "$40", description: "Lightweight and colorful satchel." },
      { img1: kids4a, img2: kids4b, name: "Mini Luggage", price: "$55", description: "Kids' travel suitcase with wheels." },
      { img1: kids5a, img2: kids5b, name: "Soccer Backpack", price: "$48", description: "Sporty bag for young athletes." },
      { img1: kids6a, img2: kids6b, name: "Cartoon Lunch Bag", price: "$20", description: "Insulated lunch bag for school." },
      { img1: kids7a, img2: kids7b, name: "Princess Backpack", price: "$52", description: "Adorable backpack for princess lovers." },
      { img1: kids8a, img2: kids8b, name: "Glitter Tote", price: "$47", description: "Sparkly tote for special occasions." },
      { img1: kids9a, img2: kids9b, name: "Floral Satchel", price: "$43", description: "Bright and cheerful school bag." },
      { img1: kids10a, img2: kids10b, name: "Pink Mini Luggage", price: "$57", description: "Compact rolling luggage for kids." },
      { img1: kids11a, img2: kids11b, name: "Dance Bag", price: "$49", description: "Perfect for ballet and dance gear." },
      { img1: kids12a, img2: kids12b, name: "Unicorn Lunch Bag", price: "$22", description: "Cute and magical lunch carrier." },
    ],
    Accessories: [
      { img1: accessories1a, img2: accessories1b, name: "Leather Belt", price: "$35", description: "Classic leather belt for any outfit." },
      { img1: accessories2a, img2: accessories2b, name: "Travel Watch", price: "$220", description: "Water-resistant travel wristwatch." },
      { img1: accessories3a, img2: accessories3b, name: "Sunglasses", price: "$75", description: "UV-protected stylish sunglasses." },
      { img1: accessories4a, img2: accessories4b, name: "Wristband Set", price: "$28", description: "Comfortable and colorful wristbands." },
      { img1: accessories5a, img2: accessories5b, name: "Key Holder", price: "$18", description: "Compact leather key organizer." },
      { img1: accessories6a, img2: accessories6b, name: "Money Clip", price: "$20", description: "Slim clip for holding cash." },
      { img1: accessories7a, img2: accessories7b, name: "Silk Scarf", price: "$40", description: "Elegant scarf for all seasons." },
      { img1: accessories8a, img2: accessories8b, name: "Jewelry Box", price: "$90", description: "Compact storage for accessories." },
      { img1: accessories9a, img2: accessories9b, name: "Hand Mirror", price: "$25", description: "Portable and stylish mirror." },
      { img1: accessories10a, img2: accessories10b, name: "Makeup Brush Set", price: "$35", description: "Soft and professional brushes." },
      { img1: accessories11a, img2: accessories11b, name: "Pearl Necklace", price: "$120", description: "Elegant pearl necklace for occasions." },
      { img1: accessories12a, img2: accessories12b, name: "Hair Clip Set", price: "$15", description: "Stylish hair accessories set." },
    ],
  };

  // ==== Build master galleryItems array ====
  const allItems = [];
  let idCounter = 1;
  categories.forEach((category) => {
    const products = imageMap[category];
    let imgIndex = 0;
    brands.forEach((brand) => {
      for (let i = 0; i < 6; i++) {
        const gender = genders[i % 2];
        const p = products[imgIndex];
        allItems.push({
          id: idCounter++,
          name: p.name,
          category,
          gender,
          brand,
          price: p.price,
          description: p.description,
          image1: p.img1,
          image2: p.img2,
        });
        imgIndex++;
      }
    });
  });

  // Replace contents of exported galleryItems
  galleryItems.length = 0;
  galleryItems.push(...allItems);

  // ==== Handle category from URL params ====
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromURL = params.get("category");
    if (categoryFromURL) setSelectedCategory(categoryFromURL);
  }, [location.search]);

  // ==== Filtering logic ====
  const filteredItems = allItems.filter(
    (item) =>
      (selectedCategory ? item.category === selectedCategory : true) &&
      (selectedGender ? item.gender === selectedGender : true) &&
      (selectedBrand ? item.brand === selectedBrand : true)
  );

  // =============================
  // JSX OUTPUT
  // =============================
  return (
    <div className="gallery-page">
      {/* === FILTER BAR === */}
      <div className="filter-bar">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>

        <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
          <option value="">All Genders</option>
          {genders.map((g, i) => (
            <option key={i} value={g}>{g}</option>
          ))}
        </select>

        <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
          <option value="">All Brands</option>
          {brands.map((b, i) => (
            <option key={i} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* === GALLERY GRID === */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="image-wrapper">
              <img src={item.image1} alt={item.name} className="default-image" />
              <img src={item.image2} alt={item.name} className="hover-image" />
            </div>
            <div className="card-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <Link
                to={`/product/${encodeURIComponent(item.name)}`}
                state={item}
                className="view-btn"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
