import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const ContactPage = (props: PageProps) => (
  <Layout>
    <SEO title="Contact" />
    <Container className="page-frame">
        <Row className="page-heading">
            contact
        </Row>
        <Row className="page-body">
            contact
        </Row>
    </Container>
  </Layout>
)

export default ContactPage
