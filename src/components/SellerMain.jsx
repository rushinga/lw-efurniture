import React from "react";
import "../styles/sellerproduct.css";
import img1 from "../assets/img/chairandtable.png";
import img2 from "../assets/img/sofa.png";
import img3 from "../assets/img/repaire.jpg";
import img4 from "../assets/img/chair.png";

function SellerMain({ handleAddToCart }) {
  return (
    <section>
      {/* Living Room Furniture */}
      <div className="category">
        <div className="category-header">
          <h3>Living Room Furniture</h3>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">
              <img src={img1} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Elegant Sofa</h3>
              <p className="price">$799</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Elegant Sofa")}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img2} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Modern Coffee Table")}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img3} alt="Furniture Design" />{" "}
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Modern Coffee Table")}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img4} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Modern Coffee Table")}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img3} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Modern Coffee Table")}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img4} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Modern Coffee Table")}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img1} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Modern Coffee Table")}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img src={img2} alt="Furniture Design" />
            </div>
            <div className="product-details">
              <h3>Modern Coffee Table</h3>
              <p className="price">$299</p>
              <button
                className="btn-filled-dark"
                onClick={() => handleAddToCart("Modern Coffee Table")}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerMain;
