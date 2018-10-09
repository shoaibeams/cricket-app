import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const logo = () => {
        return (
            <Link to=""></Link>
        );
    }

    return (
        <header className={style.header}>
            <div className={style.headerOpt}>
                {logo()}
            </div>
        </header >
    );
};

export default Header;