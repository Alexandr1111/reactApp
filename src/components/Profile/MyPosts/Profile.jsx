import React from "react";
import s from './Profile.module.css';
import Post from "./Post/Post";


const Profile = (props) => {

    //Создаем ссылку на какой-то элемент
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;//Берем значение поля textarea
        //alert(text);
        props.dispatch({ type : 'ADD-POST', postMessage:text });
        newPostElement.current.value = '';
    }

    let postsElements = props.state.messagesData.map( m => <Post message={m.message} id={m.id} />);

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