import React from "react";
import * as client from "../client.js";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


function Account(){
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const save = async () => {

        await client.updateUser(account);
    };
    const { id } = useParams();

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const signout = async () => {
        await client.signout();
        navigate("/signin");
    };


    const fetchAccount = async () => {
        const account = await client.account();
        console.log(account);
        setAccount(account);
    };
    useEffect(() => {
        //console.log(id);
        if (id) {
            console.log("user found");
            findUserById(id);
        } else {
            fetchAccount();
            console.log("test");
        }

    }, []);
    return(
        <div>
            <h1>User Profile</h1>
            {/* page for user to view and edit their profile */}
            {account && (
                <div>
                    <input value={account.password}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                    <input value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                    <input value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                    <input value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                    <input value={account.email}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                    <select onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save}>
                        Save
                    </button>
                    <button onClick={signout}>
                        Signout
                    </button>
                    <Link to="/Public/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}



        </div>
    )
}

export default Account;