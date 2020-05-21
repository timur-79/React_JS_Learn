import React from "react";
import classes from "./nav.module.css";
const Nav = () => {
  return (
    <nav className={`${classes.Menu} `}>
      <div>
        <a href="_blanc">First</a>
      </div>
      <div>
        <a href="_blanc">Second</a>
      </div>
      <div>
        <a href="_blanc">Third</a>
      </div>
      <div>
        <a href="_blanc">Fourth</a>
      </div>
    </nav>
  );
};
export default Nav;
