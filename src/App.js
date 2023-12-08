import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Public from "./Public";
import Signin from "./User/Signin";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Public" />} />
          <Route path="/Public" element={<Public />} />
          <Route path="/Signin" element={<Signin />} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
