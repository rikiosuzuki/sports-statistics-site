import React from "react";
import Sidebar from "./Sidebar";
import Heading from "./Heading";

function Public() {
  return (
    <div className="row">
        <Heading />
      <div className="row">
        <div className="col-2">
            <Sidebar />
        </div>
        <div className="col-11">
            main page
        </div>
      </div>
    </div>
  );
}
export default Public;

