import "../styles/adminstyles.css";
import React, { useState, useEffect } from "react";

function AdminMain() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);

  // Fetch Total Users
  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await fetch("http://localhost:9090/admin/total-users");
        const data = await response.json();
        setTotalUsers(data);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };

    // Fetch Recent Activity
    const fetchRecentActivity = async () => {
      try {
        const response = await fetch(
          "http://localhost:9090/admin/recent-activity"
        );
        const data = await response.json();
        setRecentActivity(data);
      } catch (error) {
        console.error("Error fetching recent activity:", error);
      }
    };

    fetchTotalUsers();
    fetchRecentActivity();
  }, []);

  return (
    <main className="main-content">
      <div className="container">
        <h1 className="mb-4">Welcome to the Admin Dashboard</h1>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Total Users</div>
              <div className="card-body">
                <h5 className="card-title">{totalUsers}</h5>
                <p className="card-text">
                  Total registered users in the system.
                </p>
              </div>
            </div>
          </div>
          {/* Add other cards as needed */}
        </div>

        <h2 className="mb-4">Recent Activity</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.length > 0 ? (
              recentActivity.map((activity, index) => (
                <tr key={index}>
                  <td>{new Date(activity.timestamp).toLocaleString()}</td>
                  <td>{activity.action}</td>
                  <td>{activity.username}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No recent activity found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminMain;
