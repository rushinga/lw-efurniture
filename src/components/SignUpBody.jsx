import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/loginStyles.css"; // Assuming your styles are in registerStyles.css

const SignUpBody = () => {
  // Initializing form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [message, setMessage] = useState(""); // For displaying the registration message
  const navigate = useNavigate();
  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the API call to submit the form data
    console.log("Form Data Submitted", formData);
    const response = await fetch("http://localhost:9090/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response; // Parse JSON response
    console.log(data);

    navigate("/login");

    // Example: You could show a success message after submission
    setMessage("Registration successful! Please log in.");
  };

  return (
    <section className="register-section">
      <div className="register-form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Choose a Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create a Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Role selection */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Your Role
            </option>
            <option value="ROLE_USER">Customer</option>
            <option value="ROLE_SELLER">Seller</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {/* Display registration message if exists */}
        {message && <p className="registration-message">{message}</p>}

        <p>
          <Link to="/login">Already have an account? Log in</Link>
        </p>
      </div>
      <div className="register-info-container">
        <div className="motivational-text">
          <h2 className="logo-name">Light of the World Furniture</h2>
          <p className="logo-name">
            Furniture that Shines | Furniture that Inspires
          </p>
        </div>
        <div className="motivational-text">
          <h2>Welcome Back to Your Dream Space!</h2>
          <p>
            Register to unlock exclusive access to our latest furniture
            collections and special deals.
          </p>
          <p>
            Transform your home with our unique designs and elevate your living
            experience!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpBody;
