import React from "react";
import "../styles/Header.css";
function Header(props) {
  const searchBtnClick = (event) => {
    if (event.key === "Enter") {
      props.searchItemCB(event.target.value);
    }
  };
  return (
    <div className="header_position">
      <nav className="navbar bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.brandName}
          </a>
          <div className="search_bar">
            <input
              className="search_input"
              type="text"
              placeholder="search item"
              onKeyPress={searchBtnClick}
            ></input>
            <i className="bi bi-search" onClick={searchBtnClick}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
