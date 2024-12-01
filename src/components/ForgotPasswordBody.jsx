import React, { useState } from "react";
import "../styles/forgotPasswordStyles.css"; // Assuming your styles are in forgotPasswordStyles.css

const ForgotPasswordBody = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Success or error message
  const [error, setError] = useState(""); // Handle error messages

  // Handle form data changes
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset messages
    setError(""); // Reset errors

    try {
      const response = await fetch("http://localhost:9090/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("A password reset link has been sent to your email!");
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
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
        {/* Display messages */}
        {message && <div className="message success">{message}</div>}
        {error && <div className="message error">{error}</div>}

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
