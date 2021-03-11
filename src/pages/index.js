import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>i'm Maksim, a web-developer living in Saint-Petersburg in Russia</h2>
            <p>Need a developer <Link to='/contact'>Contact me..</Link></p>
        </Layout>
    )
}