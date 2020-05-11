import React from "react";
import logoName from "../../logo.png";
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>{/*ХЭДЕР*/}
            <img src={logoName} />
        </header>
    )
}

export default Header;