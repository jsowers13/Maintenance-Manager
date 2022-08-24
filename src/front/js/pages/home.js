import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Login } from "../component/login";
import { LandingPage } from "../component/userview";
import { MainMenu } from "../component/mainmenu";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card col">
        <div className="card-header text-center">Maintenance Manager</div>
        <div className="card-body">
          {store.activeUser ? <Login /> : <MainMenu />}
        </div>
      </div>

      {/* <h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p> */}
    </div>
  );
};
