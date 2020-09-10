import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const MorselsPage = (props: PageProps) => (
  <Layout>
    <SEO title="Morsels" />
    <Container>
        <Row className="custom-page-header">
            morsels
        </Row>
        <Row className="custom-page-paragraph">
            morsels
        </Row>
    </Container>
  </Layout>
)

export default MorselsPage
