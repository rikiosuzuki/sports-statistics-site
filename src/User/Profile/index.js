import React from "react";
import UserHeading from "./UserHeading";
import UserSidebar from "./UserSidebar";
import UserPage from "./UserPage";

function User() {
  return (
    <div className="row">
      <UserHeading />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <UserSidebar />
          </div>
          <div className="col-10">
            <UserPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;