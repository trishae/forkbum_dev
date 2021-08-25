import React from "react";
import { Container, Row } from 'react-bootstrap'
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import './../styles/page.css'

export default function Template({ data }) {
    const post = data.markdownRemark;
    const { title, author, date } = post.frontmatter;
    
    return (
        <Layout>
            <Container className="page-frame">
                <Link to="/blog" style={{textDecoration:'none'}}>back to blogs</Link>
                <Row className="page-heading">
                    {title}
                </Row>
                <Row className="page-post-datetimestamp">
                    posted on {date}
                </Row>
                <Row className="page-body" dangerouslySetInnerHTML={{ __html: post.html }}>
                </Row>
            </Container>
        </Layout>
    )
};

export const blogPostQuery = graphql`
    query BlogPostQuery($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            frontmatter {
                author
                date
                title
                path
            }
            html
        }
    }
`
