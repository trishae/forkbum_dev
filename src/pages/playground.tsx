import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const PlaygroundPage = (props: PageProps) => (
  <Layout>
    <SEO title="Playground" />
    <Container>
        <Row className="custom-page-header">
            playground
        </Row>
        <Row className="custom-page-paragraph">
        playground
        </Row>
    </Container>
  </Layout>
)

export default PlaygroundPage
