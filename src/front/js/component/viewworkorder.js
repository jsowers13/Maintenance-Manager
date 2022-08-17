import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const ViewWorkOrder = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentWorkOrder, setCurrentWorkOrder] = useState(null);

  const previouspage = () => {
    history.back();
    return true;
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
      <div className="col text-center">
        <header>
          <span
            type="button"
            className="float-start"
            onClick={() => previouspage()}
          >
            <i className="fa-solid fa-chevron-left"></i>Open Work Orders
          </span>
          <span>{currentWorkOrder.id}</span>
          <span className="float-end">Edit</span>
        </header>
        {currentWorkOrder.title}
        {currentWorkOrder.description}

        <Link to="/">
          <button className="btn btn-primary w-100">Main Menu</button>
        </Link>
      </div>
    );
  }
};
