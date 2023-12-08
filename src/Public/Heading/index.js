import React from "react";
import {useNavigate} from "react-router";

function Heading() {
  // make a title bar with three buttons in it

    const navigate = useNavigate();
  return (
    <div className="row">
        <img src={"../../images/nba-logo.jpg"} alt="NBA Logo" width={80} />
      <label>My NBA Page</label>
      <span>
        <button
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
          <button onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </span>
    </div>
  );
}
export default Heading;
