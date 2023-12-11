import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import {
  FaHome,
  FaRegNewspaper,
  FaUsers,
  FaUser,
  FaMedal,
  FaHistory,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdOutlineScoreboard } from "react-icons/md";

function Sidebar() {
  const content = [
    { name: "Home"} ,
    { name: "Games"},
    { name: "News"},
    { name: "Teams"},
    { name: "Players"},
    { name: "Rankings"},
    { name: "History"},
    { name: "About"},
  ];

  const linksToIconsMap = {
    Home: <FaHome className="text-muted" />,
    Games: <MdOutlineScoreboard className="text-muted" />,
    News: <FaRegNewspaper className="text-muted" />,
    Teams: <FaUsers className="text-muted" />,
    Players: <FaUser className="text-muted" />,
    Rankings: <FaMedal className="text-muted" />,
    History: <FaHistory className="text-muted" />,
    About: <FaQuestionCircle className="text-muted" />,
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
            to={`/Public/${link.name}`}
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
export default Sidebar;
