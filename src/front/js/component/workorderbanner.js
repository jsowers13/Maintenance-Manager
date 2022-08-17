import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const WorkOrderBanner = (props) => {
  return (
    <div>
      <h5 className="text-decoration-underline">{props.datatitle}</h5>
      {props.dataset.map((workorder, index) => {
        return (
          <Link
            to={"workorder/" + workorder.id}
            className="text-decoration-none text-black bg-light"
            key={index}
          >
            <div className="row">
              <div className="col">
                <p className="my-0">{workorder.id}</p>
                <p className="my-0">Location</p>
                <p className="my-0">{workorder.title}</p>
              </div>
              <div className="col text-center">
                <p className="my-0">Property</p>
                <p className="my-0">{workorder.category}</p>
              </div>
              <div className="col">
                <span className="float-end">
                  <i class="fa-solid fa-circle-chevron-right text-primary my-3 fs-1"></i>
                </span>
              </div>
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
