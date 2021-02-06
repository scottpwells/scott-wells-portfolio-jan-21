import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_transparent-300.png"
const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">
              <img src={logo} className="logo" alt="logo" /></a>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to={"/Portfolio"}>
                    Portfolio{" "}
                  </NavLink>
                  <NavLink className="nav-link" to={"/About"}>
                    About
                  </NavLink>
                  {/* <a className="nav-link" href={"/Contact"}>Contact Me</a> */}
                  <a
                    className="nav-link"
                    href={"https://github.com/scottpwells"}
                  >
                    Github
                  </a>
                  <a
                    className="nav-link"
                    href={"https://www.linkedin.com/in/scott-wells-8262303/"}
                  >
                    Linkedin
                  </a>

                  {/* <a className="nav-link disabled" href="About.js" tabindex="-1" aria-disabled="true">Disabled</a> */}
                </div>
              
            
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
