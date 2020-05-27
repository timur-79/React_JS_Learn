import React from "react";
import classes from "./nav.module.css";
const Nav = () => {
  return (
    <nav className={`${classes.Menu} `}>
      <div>
        <a href="/profile">Профиль</a>
      </div>
      <div>
        <a href="/dialogs">Сообщения</a>
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
