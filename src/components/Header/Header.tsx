import React from "react";
import logo from "./img/UKAD_logo.svg";
import s from './Header.module.css';

const Header = () => {
    return <header className={s.navWrap}>
        <ul className={s.menu}>
            <a className={s.logoLink} href="/">
                <img className={s.logoImg} src={logo} alt='Ukad'/>
            </a>
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
        </ul>
    </header>
}

export default Header;