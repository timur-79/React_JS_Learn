import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.App_header}>
      <img
        src="https://placeimg.com/320/240/tech"
        alt="Noupe"
        className={classes.App_logo}
      />
      <div className={classes.Header_text}>Социальная Сеть</div>
    </header>
  );
};
export default Header;
