import React from "react";
import Sidebar from "./Sidebar";
import Heading from "./Heading";
import Home from "./Home";

function Public() {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "#1d428a",
      }}
    >
      <Heading />
      <div className="container">
        <div className="row" style={{ minHeight: "100vh" }}>
          <div className="col-1">
            <Sidebar />
          </div>
          <div className="col-11" >
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Public;
