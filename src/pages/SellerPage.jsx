import React, { useState } from "react";
import SellerHeader from "../components/SellerHeader";
import SellerMain from "../components/SellerMain";

const SellerPage = () => {
  // State to track the cart count and the items in the cart
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Function to handle adding to cart
  const handleAddToCart = (productName) => {
    setCartItems([...cartItems, productName]); // Add product to cartItems array
    setCartCount(cartCount + 1); // Increment cart count
    console.log(`${productName} added to cart`);
  };

  // Toggle Cart Modal visibility
  const toggleCartModal = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div>
        {/* Pass the cart count and handleAddToCart function to SellerHeader and SellerMain */}
        <SellerHeader cartCount={cartCount} toggleCartModal={toggleCartModal} />
        <SellerMain handleAddToCart={handleAddToCart} />

        {/* Cart Modal */}
        {showCart && (
          <div className="cart-modal">
            <div className="cart-modal-content">
              <h2>Shopping Cart</h2>
              <ul>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <li>Your cart is empty</li>
                )}
              </ul>
              <button onClick={toggleCartModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SellerPage;
