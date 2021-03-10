import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
    return (
        <header>
            <h1>Hello!</h1>
            <nav>
                <ul><li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}