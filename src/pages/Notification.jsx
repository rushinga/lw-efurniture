import React, { useState } from "react";
import AdminMain from "../components/AdminMain";
import AdminNav from "../components/AdminNav";
import axios from "axios";
import "../styles/notification.css";

const Notification = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // For displaying feedback to the user

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data payload
    const payload = {
      title,
      message,
    };

    try {
      // Send a POST request to the backend
      const response = await axios.post(
        `http://localhost:9090/notifications/send?title=${title}&message=${message}`
      );

      // Handle success
      setStatus("Notification sent successfully!");
      console.log("Response:", response.data);

      // Reset form fields
      setTitle("");
      setMessage("");
    } catch (error) {
      // Handle errors
      setStatus("Failed to send notification. Please try again.");
      console.error("Error:", error);
    }
  };

  // return (
  //   <div>
  //     <AdminNav />
  //     <div className="notification">
  //       <form onSubmit={handleSubmit} className="notification_form">
  //         <div className="input">
  //           <label htmlFor="title">Title</label>
  //           <input
  //             type="text"
  //             name="title"
  //             id="title"
  //             value={title}
  //             onChange={(e) => setTitle(e.target.value)} // Bind state to input
  //             required
  //           />
  //         </div>
  //         <div className="input">
  //           <label htmlFor="message">Message</label>
  //           <input
  //             type="text"
  //             name="message"
  //             id="message"
  //             value={message}
  //             onChange={(e) => setMessage(e.target.value)} // Bind state to input
  //             required
  //           />
  //         </div>
  //         <button type="submit" className="btn">
  //           Submit
  //         </button>
  //       </form>
  //       {/* Feedback message */}
  //       {status && <p>{status}</p>}
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <AdminNav />
      <div className="notification">
        <h1>Send Notifications</h1>

        <div className="tips">
          <h2>Tips for Effective Notifications</h2>
          <ul>
            <li>Keep the title concise and clear.</li>
            <li>Write a message that provides essential details.</li>
            <li>Avoid sending duplicate or unnecessary notifications.</li>
          </ul>
        </div>
        {status && <p className="success-message">{status}</p>}
        <form onSubmit={handleSubmit} className="notification_form">
          <div className="input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notification title"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter the notification message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notification;
