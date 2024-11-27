import React from "react";
import "../styles/styles.css"; // Adjust the path as needed

function ProductShow() {
  const promptLogin = () => {
    const userResponse = window.confirm(
      "Please log in or register to proceed with your purchase."
    );
    if (userResponse) {
      // Redirect to login page
      window.location.href = "/login"; // Update the URL as per your login page
    }
  };

  return (
    <section id="e-showroom">
      <h2>Our E-Showroom</h2>
      <p className="section-description">
        Explore our exclusive collection of furniture products designed to
        enhance your living spaces.
      </p>

      {/* Living Room Furniture */}
      <div className="category">
        <div className="category-header">
          <h3>Living Room Furniture</h3>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="/img/sofa.jpg" alt="Elegant Sofa" />
            </div>
            <div className="product-details">
              <h3>Elegant Sofa</h3>
              <p className="price">$799</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/coffee-table.jpg" alt="Modern Coffee Table" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/armchair.jpg" alt="Comfortable Armchair" />
            </div>
            <div className="product-details">
              <h3>Comfortable Armchair</h3>
              <p className="price">$499</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src="/img/entertainment-unit.jpg" alt="Entertainment Unit" />
            </div>
            <div className="product-details">
              <h3>Entertainment Unit</h3>
              <p className="price">$599</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShow;
