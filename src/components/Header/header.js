import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './sideNav/sideNav';
const Header = (props) => {

    const navBars = () => {
        return (
            <div className={style.bars}>
                <FontAwesome name="bars"
                    onClick={props.onOpenNav}
                    style={{
                        color: '#dfdfdf',
                        padding: '10px',
                        cursor: 'pointer'
                    }}
                />
            </div>)
    }

    const logo = () => {
        return (
            <Link to="/" className={style.logo}>
                <img src="images/logo.png" alt="logo" />
            </Link>
        );
    }

    return (
        < header className={style.header} >
            <SideNav {...props}
                k />
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header >
    );
};

export default Header;