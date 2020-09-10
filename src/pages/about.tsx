import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About Trish" />
    <Container>
        <Row className="custom-page-header">
            about
        </Row>
        <Row className="custom-page-paragraph">
            about
        </Row>
    </Container>
  </Layout>
)

export default AboutPage
