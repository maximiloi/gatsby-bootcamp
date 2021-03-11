import React from 'react';
import { Link } from 'gatsby';

import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <h1>
                <Link className="title" to='/'>
                    Maxim iloi
                </Link>
            </h1>
            <nav>
                <ul className="nav-list">
                    <li><Link className="nav-item" activeClassName="nav-item-active" to='/'>Home</Link></li>
                    <li><Link className="nav-item" activeClassName="nav-item-active" to='/blog'>Blog</Link></li>
                    <li><Link className="nav-item" activeClassName="nav-item-active" to='/about'>About</Link></li>
                    <li><Link className="nav-item" activeClassName="nav-item-active" to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}