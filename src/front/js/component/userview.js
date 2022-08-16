import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { AddWorkOrder } from "./addworkorder";
import { MyWorkOrders } from "./myWorkOrders";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <ul
        className="nav nav-pills nav-justified mb-3"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-mainMenu-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-mainMenu"
            type="button"
            role="tab"
            aria-controls="pills-mainMenu"
            aria-selected="true"
          >
            Main Menu
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-myWO-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-myWO"
            type="button"
            role="tab"
            aria-controls="pills-myWO"
            aria-selected="false"
          >
            My Work Orders
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-unassigned-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-unassigned"
            type="button"
            role="tab"
            aria-controls="pills-unassigned"
            aria-selected="false"
          >
            Unassigned
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-completed-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-completed"
            type="button"
            role="tab"
            aria-controls="pills-completed"
            aria-selected="false"
          >
            Completed
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-newWO-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-newWO"
            type="button"
            role="tab"
            aria-controls="pills-newWO"
            aria-selected="false"
          >
            New Work Order
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-mainMenu"
          role="tabpanel"
          aria-labelledby="pills-mainMenu-tab"
        >
          <ul
            className="nav nav-pills flex-column mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-mainMenu-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-mainMenu"
                type="button"
                role="tab"
                aria-controls="pills-mainMenu"
                aria-selected="true"
              >
                Main Menu
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-myWO-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-myWO"
                type="button"
                role="tab"
                aria-controls="pills-myWO"
                aria-selected="false"
              >
                My Work Orders
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-unassigned-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-unassigned"
                type="button"
                role="tab"
                aria-controls="pills-unassigned"
                aria-selected="false"
              >
                Unassigned
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-completed-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-completed"
                type="button"
                role="tab"
                aria-controls="pills-completed"
                aria-selected="false"
              >
                Completed
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-newWO-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-newWO"
                type="button"
                role="tab"
                aria-controls="pills-newWO"
                aria-selected="false"
              >
                New Work Order
              </button>
            </li>
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="pills-myWO"
          role="tabpanel"
          aria-labelledby="pills-myWO-tab"
        >
          <MyWorkOrders />
        </div>
        <div
          className="tab-pane fade"
          id="pills-unassigned"
          role="tabpanel"
          aria-labelledby="pills-unassigned-tab"
        >
          Unassigned Content
        </div>
        <div
          className="tab-pane fade"
          id="pills-completed"
          role="tabpanel"
          aria-labelledby="pills-completed-tab"
        >
          Completed Content
        </div>
        <div
          className="tab-pane fade"
          id="pills-newWO"
          role="tabpanel"
          aria-labelledby="pills-newWO-tab"
        >
          New Work Order Content
          <AddWorkOrder />
        </div>
      </div>
    </div>
  );
};
