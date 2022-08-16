import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const CompletedWorkOrders = () => {
  const { store, actions } = useContext(Context);
  const [workOrderData, setWorkOrderData] = useState(null);

  useEffect(() => {
    async function fetchCompletedWorkOrders() {
      const data = await actions.getCompletedWorkOrders();
      setWorkOrderData(data);
      console.log(data);
      console.log("fetching completed work orders");
      return data;
    }
    fetchCompletedWorkOrders();
  }, []);

  if (workOrderData == null) {
    return <span>Loading Work Order Data</span>;
  } else {
    return (
      <div>
        {workOrderData.map((workOrder, index) => {
          return <span key={index}>{workOrder.title}</span>;
        })}
      </div>
    );
  }
};
