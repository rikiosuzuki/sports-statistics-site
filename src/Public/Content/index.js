import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";

function Content() {
  return (
    <div>
      <div className="row">
        <Routes>
          <Route path="/" element={<Navigate to="/Public/Home" />} />
          <Route path="/Public/Home" element={<Home />} />
          <Route path="/Games" element={<Home />} />
          <Route path="News" element={<Home />} />
          <Route path="Teams" element={<Home />} />
          <Route path="Players" element={<Home />} />
          <Route path="Rankings" element={<Home />} />
          <Route path="History" element={<Home />} />
          <Route path="About" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
export default Content;
