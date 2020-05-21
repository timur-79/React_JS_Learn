import React from "react";
import classes from "./myposts.module.css";
import Post from "./Post/post";

const Myposts = () => {
  return (

      <div className={classes.box1}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add Post</button>
        <button>Remove</button>
        <Post message={`Hello world`}/>
        <Post message={`It's a magic`}/>

      </div>


  );
};
export default Myposts;
