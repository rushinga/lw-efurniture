import React, { useState, useEffect } from "react";
import axios from "axios";
import SellerHeader from "../components/SellerHeader"; // Import SellerHeader
import "../styles/sellercss.css"; // Include additional styling for notifications

function Notifications() {
  const [notifications, setNotifications] = useState([]); // State for notifications

  // Fetch notifications from the backend
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/notifications/user/unread"
      );
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Mark all notifications as read
  const markAllAsRead = async () => {
    try {
      await axios.put(
        "http://localhost:9090/notifications/user/mark-all-as-read"
      );
      setNotifications([]); // Clear the notifications after marking as read
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  // Fetch notifications on component load
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      {/* SellerHeader Component */}
      <SellerHeader cartCount={0} />{" "}
      {/* Pass any props needed for the SellerHeader */}
      {/* Notifications Section */}
      <section id="seller-section">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h2>Unread Notifications</h2>
          </div>

          {/* Notifications List */}
          <div className="notifications-section">
            {notifications.length > 0 ? (
              <div>
                <ul className="notification-list">
                  {notifications.map((notification) => (
                    <li key={notification.id} className="notification-item">
                      <div className="notification-content">
                        <h4>{notification.title}</h4>
                        <p>{notification.message}</p>
                      </div>
                      <span className="timestamp">
                        {new Date(notification.timestamp).toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Mark All as Read Button */}
                <button className="btn-mark-read" onClick={markAllAsRead}>
                  Mark All as Read
                </button>
              </div>
            ) : (
              <p className="no-notifications">No unread notifications.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Notifications;
