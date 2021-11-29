import React from "react";
import logo from "./img/UKAD_logo.svg";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={s.navWrap}>
        <ul className={s.menu}>
            <NavLink className={s.logoLink} to="/">
                <img className={s.logoImg} src={logo} alt='Ukad'/></NavLink>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
        </ul>
    </header>
}

export default Header;