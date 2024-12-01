import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/sellercss.css"; // Include additional styling for notifications

function Seller() {
  const products = [
    { name: "Elegant Sofa", price: 799, image: "/img/coffee-table.jpg" },
    { name: "Modern Coffee Table", price: 299, image: "/img/coffee-table.jpg" },
    {
      name: "Comfortable Armchair",
      price: 499,
      image: "/img/coffee-table.jpg",
    },
    { name: "Entertainment Unit", price: 599, image: "/img/coffee-table.jpg" },
  ];

  const [notifications, setNotifications] = useState([]);

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

  const markAllAsRead = async () => {
    try {
      await axios.put(
        "http://localhost:9090/notifications/user/mark-all-as-read"
      );
      setNotifications([]);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleProductAction = (productName) => {
    alert(`You selected: ${productName}`);
  };

  return (
    <section id="seller-section">
      {/* Header */}
      <div className="header">
        <h2>Seller Dashboard</h2>
      </div>

      {/* Notifications Section */}
      <div className="notifications-section">
        <h2>Unread Notifications</h2>
        {notifications.length > 0 ? (
          <div>
            <ul className="notification-list">
              {notifications.map((notification) => (
                <li key={notification.id} className="notification-item">
                  <h3>{notification.title}</h3>
                  <p>{notification.message}</p>
                  <span className="timestamp">
                    {new Date(notification.timestamp).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
            <button className="btn-mark-read" onClick={markAllAsRead}>
              Mark All as Read
            </button>
          </div>
        ) : (
          <p>No unread notifications.</p>
        )}
      </div>
      <div className="header">
        <p>Manage your listings and track your sales seamlessly.</p>
      </div>
      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <button
                className="btn-action"
                onClick={() => handleProductAction(product.name)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Seller;
