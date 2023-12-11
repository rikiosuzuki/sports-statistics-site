import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Public from "./Public";
import Signin from "./User/Signin";
import Account from "./User/Account";
import Signup from "./User/Signup";
import UserTable from "./User/Account/table";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Public/Home" />} />
          <Route path="/Public/Home" element={<Public />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Public/admin/users" element={<UserTable />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
