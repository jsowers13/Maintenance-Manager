import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/workorderbanner.css";

export const WorkOrderBanner = (props) => {
  return (
    <div>
      <span className="headerfont fw-bold">{props.datatitle}</span>
      <hr />
      {props.dataset.map((workorder, index) => {
        return (
          <Link
            to={"workorder/" + workorder.id}
            className="text-decoration-none text-black bg-light"
            key={index}
          >
            <div className="row">
              <span className="col tinyfont">{workorder.id}</span>
              <span className="col tinyfont">property</span>
              <span className="col tinyfont">placeholder</span>
            </div>
            <div className="row">
              <span className="col tinyfont">Location</span>
              <span className="col tinyfont">{workorder.category}</span>
              <span className="col tinyfont">
                <i className="fa-solid fa-circle-chevron-right text-primary float-end"></i>
              </span>
            </div>
            <div className="row">
              <span className="col tinyfont">{workorder.title}</span>
            </div>

            <hr />
          </Link>
        );
      })}
    </div>
  );
};

WorkOrderBanner.propTypes = {
  datatitle: PropTypes.string,
  dataset: PropTypes.array,
};
