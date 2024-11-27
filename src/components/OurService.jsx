import React from "react";
import "../styles/styles.css";
import img1 from "../assets/img/chairandtable.png";
import img2 from "../assets/img/sofa.png";
import img3 from "../assets/img/repaire.jpg";

const OurService = () => {
  return (
    <div>
      <section id="products">
        <h2>Our Furniture Services</h2>
        <p className="section-description">
          Explore our range of services designed to transform your living spaces
          into beautiful, functional areas that reflect your style and needs.
        </p>
        <ul className="services">
          <li className="card-large" id="serv-design">
            <div className="card-image">
              <img src={img1} alt="Furniture Design" />
            </div>
            <div className="card-content">
              <h3>Furniture Design</h3>
              <span className="subtitle">
                Creating spaces that reflect your style.
              </span>
              <ul>
                <li>
                  <a href="#">Living Room Design</a>
                  <span>$500</span>
                </li>
                <li>
                  <a href="#">Bedroom Design</a>
                  <span>$400</span>
                </li>
                <li>
                  <a href="#">Office Space Design</a>
                  <span>$600</span>
                </li>
              </ul>
              <button className="btn-filled-dark">Book Now</button>
            </div>
          </li>
          <li className="card-large" id="serv-custom">
            <div className="card-image">
              <img src={img2} alt="Custom Furniture" />
            </div>
            <div className="card-content">
              <h3>Custom Furniture</h3>
              <span className="subtitle">
                Tailored solutions for your unique needs.
              </span>
              <ul>
                <li>
                  <a href="#">Bespoke Tables</a>
                  <span>$700</span>
                </li>
                <li>
                  <a href="#">Custom Chairs</a>
                  <span>$300</span>
                </li>
                <li>
                  <a href="#">Storage Solutions</a>
                  <span>$450</span>
                </li>
              </ul>
              <button className="btn-filled-dark">Book Now</button>
            </div>
          </li>
          <li className="card-large" id="serv-repair">
            <div className="card-image">
              <img src={img3} alt="Furniture Repair" />
            </div>
            <div className="card-content">
              <h3>Furniture Repair</h3>
              <span className="subtitle">
                Restore your furniture to its former glory.
              </span>
              <ul>
                <li>
                  <a href="#">Wood Repair</a>
                  <span>$250</span>
                </li>
                <li>
                  <a href="#">Refinishing Services</a>
                  <span>$300</span>
                </li>
                <li>
                  <a href="#">Structural Repairs</a>
                  <span>$400</span>
                </li>
              </ul>
              <button className="btn-filled-dark">Book Now</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OurService;
