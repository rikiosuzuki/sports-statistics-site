import React from "react";
import Activity from "../activity";
import Account from "../account";
import UserTable from "../table";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function UserPage() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/Activity" />}
        />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/Profile" element={<Account />} />
        <Route path="/AllUsers" element={<UserTable />} />
      </Routes>
    </div>
  );
}

export default UserPage;
