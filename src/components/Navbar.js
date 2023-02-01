import React from "react";
import PropTypes from "prop-types";
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
          <a className="navbar-brand" href="/">
            TextGens.com
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.explore}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.about}
                </a>
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
                for="flexSwitchCheckDefault"
              >
                Change Mode
              </label>
            </div>

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#212529",
                  color: props.mode === "light" ? "light" : "dark",
                }}
                // style={props.mode==='light'?{backgroundColor:'dark'}:{backgroundColor:'light'}}
              />
              <button
                className={`btn btn-outline-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                type="submit"
              >
                Search
              </button>
            </form> */}

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