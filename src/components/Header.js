import React from 'react';
import { Link } from 'gatsby';

import * as headerStyles from './Header.module.scss';

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>
                    Maxim iloi
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/'>Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/blog'>Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/about'>About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}