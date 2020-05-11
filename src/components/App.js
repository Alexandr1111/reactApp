import React from "react";
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import MyPosts from "./Profile/MyPosts/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/MyPosts/Profile";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import Music from "./Music/Music";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>

                <NavBar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/music' component={Music} />
                </div>

            </div>
        </BrowserRouter>
     )
}

            export default App;