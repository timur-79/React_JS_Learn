import React from "react";
import classes from "./post.module.css";

const Post = (props) => {

  return (
      <div className={classes.message_line}>
               <img src="https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png"
               alt="Avatar"/>
               <div>{props.message}</div>
      </div>

  );
};
export default Post;
