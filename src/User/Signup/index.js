import {useState} from "react";
import {useNavigate} from "react-router";

import * as client from "../client";



function Signup(){

    const [credentials, setCredentials] = useState({username: "", password: "" });
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })} />
            <input
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value })} />
            <button onClick={signup}>
                Signup
            </button>
        </div>
    )




}

export default Signup;