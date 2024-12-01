import React from "react";
import AdminNav from "../components/AdminNav";
import axios from "axios";

const ExportData = () => {
  const handleExportData = async () => {
    try {
      // Send GET request to the backend endpoint
      const response = await axios.get(
        "http://localhost:9090/admin/download/users",
        {
          responseType: "blob", // Ensures the response is treated as a file
        }
      );

      // Create a Blob object from the response data
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.csv"); // Specify the file name
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to export data:", error);
      alert("An error occurred while exporting data. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <AdminNav />
      <div style={styles.content}>
        <h1 style={styles.title}>Export User Data</h1>
        <p style={styles.description}>
          Click the button below to export user data as a CSV file.
        </p>
        <button style={styles.button} onClick={handleExportData}>
          Export Data
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "500px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default ExportData;
