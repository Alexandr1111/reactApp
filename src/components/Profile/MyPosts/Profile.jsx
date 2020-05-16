import React from "react";
import s from './Profile.module.css';
import Post from "./Post/Post";

const Profile = (props) => {

    //Создаем ссылку на какой-то элемент
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;//Берем значение поля textarea
        //alert(text);
        props.addPost(text);
    }


    return(
        <div>
            My posts
            <div className={s.posts}>
                <Post message='It is my first post' likes='15' />
                <Post message='Hi, how are you?' likes='20' />
                <Post />
                <Post />
            </div>
            <div>
                {/*Говорим что ссылка привязвается сюда*/}
                <textarea ref={ newPostElement }></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        )
}

export default Profile;