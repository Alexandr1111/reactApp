import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import store from "./redux/state";

let rerenderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state = { store.getState() } addPost = { store.addPost.bind(store) } />
        </BrowserRouter>, document.getElementById('root')
    );

}


rerenderTree(store.getState());//Нужен для первоначального рендера проекта просто

store.subscribe(rerenderTree);//Обсервер обновляет проект когда тот изменяется