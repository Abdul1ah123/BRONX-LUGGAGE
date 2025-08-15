import { useState, useEffect } from "react";

export default function ContactUs() {
  // State to store the result message after form submission
  const [result, setResult] = useState("");
  // State to control fade-in visibility
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setVisible(true);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending..."); // Show sending message

    const formData = new FormData(e.target);
    // Add Web3Forms API access key
    formData.append("access_key", "fbf33ae1-ae92-474e-913c-577cdda579de");

    // Send form data to Web3Forms API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    // Handle API response
    if (data.success) {
      setResult("✅ Your message has been sent successfully!");
      e.target.reset(); // Clear the form
    } else {
      console.error("Error", data);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className={`contact-section ${visible ? "fade-in" : ""}`}>
      <div className="contact-container">
        {/* Section heading */}
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions or need assistance? We’d love to hear from you.
        </p>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Display result message */}
        {result && <p className="form-result">{result}</p>}
      </div>
    </section>
  );
}
