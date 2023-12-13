import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function UserHeading() {

  const navigate = useNavigate();

  return (
    <div className="heading">
      {/* <img src={".src/images/nba-logo.jpg"} alt="NBA Logo" width={80} /> */}

      <div className="heading-center">
        <h2>User NBA Page</h2>
      </div>

      <span>
        <button onClick={() => navigate("/Public/Home")}>Sign out</button>
      </span>
    </div>
  );
}
export default UserHeading;
