import React from "react";
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/MyPosts/Profile";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import Music from "./Music/Music";

//Компонент рендярящий компонент
let HightOrderComponent = () => <Profile />

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>

                <NavBar/>

                <div className='app-wrapper-content'>
                    {/* Можем сделать чтобы вызвался компонент в виде функции для передачи пропсов */}
                    <Route path='/dialogs' render={ () => <Dialogs />} />
                    {/* или так */}
                    <Route path='/profile' component={ HightOrderComponent } />
                    <Route path='/music' render={ () => <Music /> } />
                </div>

            </div>
        </BrowserRouter>
     )
}

            export default App;