import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const AddWorkOrder = () => {
  const { store, actions } = useContext(Context);

  return (
    <form className="col-auto">
      <label className="form-label" htmlFor="titleInput">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="titleInput"
        maxLength={50}
      />
      <label className="form-label" htmlFor="descInput">
        Description
      </label>
      <input
        type="text"
        className="form-control"
        id="descInput"
        maxLength={250}
      />
      <label className="form-label" htmlFor="category-select">
        Category
      </label>
      <select
        className="form-select"
        aria-label="category-select"
        id="category-select"
      >
        <option defaultValue="none">Choose One</option>
        <option value="electrical">Electrical</option>
        <option value="plumbing">Plumbing</option>
        <option value="hvac">HVAC</option>
        <option value="carpentry">Carpentry</option>
      </select>
      <label className="form-label" htmlFor="accessNoteInput">
        Access Notes
      </label>
      <textarea
        className="form-control"
        id="accessNoteInput"
        maxLength={100}
      ></textarea>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="entryAllowedcheckbox"
          value="Yes"
        />
        <label className="form-check-label" htmlFor="entryAllowedcheckbox">
          Entry Allowed?
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="billtoCustomercheckbox"
          value="yes"
        />
        <label className="form-check-label" htmlFor="billtoCustomercheckbox">
          Bill to Customer?
        </label>
      </div>
      <label className="form-label" htmlFor="maintenance-notes">
        Maint. Notes
      </label>
      <textarea
        className="form-control"
        id="maintenance-notes"
        maxLength={1000}
      ></textarea>
      <label className="form-label" htmlFor="status-select">
        Status
      </label>
      <select
        className="form-select"
        id="status-select"
        aria-label="status-select"
      >
        <option defaultValue="call">Call</option>
        <option value="cancelled">Cancelled</option>
        <option value="scheduled">Scheduled</option>
        <option value="on-hold">On Hold</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </form>
  );
};
