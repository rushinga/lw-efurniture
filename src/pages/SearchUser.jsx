import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SearchUser() {
  const [username, setUsername] = useState(""); // State to store the search query
  const [users, setUsers] = useState([]); // State to store the search results
  const [error, setError] = useState(null); // To handle any errors
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle input change for search
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submit or search button click
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:9090/admin/search/results?username=${username}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setUsers(data); // Set the users state with the fetched data
    } catch (error) {
      setError("Failed to fetch users. Please try again.");
      console.error("Error:", error);
    }
  };

  // Handle the Back button click to navigate to /usermgt
  const handleBackClick = () => {
    navigate("/usermgt"); // Navigate to the /usermgt route
  };

  // Handle navigation to user profile page
  const handleViewProfile = (userId) => {
    navigate(`/profile/${userId}`); // Navigate to the user's profile page
  };

  return (
    <div className="container mt-4">
      <h2>Search Users</h2>

      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* Back Button */}
      <button onClick={handleBackClick} className="btn btn-secondary mt-3">
        Back to User Management
      </button>

      {/* Error Message */}
      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {/* Search Results */}
      <div className="mt-4">
        {users.length > 0 ? (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                <strong>{user.username}</strong> - {user.firstName}{" "}
                {user.lastName}
                <br />
                <small>{user.email}</small>
                {/* View Profile Button */}
                <button
                  onClick={() => handleViewProfile(user.id)}
                  className="btn btn-info btn-sm mt-2"
                >
                  View Profile
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchUser;
