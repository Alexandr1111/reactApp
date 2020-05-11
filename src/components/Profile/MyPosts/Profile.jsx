import React from "react";
import s from './Profile.module.css';
import Post from "./Post/Post";

const Profile = () => {
    return(
        <div>
            My posts
            <div className={s.posts}>
                <Post message='It is my first post' likes='15' />
                <Post message='Hi, how are you?' likes='20' />
                <Post />
                <Post />
            </div>
        </div>
        )
}

export default Profile;