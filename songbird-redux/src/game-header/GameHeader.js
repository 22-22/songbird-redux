import React from 'react';
import '../index.scss';
import Menu from './Menu';
import { Logo } from './Logo';
import Score from './Score';

export const GameHeader = () => {
    return (
        <header className="header">
            <div className="header__top">
                <Logo />
                <Score />
            </div>
            <Menu />
        </header>
    )
}
