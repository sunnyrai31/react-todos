import React from "react";
import "../styles/Header.css";
function Header(props) {
  return (
    <div className="header_position">
      <nav className="navbar bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.brandName}
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Header;
