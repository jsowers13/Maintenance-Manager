import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const MyWorkOrders = () => {
  const { store, actions } = useContext(Context);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await actions.getAllWorkOrders();
      setTableData(data);
      return data;
    }
    fetchData();
  }, []);

  return (
    <div className="col">
      {tableData.map((workOrder, index) => {
        return (
          <Link to={"/workorder/" + workOrder.id} key={index}>
            <button className="btn btn-primary w-100" type="button">
              <span className="float-start">{workOrder.title}</span>
              <i className="fa-solid fa-circle-arrow-right float-end mt-1"></i>
            </button>
          </Link>
        );
      })}
    </div>
  );
};
