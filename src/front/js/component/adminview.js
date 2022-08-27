import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const AdminView = () => {
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
    async function fetchUsers() {
      const resp = await actions.getAllUsers();
      console.log("user data", resp);
      setUserData(resp);
      console.log("this is the userData variable", userData);
      return resp;
    }

    fetchUsers();
    fetchWorkOrders();
  }, []);

  if (workorderData === null || userData.length == 0) {
    return <h1>Loading data, please wait...</h1>;
  } else {
    return (
      <div className="container text-center">
        <h1>Admin View</h1>
        {/* Insert ternary operator to determine if userData has been fetched at this point */}
        {userData.length == 0 ? (
          <h3>Loading user data</h3>
        ) : (
          <table id="userTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>System Admin</th>
                <th>Property</th>
                <th>Property Admin</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => {
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.is_system_admin ? "Yes" : "No"}</td>
                  <td>{item.property}</td>
                  <td>{item.is_property_admin ? "Yes" : "No"}</td>
                </tr>;
              })}
            </tbody>
          </table>
        )}

        <table id="workOrderTable"></table>
      </div>
    );
  }
};
