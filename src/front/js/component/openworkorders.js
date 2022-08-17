import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { WorkOrderBanner } from "./workorderbanner";

export const OpenWorkOrders = () => {
  const { store, actions } = useContext(Context);
  const [callList, setCallList] = useState(null);
  const [scheduledList, setScheduledList] = useState(null);
  const [onHoldList, setOnHoldList] = useState(null);
  const [inProgressList, setInProgressList] = useState(null);

  useEffect(() => {
    async function fetchDataByStatus(status) {
      const data = await actions.getWorkOrdersByStatus(status);
      if (status == "call") {
        setCallList(data);
      } else if (status == "scheduled") {
        setScheduledList(data);
      } else if (status == "on-hold") {
        setOnHoldList(data);
      } else if (status == "in-progress") {
        setInProgressList(data);
      } else {
        console.log("inappropriate status selected for fetch");
      }
      return data;
    }

    fetchDataByStatus("call");
    fetchDataByStatus("scheduled");
    fetchDataByStatus("on-hold");
    fetchDataByStatus("in-progress");
  }, []);

  if (
    callList == null ||
    scheduledList == null ||
    onHoldList == null ||
    inProgressList == null
  ) {
    return "Loading work order data";
  } else {
    return (
      <div>
        <WorkOrderBanner datatitle={"Call"} dataset={callList} />
        <WorkOrderBanner datatitle={"In-Progress"} dataset={inProgressList} />
        <WorkOrderBanner datatitle={"Scheduled"} dataset={scheduledList} />
        <WorkOrderBanner datatitle={"On-Hold"} dataset={onHoldList} />
      </div>
    );
  }
};
