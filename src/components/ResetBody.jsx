import React, { useState } from "react";
import "../styles/forgotPasswordStyles.css"; // Assuming your styles are in forgotPasswordStyles.css

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the passwords
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Assume password reset is successful
    setSuccessMessage("Your password has been reset successfully.");
    setErrorMessage(""); // Clear any previous error messages
    setNewPassword(""); // Clear the form fields
    setConfirmNewPassword("");
  };

  return (
    <section className="reset-password-section">
      <div className="motivational-text">
        <h2>Reset Your Password</h2>
        <p>We understand that forgetting your password can be frustrating.</p>
        <p>
          Just enter your new password below to regain access to your account.
        </p>
      </div>
      <div className="reset-password-form-container">
        <h1>Reset Password</h1>

        {/* Display error or success message */}
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="message">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="token" value="token_here" />

          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmNewPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />

          <button type="submit">Reset Password</button>
        </form>

        <p>
          <a href="/login">Return to login</a>
        </p>
      </div>
    </section>
  );
};

export default ResetPassword; // Export the correct component
