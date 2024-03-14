import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
        to="/"
      >
        <div className={styles.item}>Profile</div>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
        to="/messages"
      >
        <div className={styles.item}>Messages</div>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
        to="/music"
      >
        <div className={styles.item}>Music</div>
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
        to="/settings"
      >
        <div className={styles.item}>Settings</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
