import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams(); // Get the userId from the URL
  const [user, setUser] = useState(null); // State to hold the user profile data
  const navigate = useNavigate(); // Hook for navigation

  // Fetch the user's profile based on the userId
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Change this API URL to use the `id` query parameter, as expected by your backend
        const response = await fetch(`http://localhost:9090/user?id=${userId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]); // Run effect when userId changes

  // Handle the Back button click to navigate to /usermgt
  const handleBackClick = () => {
    navigate("/usermgt"); // Navigate to the /usermgt route
  };

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>

      {user ? (
        <div>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phoneNumber}
          </p>

          {/* Back Button */}
          <button onClick={handleBackClick} className="btn btn-secondary mt-3">
            Back to User Management
          </button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default UserProfile;
