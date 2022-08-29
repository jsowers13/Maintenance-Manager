import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const AdminHome = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/admin/view/workorders">View All Work Orders</Link>
      <Link to="/admin/view/users">View All Users</Link>
      <Link to="/admin/view/properties">View All Properties</Link>
    </div>
  );
};
