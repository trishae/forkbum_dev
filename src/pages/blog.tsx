import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const BlogPage = (props: PageProps) => (
  <Layout>
    <SEO title="Blog" />
    <Container>
        <Row className="custom-page-header">
            blog
        </Row>
        <Row className="custom-page-paragraph">
            blog
        </Row>
    </Container>
  </Layout>
)

export default BlogPage
