import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Public from "./Public";
import Signin from "./User/Signin";
import Signup from "./User/Signup";
import UserTable from "./User/Profile/table";
import User from "./User/Profile";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Public/Home" />} />
          <Route path="/Public/Home" element={<Public />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Profile/User/AllUsers" element={<UserTable />} /> */}
          <Route path="/Profile/" element={<Navigate to="/Profile/User" />} />
          <Route path="/Profile/User/*" element={<User />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
