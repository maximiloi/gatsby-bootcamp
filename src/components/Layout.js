import React from 'react';

import '../css/index.scss';
import * as layoutStyles from './Layout.module.scss';

import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}