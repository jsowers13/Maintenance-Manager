import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/headerbar.css";

export const Headerbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container row text-center">
        <Link className="col" to={props.leftlink}>
          <span className="tinyfont float-start">{props.lefttitle}</span>
        </Link>
        <span className="col tinyfont">{props.pagetitle}</span>
        <div className="col">
          <Link className="float-end" to={props.rightlink}>
            <span className="tinyfont">{props.righttitle}</span>
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
