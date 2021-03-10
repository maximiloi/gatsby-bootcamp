import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <h2>i'm Maksim, a web-developer living in Saint-Petersburg in Russia</h2>
            <p>Need a developer <a href='/contact'>Contact me</a></p>
            <p>Need a developer <Link to='/contact'>Contact me..</Link></p>
        </Layout>
    )
}