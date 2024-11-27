import React from "react";
import "../styles/styles.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg ">
        <p className="footer__text">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/ashimwe-cedrick"
            target="_blank"
            rel="noopener"
          >
            Ashimwe Rushinga Cedrick
          </a>{" "}
          &copy; 2024 Your Furniture Company
        </p>
      </footer>
    </div>
  );
};

export default Footer;
