import React, { useState } from "react";
import "../styles/forgotPasswordStyles.css"; // Assuming your styles are in forgotPasswordStyles.css

const ForgotPasswordBody = () => {
  // State for form data and messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Success or error message

  // Handle form data changes
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You would send the email to your backend API here.
    // For now, we simulate a successful form submission.
    setMessage("A password reset link has been sent to your email!");
  };

  return (
    <section className="forgot-password-section">
      <div className="motivational-text">
        <h2>Reset Your Password</h2>
        <p>
          Don't worry! Just enter your email address, and we'll send you a link
          to reset your password.
        </p>
        <p>Check your inbox for the reset link!</p>
      </div>

      <div className="forgot-password-form-container">
        <h1>Forgot Password</h1>
        {/* Display success message if available */}
        {message && <div className="message">{message}</div>}

        {/* Form for email input */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <p>
          <a href="/login">Remembered your password? Log in</a>
        </p>
      </div>
    </section>
  );
};

export default ForgotPasswordBody;
