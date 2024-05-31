import { Mail, Person } from "@mui/icons-material";
import React from "react";
import "./topbar.scss";
function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img
              style={{ width: "50px", borderRadius: "50%" }}
              src="assets/logo_ry.png"
              alt="Logo of mine"
            />
          </a>
          <div className="itemContainer">
            <Person className="icons" />
            <span>+91-7509-7223-82</span>
          </div>
          <div className="itemContainer">
            <Mail className="icons" />
            <span>rahulyadav0296@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
