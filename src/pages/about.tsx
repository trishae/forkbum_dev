import React from "react"
import { PageProps, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './../styles/page.css'

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="about" />
    <Container className="page-frame">
        <Row className="page-heading">
            about
        </Row>
        <Row className="page-body">
            I'm an engineer and technologist based in the US.
        </Row>
    </Container>
  </Layout>
)

export default AboutPage

// export default function AboutPage({ data }) {
//     const post = data.markdownRemark;
//     const ( path, title ) = post.frontmatter;

//     return (
//         <Layout>
//             <SEO title="About Trish" />
//             <Container className="page-frame">
//                 <Row className="page-heading">
//                     about
//                 </Row>
//                 <Row className="page-body">
//                     I'm an engineer and technologist based in the US.
//                 </Row>
//                 <Row className="page-body">
//                     Currently in my "day job," I help ensure lab and client environments are secure against various requirements.
//                 </Row>
//             </Container>
//         </Layout>
//     )
// }

// export const aboutPageQuery = graphql`
// query AboutPageQuery($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path }}) {
//         frontmatter {
//             author
//             date
//             title
//             path
//         }
//         html
//     }
// }
// `

// export default function Template({ data }) {
//     const post = data.markdownRemark;
//     const { title, author, date } = post.frontmatter;