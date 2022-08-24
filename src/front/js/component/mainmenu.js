import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { AddWorkOrder } from "./addworkorder";
import { MyWorkOrders } from "./myWorkOrders";
import { CompletedWorkOrders } from "./completedworkorders";
import { OpenWorkOrders } from "./openworkorders";

export const MainMenu = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <ul>
        <li>
          <Link to="/myworkorders">
            <button className="btn btn-lg btn-primary">My Work Orders</button>
          </Link>
        </li>
        <li>
          <Link to="/openworkorders">
            <button className="btn btn-lg btn-primary">Open Work Orders</button>
          </Link>
        </li>
        <li>
          <Link to="/completedworkorders">
            <button className="btn btn-lg btn-primary">
              Completed Work Orders
            </button>
          </Link>
        </li>
        <li>
          <Link to="/newworkorder">
            <button className="btn btn-lg btn-primary">New Work Order</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
