import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Signin from "./User/Signin";
import Account from "./User/Account";
import Signup from "./User/Signup";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/account" element={<Account/>}  />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
