import React, { useState } from "react";
import * as client from "../client";
import { useNavigate } from "react-router";
import "./index.css";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Profile/User/Activity");
  };
  const cancel = async () => {
    navigate("/Public/Home");
  };

  return (
    <div className="backgroudStyle">
      <div className="contentBox">
        <div className="SignInStyle">
          <label>Sign-In Page</label>
        </div>
        <div
          style={{
            justifyContent: "center",
            color: "#fec524",
            alignItems: "center",
            // display: "flex",
            textAlign: "center",
          }}
        >
          <div style={{ margin: "5px" }}>
            <label>Username</label>
            <input
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </div>
          <div style={{ margin: "5px" }}>
            <label>Password</label>
            <input
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <button className="buttonStyle" onClick={signin}>
            {" "}
            Signin{" "}
          </button>
          <button className="buttonStyle" onClick={cancel}>
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signin;
