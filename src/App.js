import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Signin from "./User/Signin";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
