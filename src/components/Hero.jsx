import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <h1>Your One-Stop Shop for Every Furniture Need!</h1>

        <Link to="/products" className="link-no-underline">
          <button className="button-52">Visit Our Products</button>
        </Link>
      </section>
    </div>
  );
};

export default Hero;
