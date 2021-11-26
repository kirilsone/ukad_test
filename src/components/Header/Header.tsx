import React from "react";
import logo from "./img/UKAD_logo.svg";
import s from './Header.module.css';

const Header = () => {
    return <header className={s.navWrap}>
        <ul className={s.menu}>
            <a className={s.logoLink} href="/home">
                <img className={s.logoImg} src={logo} alt='Ukad'/></a>
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Products</a></li>
        </ul>
    </header>
}

export default Header;