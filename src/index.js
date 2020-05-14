import React from "react";
import { render } from "react-dom";
import App from "./components/App";

let dialogsData = [
    {id:1, name:'Dima'},
    {id:2, name:'Julia'},
    {id:3, name:'Sveta'},
    {id:4, name:'Kate'}
]

let messagesData = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you?'},
    {id:3, message:'YO!'}
]

render(<App dialogsData={ dialogsData } messagesData={ messagesData } />, document.getElementById('root'));