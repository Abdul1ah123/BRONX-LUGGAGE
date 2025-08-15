import React, { useState } from "react";

// This component renders a feedback form and sends the submission via Web3Forms API
function Feedback() {
  // State to track the submission status message
  const [status, setStatus] = useState("");

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload when submitting
    setStatus("Sending...");

    // Prepare the form data
    const formData = new FormData(e.target);
    formData.append("access_key", "fbf33ae1-ae92-474e-913c-577cdda579de");

    // Send the form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    // Convert API response to JSON
    const data = await response.json();

    // Check if submission was successful
    if (data.success) {
      setStatus("Thanks for your feedback! ✅");
      e.target.reset(); // Clear the form
    } else {
      setStatus("Something went wrong. ❌");
    }
  };

  // Component UI
  return (
    <div className="feedback-container">
      <h2>We value your feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Feedback:
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Send Feedback</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default Feedback;
