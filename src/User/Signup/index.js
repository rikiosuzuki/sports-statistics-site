import { useState } from "react";
import { useNavigate } from "react-router";

import * as client from "../client";

function Signup() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Profile/User/Activity");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An error occurred during signup.";
      setError(errorMessage);
    }
  };
  const cancel = async () => {
    navigate("/Public/Home");
  };

    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <label>Username</label>
            <input
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })} />
            <label>Password</label>
            <input
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value })} />
            <label>First Name</label>
            <input
                value={credentials.firstName}
                onChange={(e) => setCredentials({
                    ...credentials,
                    firstName: e.target.value })} />
            <label>Last Name</label>
            <input
                value={credentials.lastName}
                onChange={(e) => setCredentials({
                    ...credentials,
                    lastName: e.target.value })} />
            <label>Date of Birth</label>
            <input
                value={credentials.dob}
                onChange={(e) => setCredentials({
                    ...credentials,
                    dob: e.target.value })} />
            <label>Email</label>
            <input
                value={credentials.email}
                onChange={(e) => setCredentials({
                    ...credentials,
                    email: e.target.value })} />

            <select onChange={(e) => setCredentials({ ...credentials,
                role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>


            <button onClick={signup}>
                Signup
            </button>
            <button onClick={cancel}> Cancel </button>

        </div>
    )




}

export default Signup;
