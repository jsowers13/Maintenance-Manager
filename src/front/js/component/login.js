import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("login");

  const handleLogin = (e) => {
    e.preventDefault();
    actions.login(email, password);
    console.log(store.activeUser);
    // location.reload();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    actions.signup(email, password);
    console.log(store.activeUser);
  };
  if (view == "login") {
    return (
      <form onSubmit={handleLogin}>
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
          <a href="#" className="text-center" onClick={() => setView("signup")}>
            First Time Users Click Here
          </a>
        </div>
      </form>
    );
  } else
    return (
      <form onSubmit={handleSignup}>
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
            Register
          </button>
          <a href="#" className="text-center" onClick={() => setView("login")}>
            Already have an account? Click Here
          </a>
        </div>
      </form>
    );
};
