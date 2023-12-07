import React from "react";

function Heading() {
  // make a title bar with three buttons in it
  return (
    <div className="row">
        <img src={"../../images/nba-logo.jpg"} alt="NBA Logo" width={80} />
      <label>My NBA Page</label>
      <span>
        <button
          className="btn btn-primary float-right"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          Sign In
        </button>
      </span>
    </div>
  );
}
export default Heading;
