// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/loginStyles.css";
// import { useNavigate } from "react-router-dom";

// const LoginBody = () => {
//   // States for username, password, and error message
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // To store error message

//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!username || !password) {
//       setError("Both fields are required.");
//       return;
//     }

//     const response = await fetch("http://localhost:9090/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       // Handle HTTP errors
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json(); // Parse JSON response
//     console.log(data);

//     if (data.role == "ROLE_ADMIN") navigate("/admin");
//     else if (data.role == "ROLE_CUSTOMER") navigate("/customer");
//     else if (data.role == "ROLE_SELLER") navigate("/seller");

//     // Clear error if fields are filled
//     setError("");

//     // Placeholder for login logic (you'll connect this to your backend later)
//     console.log("Logging in with:", { username, password });

//     // Simulate successful login (for now)
//     // Redirect to another page or handle successful login here
//   };

//   return (
//     <section className="login-section">
//       <div className="login-form-container">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             required
//             value={username} // Bind state to input
//             onChange={(e) => setUsername(e.target.value)} // Update state on input change
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             value={password} // Bind state to input
//             onChange={(e) => setPassword(e.target.value)} // Update state on input change
//           />
//           <button type="submit">Login</button>

//           <div className="login-links">
//             <p>
//               <Link to="/register">Don't have an account? Register Here</Link>
//             </p>
//             <p>
//               <Link to="/forgot-password">Forgot Password?</Link>
//             </p>
//           </div>
//         </form>

//         {/* Display error message if exists */}
//         {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

//         <p className="logout-message" style={{ textAlign: "center" }}>
//           {/* Assuming the backend will handle this */}
//           {/* Display logout success message here */}
//         </p>
//       </div>

//       <div className="login-info-container">
//         <div className="motivational-text">
//           <h2 className="logo-name">Light of the World Furniture</h2>
//           <p className="logo-name">
//             Furniture that Shines | Furniture that Inspires
//           </p>
//         </div>
//         <div className="motivational-text">
//           <h2>Welcome Back to Your Dream Space!</h2>
//           <p>
//             Log in to unlock exclusive access to our latest furniture
//             collections and special deals.
//           </p>
//           <p>
//             Transform your home with our unique designs and elevate your living
//             experience!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginBody;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/loginStyles.css";
import { useNavigate } from "react-router-dom";

const LoginBody = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://lw-efurniture-backend-production.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        // Handle HTTP errors
        if (response.status === 401) {
          setError("Invalid username or password.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
        return;
      }

      const data = await response.json();
      console.log(data);

      // Redirect based on role
      if (data.role === "ROLE_ADMIN") navigate("/admin");
      else if (data.role === "ROLE_CUSTOMER") navigate("/customer");
      else if (data.role === "ROLE_SELLER") navigate("/seller");

      // Clear error on successful login
      setError("");
    } catch (err) {
      console.error("Error:", err);
      setError("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <section className="login-section">
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>

          <div className="login-links">
            <p>
              <Link to="/register">Don't have an account? Register Here</Link>
            </p>
            <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </div>
        </form>

        {/* Display error message if exists */}
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="login-info-container">
        <div className="motivational-text">
          <h2 className="logo-name">Light of the World Furniture</h2>
          <p>Furniture that Shines | Furniture that Inspires</p>
        </div>
        <div className="motivational-text">
          <h2>Welcome Back to Your Dream Space!</h2>
          <p>
            Log in to unlock exclusive access to our latest furniture
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

export default LoginBody;
