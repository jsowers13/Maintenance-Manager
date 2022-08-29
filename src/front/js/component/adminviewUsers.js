import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const AdminViewUsers = () => {
  const { store, actions } = useContext(Context);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const resp = await actions.getAllUsers();
      setUserData(resp);
      console.log(userData);
      return resp;
    }
    fetchUserData();
  }, []);
  if (userData == null) {
    return <h1>Loading Data, please wait...</h1>;
  } else {
    return (
      <div className="container">
        <h1>Admin View</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">System Admin</th>
              <th scope="col">Property Admin</th>
              <th scope="col">WorkOrders</th>
              <th scope="col">Properties</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.email}</td>
                  <td>{item.is_system_admin}</td>
                  <td>{item.is_property_admin}</td>
                  <td>{item.work_orders}</td>
                  <td>{item.properties}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};
