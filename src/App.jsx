import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Headroom from "react-headroom";

// ==== Components ====
import Navbar from "./components/Nav";
import About from "./components/About";
import Categories from "./components/Categories";
import Home from "./components/Hero";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import ProductDetails from "./pages/ProductDetails";
import Sitemap from "./pages/Sitemap";

function App() {
  const location = useLocation();

  // 🔹 Change tab title
  useEffect(() => {
    document.title = "Bronx Luggage";
  }, []);

  // 🔹 Scroll behavior
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* Sticky/Auto-Hide Navbar */}
      <Headroom>
        <Navbar />
      </Headroom>

      {/* App Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Categories />
              <section id="about">
                <About />
              </section>
              <section id="contact">
                <ContactUs />
              </section>
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
