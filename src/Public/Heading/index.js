import React from "react";
import "./index.css";
import { statSearch } from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Heading() {
  const navigate = useNavigate();

  return (
    <div className="heading-bar" >
      <div className="heading-center">
        <label className="titleStyle">My NBA Statistics Page</label>
      </div>

      <span className="button-stuff">
        <button className="signButtons" onClick={() => navigate("/signin")}>
          Sign In
        </button>
        <button className="signButtons" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </span>
    </div>
  );
}
export default Heading;
