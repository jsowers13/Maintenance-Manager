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
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="filterByDropdown"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Filter By
          </button>
          <ul className="dropdown-menu" aria-labelledby="filterByDropdown">
            <li className="dropdown-item">
              <div className="dropend">
                <span
                  className="dropdown-toggle"
                  type="button"
                  id="categoryDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="categoryDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Electric
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Plumbing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      HVAC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Carpentry
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dropdown-item">
              <div className="dropend">
                <span
                  className="dropdown-toggle"
                  type="button"
                  id="statusDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Status
                </span>
                <ul className="dropdown-menu" aria-labelledby="statusDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Call
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cancelled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Scheduled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      On Hold
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      In Progress
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Completed
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
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
