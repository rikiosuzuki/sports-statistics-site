import React from "react";
import Sidebar from "./Sidebar";
import Heading from "./Heading";
import Home from "./Home";

function Public() {
  return (
    <div className="row">
      <Heading />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Public;
