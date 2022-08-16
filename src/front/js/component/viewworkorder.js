import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const ViewWorkOrder = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [currentWorkOrder, setCurrentWorkOrder] = useState(null);

  useEffect(() => {
    async function fetchWorkOrder(id) {
      const fetchData = await actions.getWorkOrderByID(id);
      setCurrentWorkOrder(fetchData);
      return fetchData;
    }
    fetchWorkOrder(params.id);
  });

  if (currentWorkOrder == null) {
    return <h1>Loading Work Order Data...</h1>;
  }
  return (
    <div>
      {currentWorkOrder.title}
      {currentWorkOrder.description}
    </div>
  );
};
