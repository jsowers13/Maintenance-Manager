import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

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
        <div>
          <h5 className="text-decoration-underline">Call</h5>
          {callList.map((workorder, index) => {
            return (
              <Link to={"workorder/" + workorder.id} key={index}>
                <div className="text-center">
                  <span className="float-start">{workorder.id}</span>
                  <span>{workorder.title}</span>
                </div>
                <hr />
              </Link>
            );
          })}
        </div>
        <div>
          <h5 className="text-decoration-underline">Scheduled</h5>
          {scheduledList.map((workorder, index) => {
            return (
              <Link to={"workorder/" + workorder.id} key={index}>
                <div className="text-center">
                  <span className="float-start">{workorder.id}</span>
                  <span>{workorder.title}</span>
                </div>
                <hr />
              </Link>
            );
          })}
        </div>
        <div>
          <h5 className="text-decoration-underline">On-Hold</h5>
          {onHoldList.map((workorder, index) => {
            return (
              <Link to={"workorder/" + workorder.id} key={index}>
                <div className="text-center">
                  <span className="float-start">{workorder.id}</span>
                  <span>{workorder.title}</span>
                </div>
                <hr />
              </Link>
            );
          })}
        </div>
        <div>
          <h5 className="text-decoration-underline">In-Progress</h5>
          {inProgressList.map((workorder, index) => {
            return (
              <Link to={"workorder/" + workorder.id} key={index}>
                <div className="text-center">
                  <span classname="float-start">{workorder.id}</span>
                  <span>{workorder.title}</span>
                </div>
                <hr />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};
