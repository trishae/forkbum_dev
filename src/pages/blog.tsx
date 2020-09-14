import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPost from "../components/blogPost"

import './../styles/page.css'

//const BlogPage = (props: PageProps, {data}) => (
const Blog = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <Container>
        <Row className="custom-page-header">
            blog
        </Row>
        {
                data.allMarkdownRemark.edges.map(post => {
                    const { title, author, date, description, path } = post.node.frontmatter;
            
                    return (
                        <BlogPost
                            title={title}
                            author={author}
                            date={date}
                            description={description}
                            path={path}
                        />
                    )
                })
            }
    </Container>
  </Layout>
)

export default Blog

export const AllBlogsQuery = graphql`
    query SiteQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        author
                        date
                        description
                        path
                        title
                    }
                }
            }
        }
    }
`
