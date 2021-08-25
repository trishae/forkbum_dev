import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const PlaygroundPage = (props: PageProps) => (
  <Layout>
    <SEO title="playground" />
    <Container className="page-frame">
        <Row className="page-heading">
          playground
        </Row>
        <Row className="page-body">
          under construction.... stay tuned.
        </Row>
    </Container>
  </Layout>
)

export default PlaygroundPage
