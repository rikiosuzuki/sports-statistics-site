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
    { name: "Welcome"} ,
    { name: "Games"},
    { name: "News"},
    { name: "Teams"},
    { name: "Players"},
    { name: "Rankings"},
    { name: "History"},
    { name: "About"},
  ];

  const linksToIconsMap = {
    Welcome: <FaHome color="white" />,
    Games: <MdOutlineScoreboard color="white" />,
    News: <FaRegNewspaper color="white"/>,
    Teams: <FaUsers color="white"/>,
    Players: <FaUser color="white"/>,
    Rankings: <FaMedal color="white"/>,
    History: <FaHistory color="white"/>,
    About: <FaQuestionCircle color="white"/>,
  };

  const { pathname } = useLocation();

  return (
    <div id="sidebar">
      <div className="nav-fixed d-flex">
        <div
          className="nav-bar-style"
          style={{textDecoration: "none" }}
        >
          {content.map((link, index) => (
            <Link
              key={index}
              to={`/Public/Home/${link.name}`}
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
    </div>
  );
}
export default Sidebar;
