import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
        </nav>
    )
}

export default NavBar;