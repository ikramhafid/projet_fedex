import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={style.header}>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to={"/"}>Homepage</Link>
        </li>
        <li>
          <Link to={"/ordinateurs"}>Ordinateurs</Link>
        </li>
        <li>
          <Link to={"/imprimantes"}>Imprimantes</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
