import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const AddWorkOrder = () => {
  const { store, actions } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [accessNotes, setAccessNotes] = useState("");
  const [entryAllowed, setEntryAllowed] = useState(true);
  const [billToCustomer, setBillToCustomer] = useState(false);
  const [maintenanceNotes, setMaintenanceNotes] = useState("");
  const [status, setStatus] = useState("call");

  function handleSubmit(event) {
    event.preventDefault();
    actions.createWorkOrder(
      title,
      description,
      category,
      accessNotes,
      entryAllowed,
      billToCustomer,
      maintenanceNotes,
      status
    );
    location.reload();
  }

  return (
    <form className="col-auto" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="titleInput">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="titleInput"
        maxLength={50}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label className="form-label" htmlFor="descInput">
        Description
      </label>
      <input
        type="text"
        className="form-control"
        id="descInput"
        maxLength={250}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <label className="form-label" htmlFor="category-select">
        Category
      </label>
      <select
        className="form-select"
        aria-label="category-select"
        id="category-select"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
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
        onChange={(e) => {
          setAccessNotes(e.target.value);
        }}
      ></textarea>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="entryAllowedcheckbox"
          checked
          onChange={(e) => {
            setEntryAllowed(e.target.value);
          }}
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
          onChange={(e) => {
            setBillToCustomer(e.target.value);
          }}
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
        onChange={(e) => {
          setMaintenanceNotes(e.target.value);
        }}
      ></textarea>
      <label className="form-label" htmlFor="status-select">
        Status
      </label>
      <select
        className="form-select"
        id="status-select"
        aria-label="status-select"
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option defaultValue="call">Call</option>
        <option value="cancelled">Cancelled</option>
        <option value="scheduled">Scheduled</option>
        <option value="on-hold">On Hold</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <div className="d-grid">
        <button className="btn btn-primary btn-lg" type="submit">
          Create Work Order
        </button>
      </div>
    </form>
  );
};
