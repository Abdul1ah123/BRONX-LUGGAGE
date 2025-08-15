// Import the video background component
import VideoComponent from "./videoComponent";

export default function Home() {
  return (
    // Main hero section container
    <section className="hero1">
      <div className="videoBox">

        {/* Text overlay on top of the video */}
        <div className="text">
          {/* Main headline for the hero section */}
          <h1 className="heroCap1">Premium Luggage for Every Journey.</h1>

          {/* Supporting tagline / subtext */}
          <h3>
            Discover our collection of durable, stylish, and functional luggage
            <br /> 
            designed to accompany you on all your adventures.
          </h3>
        </div>

        {/* Background or promotional video */}
        <VideoComponent />
      </div>
    </section>
  );
}
