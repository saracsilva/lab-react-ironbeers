import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <h3>Home</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
