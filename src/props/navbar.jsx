import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email")?.toLowerCase();
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Get cart count from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  useEffect(() => {
    console.log('Navbar auth state:', {
      userEmail,
      isAdmin,
      storedIsAdmin: localStorage.getItem("isAdmin"),
      hasToken: !!localStorage.getItem("token")
    });
  }, [userEmail, isAdmin]);

  const handleLogout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      localStorage.removeItem("isAdmin");
      navigate("/login", { replace: true });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Btechwala</Link>
        
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/btechwala" onClick={() => setIsMenuOpen(false)}>Store</Link>
          <Link to="/cart" className="cart-link" onClick={() => setIsMenuOpen(false)}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          {isAdmin && (
            <Link to="/add-product" onClick={() => setIsMenuOpen(false)}>Add Product</Link>
          )}
          <span className="user-info">
            {userEmail} {isAdmin ? '(Admin)' : ''}
          </span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
