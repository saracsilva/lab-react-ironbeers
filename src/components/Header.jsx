import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link to={"/"}>
              <h3>Home</h3>
            </Link>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
