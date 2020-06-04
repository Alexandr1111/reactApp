import React from "react";
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/MyPosts/Profile";
import { Route } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Music from "./Music/Music";

//Компонент рендярящий компонент
//let HightOrderComponent = () => <Profile />

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>

                <NavBar state={props.state} />

                <div className='app-wrapper-content'>
                    {/* Можем сделать чтобы вызвался компонент в виде функции для передачи пропсов */}
                    {/*Получаем по пропсам данные*/}
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state} dispatch={props.dispatch} />} />
                    {/* или так */}
                    <Route path='/profile' render={ () => <Profile state={props.state} dispatch={props.dispatch} />} />
                    <Route path='/music' render={ () => <Music /> } />
                </div>

            </div>
        </BrowserRouter>
     )
}

            export default App;