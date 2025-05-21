import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Btechwala</Link>
      <div className="navbar-links">
      <Link to="/home">Home</Link>
      <Link to="/btechwala">Store</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Logout</Link>
      </div>
    </nav>
  ) 
}

export default Navbar

