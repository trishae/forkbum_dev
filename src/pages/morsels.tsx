import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const MorselsPage = (props: PageProps) => (
  <Layout>
    <SEO title="Morsels" />
    <Container className="page-frame">
        <Row className="page-heading">
            morsels
        </Row>
        <Row className="page-body">
            morsels
        </Row>
    </Container>
  </Layout>
)

export default MorselsPage
