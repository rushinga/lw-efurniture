import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="banner">Get free delivery on orders over 100k rwf</div>
      <nav>
        <div id="logo">
          Light of the World <br />
          Furniture
        </div>
        <ul className="navigation-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <a th:href="'#about-us'">About us</a>
          </li>
          <li>
            <a th:href="'#contact-info'">Contact</a>
          </li>
        </ul>

        <div id="utility">
          <Link to="/login" className="link-no-underline">
            <button className="button-86">Login</button>
          </Link>

          <Link to="/register" className="link-no-underline">
            <button className="button-86">Get Started</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
