import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import * as blogStyles from './blog.module.sass';

export default function BlogPage() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title 
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <h2>Blog</h2>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}