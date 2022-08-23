import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Headerbar } from "./headerbar";

export const ViewWorkOrder = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentWorkOrder, setCurrentWorkOrder] = useState(null);

  const previouspage = () => {
    history.back();
    return true;
  };

  const EntryBar = (props) => {
    return (
      <div className="row border-bottom">
        <div className="col-3">{props.entryname}</div>
        <div className="col-6">{props.entrydata}</div>
      </div>
    );
  };

  useEffect(() => {
    async function fetchWorkOrder(id) {
      const fetchData = await actions.getWorkOrderByID(id);
      setCurrentWorkOrder(fetchData);
      return fetchData;
    }
    fetchWorkOrder(params.id);
  }, []);

  if (currentWorkOrder == null) {
    return <h1>Loading Work Order Data...</h1>;
  } else {
    return (
      <div className="container">
        {/* <header>
          <span
            type="button"
            className="float-start"
            onClick={() => previouspage()}
          >
            <i className="fa-solid fa-chevron-left"></i>Open Work Orders
          </span>
          <span>{currentWorkOrder.id}</span>
          <span className="float-end">Edit</span>
        </header> */}
        <Headerbar
          leftlink="/"
          lefttitle="Open Work Orders"
          pagetitle={currentWorkOrder.id}
          rightlink="/"
          righttitle="Edit"
        />
        <p>Call Date</p>
        <EntryBar entryname="Property" entrydata="PlaceHolder" />
        <EntryBar entryname="Property Name" entrydata="PlaceHolder" />
        <EntryBar entryname="Issue" entrydata={currentWorkOrder.title} />
        <EntryBar entryname="Category" entrydata={currentWorkOrder.category} />
        <EntryBar
          entryname="Description"
          entrydata={currentWorkOrder.description}
        />
        <EntryBar entryname="Status" entrydata={currentWorkOrder.status} />
        <EntryBar
          entryname="Entry Allowed?"
          entrydata={
            currentWorkOrder.entry_allowed ? (
              <i className="fa-solid fa-circle-check text-success mt-3"></i>
            ) : (
              <i className="fa-solid fa-circle-xmark text-danger mt-3"></i>
            )
          }
        />

        <div class=" row border-bottom px-2">
          <label htmlFor="access-notes-field" class="form-label">
            Access Notes:
          </label>
          <textarea class="rounded" readOnly id="access-notes-field" rows="3">
            {currentWorkOrder.access_notes}
          </textarea>
          <hr />
        </div>
        <EntryBar
          entryname="Bill to Customer?"
          entrydata={
            currentWorkOrder.bill_to_customer ? (
              <i className="fa-solid fa-circle-check text-success mt-3"></i>
            ) : (
              <i className="fa-solid fa-circle-xmark text-danger mt-3"></i>
            )
          }
        />
        {/* <div className="row border-bottom">
          <p>Maintenance Notes:</p>
          <textarea className="m-2">
            {currentWorkOrder.maintenance_notes}
          </textarea>
        </div> */}
        <div class=" row border-bottom px-2">
          <label htmlFor="maint-notes-field" class="form-label">
            Maintenance Notes:
          </label>
          <textarea class="rounded" readOnly id="maint-notes-field" rows="3">
            {currentWorkOrder.maintenance_notes}
          </textarea>
        </div>

        <Link to="/">
          <button className="btn btn-primary w-100">Main Menu</button>
        </Link>
      </div>
    );
  }
};
