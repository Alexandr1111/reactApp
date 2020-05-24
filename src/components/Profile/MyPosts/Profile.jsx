import React from "react";
import s from './Profile.module.css';
import Post from "./Post/Post";
import{ addPostActionCreator } from "../../../redux/ProfileReducer/Profile_reducer";

const Profile = (props) => {

    //Создаем ссылку на какой-то элемент
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;//Берем значение поля textarea
        //props.dispatch({ type : 'ADD-POST', postMessage:text });
        let action = addPostActionCreator(text);
        props.dispatch(action);
        newPostElement.current.value = '';
    }

    let postsElements = props.state.profilePostsData.map( m => <Post message={m.message} likes={m.likes} />);

    return(
        <div>
            My posts
            <div className={s.posts}>

                { postsElements }

            </div>
            <div>
                {/*Говорим что ссылка привязвается сюда*/}
                <textarea ref={newPostElement}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        )
}

export default Profile;