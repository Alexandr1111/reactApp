import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {addPost} from "./redux/state";

export let rerenderTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={addPost} />
        </BrowserRouter>, document.getElementById('root')
    );

}