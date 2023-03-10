import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

function Navbar(props) {

    let myStyle = {
      backgroundColor : 'black',
      color : 'white',
    }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={myStyle}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextGens.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {props.explore}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label mx-3"
                htmlFor="flexSwitchCheckDefault"
              >
                Change Mode
              </label>
            </div>

            

          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.proptTypes = {
  home: PropTypes.string.isRequired,
  explore: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps= {
    home : 'Home',
    explore : 'Explore',
    about : 'About'
}

export default Navbar;



// danger : red
// primary : blue
// success : green