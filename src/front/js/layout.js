import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footerbar } from "./component/footerbar";
import { Footer } from "./component/footer";
import { ViewWorkOrder } from "./component/viewworkorder";
import { MyWorkOrders } from "./component/myWorkOrders";
import { OpenWorkOrders } from "./component/openworkorders";
import { CompletedWorkOrders } from "./component/completedworkorders";
import { AddWorkOrder } from "./component/addworkorder";
import { AdminView } from "./component/adminview";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Navbar /> */}
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<ViewWorkOrder />} path="/workorder/:id" />
            <Route element={<MyWorkOrders />} path="/myworkorders" />
            <Route element={<OpenWorkOrders />} path="/openworkorders" />
            <Route
              element={<CompletedWorkOrders />}
              path="/completedworkorders"
            />
            <Route element={<AddWorkOrder />} path="/newworkorder" />
            <Route element={<AdminView />} path="/admin/view" />
          </Routes>
          <Footerbar />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
