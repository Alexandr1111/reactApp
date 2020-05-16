import ReactDOM from 'react-dom';
import React from "react";
import App from "./components/App";
import state, {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

//addPost('POST FROM ADD POST()');

ReactDOM.render(
    <BrowserRouter>
        <App state={ state } addPost={addPost} />
    </BrowserRouter>, document.getElementById('root')
);