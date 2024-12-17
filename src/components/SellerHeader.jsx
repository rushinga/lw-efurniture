import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SellerHeader = ({ cartCount, toggleCartModal }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    console.log("Logout");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo or Brand */}
        <a className="navbar-brand" href="#">
          Customer Page
        </a>

        {/* Navbar Links */}
        <div>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link" href="/admin/notifications">
                <i className="bi bi-bell"></i> Notifications
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/profile/:userId">
                <i className="bi bi-person"></i> Profile
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                <i className="bi bi-box-arrow-right" onClick={handleLogout}></i>{" "}
                Logout
              </a>
            </li>
            {/* Cart Icon */}
            <li className="nav-item mx-2">
              <a className="nav-link" href="#" onClick={toggleCartModal}>
                <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
                <span
                  className="cart-count"
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "3px 8px",
                    fontSize: "0.8rem",
                  }}
                >
                  {cartCount}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SellerHeader;
