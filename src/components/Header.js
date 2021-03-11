import React from 'react';
import { Link } from 'gatsby';

import myStyle from './Header.module.scss';

export default function Header() {
    return (
        <header>
            <h1>Hello!</h1>
            <nav>
                <ul>
                    <li><Link className={myStyle.link} to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}