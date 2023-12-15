//create a welcome screen with an about page of the 3 site creators

import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Welcome() {
  return (
    <div className="row contentStyle" >
        <h1>Welcome to our NBA Content Page</h1>
        <h3>Created by: </h3>
        <h4>Renke, Rikio, and Chris</h4>
    </div>
  );
}
export default Welcome;
