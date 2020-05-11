import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    console.log(props.message);
    return(
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg" alt=""/>
            {props.message}
            <div>
                <span>likes: {props.likes}</span>
            </div>
        </div>
    )
}

export default Post;