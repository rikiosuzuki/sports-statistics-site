import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import {
  FaHome,
  FaUsers,
  FaUser
} from "react-icons/fa";

function UserSidebar() {
  const content = [
    { name: "Activity"} ,
    { name: "Profile"},
    { name: "AllUsers"},
  ];

  const linksToIconsMap = {
    Activity: <FaHome className="text-muted" />,
    Profile: <FaUser className="text-muted" />,
    AllUsers: <FaUsers className="text-muted" />
  };

  const { pathname } = useLocation();

  return (
    <div className="nav-fixed">
      <div
        className="list-group"
        style={{ width: 100, textDecoration: "none" }}
      >
        {content.map((link, index) => (
          <Link
            key={index}
            to={`/Profile/User/${link.name}`}
            className={`nav-bar-style ${
              pathname.includes(link.name) && "active"
            }`}
          >
              {linksToIconsMap[link.name]}
              {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default UserSidebar;
