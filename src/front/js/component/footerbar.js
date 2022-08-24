import React from "react";
import { Link } from "react-router-dom";

export const Footerbar = () => {
  return (
    <ul className="nav nav-justified">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/mainmenu">
          Main Menu
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/myworkorders">
          My Work Orders
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/openworkorders">
          Open Work Orders
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/completedworkorders">
          Completed
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/newworkorder">
          Add Work Order
        </a>
      </li>
    </ul>
  );
};
