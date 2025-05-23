import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); 

  const Logout = (e) => {
    e.preventDefault(); 
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/login"); 
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Btechwala</Link>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/btechwala">Store</Link>
        <Link to="/cart">Cart</Link>
        <a href="/login" onClick={Logout}>Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;