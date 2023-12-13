import React, {useState} from "react";
import * as client from "../client";
import {useNavigate} from "react-router";

function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
      await client.signin(credentials);
      navigate("/Profile");
    };
    const cancel = async () => {
        navigate("/Public/Home");
        };

    return (
        <div>
            <h3>Signin page</h3>
            <label>Username</label>
            <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <label>Password</label>
            <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button onClick={signin}> Signin </button>
            <button onClick={cancel}> Cancel </button>

        </div>
    );
}
export default Signin;