import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const content = [
    { name: "Home"},
    { name: "Games"},
    { name: "News"},
    { name: "Teams"},
    { name: "Players"},
    { name: "Rankings"},
    { name: "History"},
    { name: "About"},
  ];
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
            to={`/Public/${link.name}`}
            className={`nav-bar-style ${
              pathname.includes(link.name) && "active"
            }`}
          >
            <span
              className={"nav-link-style"}
              style={{ textDecoration: "none" }}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
