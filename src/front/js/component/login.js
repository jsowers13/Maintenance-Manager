import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <label htmlFor="emailInput" className="form-label">
        Email Address
      </label>
      <input
        type="email"
        className="form-control "
        placeholder="Email Address"
        id="emailInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="passwordInput" className="form-label mt-2">
        Password
      </label>
      <input
        type="password"
        className="form-control "
        placeholder="Password"
        id="passwordInput"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="d-grid gap-2 mt-5">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};
