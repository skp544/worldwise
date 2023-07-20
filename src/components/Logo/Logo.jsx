import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      {" "}
      <img src={logo} alt="Worldwise logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
