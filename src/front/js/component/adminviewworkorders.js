import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const AdminViewWorkOrders = () => {
  const { store, actions } = useContext(Context);
  const [workorderData, setWorkorderData] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchWorkOrders() {
      const data = await actions.getAllWorkOrders();
      console.log("work order data", data);
      setWorkorderData(data);
      console.log("work order data variable", data);
      return data;
    }

    fetchWorkOrders();
  }, []);

  if (workorderData === null) {
    return <h1>Loading data, please wait...</h1>;
  } else {
    return (
      <div className="container text-center">
        <h1>Admin View</h1>
        <table className="table table-striped" id="workOrderTable">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Entry Allowed</th>
              <th scope="col">Bill to Customer</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {workorderData.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.entry_allowed}</td>
                  <td>{item.bill_to_customer}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};
