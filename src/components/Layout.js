import React from 'react';

import '../css/index.scss';
import './Layout.scss';

import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <div className='container'>
            <div className='content'>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}