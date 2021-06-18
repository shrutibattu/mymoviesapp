import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className={styles.navBar}>
        <li className={styles.navItem}>
          <Link to="/home">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
