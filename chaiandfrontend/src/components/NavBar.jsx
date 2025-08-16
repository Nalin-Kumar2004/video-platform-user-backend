import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
