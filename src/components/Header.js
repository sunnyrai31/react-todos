import React from "react";
import "../styles/Header.css";

function Header(props) {
  const searchBtnClick = (event) => {
    if (event.key === "Enter") {
      props.searchItemCB(event.target.value);
    }
  };
  const clearSearch = (event) => {
    props.searchItemCB("");
  };
  return (
    <div className="header_position">
      <nav className="navbar bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.children}
            {props.brandName}
          </a>
          {/* search bar related code */}
          <div className="container mt-4">
            <div className="input-group search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onKeyPress={searchBtnClick}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="bi bi-x" onClick={clearSearch}></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
