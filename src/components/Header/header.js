import React from 'react';
import style from './Header/header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const logo(){
        return (
            <Link></Link>
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