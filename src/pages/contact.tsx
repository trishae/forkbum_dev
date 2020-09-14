import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const ContactPage = (props: PageProps) => (
  <Layout>
    <SEO title="Contact" />
    <Container>
        <Row className="custom-page-header">
            contact
        </Row>
        <Row className="custom-page-paragraph">
            contact
        </Row>
    </Container>
  </Layout>
)

export default ContactPage
