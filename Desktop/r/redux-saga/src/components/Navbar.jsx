import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div onClick={() => navigate("/")}>Home</div>
      <div onClick={() => navigate("/dashboard")}>Dashboard</div>
    </div>
  );
}

export default Navbar;
