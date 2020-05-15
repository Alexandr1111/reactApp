import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const Mes = (props) => {
    return(
        <div>{ props.name }</div>
    )
}

const NavBar = (props) => {


    let friendsElements = props.state.friendsData.map( d => <Mes name={d.name} /> );

    return(
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={`${s.item} ${s.friendsTitle}`}><a>Friends</a></div>
            <div className={`${s.item} ${s.friend}`}>{ friendsElements[0] }</div>
            <div className={`${s.item} ${s.friend}`}>{ friendsElements[1] }</div>
            <div className={`${s.item} ${s.friend}`}>{ friendsElements[2] }</div>
        </nav>
    )
}

export default NavBar;