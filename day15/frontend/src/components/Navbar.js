import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">AuthApp</div>
      <ul className="navbar-links">
        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li className="welcome">Hello, {user.name}</li>
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
