import React from "react";
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {addPost} from "./redux/state";

let rerenderTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={addPost} />
        </BrowserRouter>, document.getElementById('root')
    );

}


rerenderTree();//Нужен для первоначального рендера проекта просто

subscribe(rerenderTree);//Обсервер обновляет проект когда тот изменяется