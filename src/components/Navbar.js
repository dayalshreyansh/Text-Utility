import React,{useState} from "react";

import PropTypes from "prop-types";
import {Link} from "react-router-dom"
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}  >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" >
          {props.title}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"  >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={props.changeMode}
              />
              <label class={`form-check-label text-${props.mode==="light"?"dark":"light"}`}  for="flexSwitchCheckDefault" >
                {props.modeText}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
