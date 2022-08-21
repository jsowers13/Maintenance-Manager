import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Headerbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to={props.leftlink}>
          <span className="navbar-brand mb-0 h1">{props.lefttitle}</span>
        </Link>
        <h1>{props.pagetitle}</h1>
        <div className="ml-auto">
          <Link to={props.rightlink}>
            <button className="btn btn-primary">{props.righttitle}</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

Headerbar.propTypes = {
  leftlink: PropTypes.string,
  lefttitle: PropTypes.string,
  pagetitle: PropTypes.string,
  rightlink: PropTypes.string,
  righttitle: PropTypes.string,
};
