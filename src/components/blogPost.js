import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row } from 'react-bootstrap'

// import 'bootstrap/scss/_nav.scss'
import './../styles/blogPost.css'

const BlogPost = ({ title, author, date, description, path }) => (
    <Container className="blog-post">
        <Link to={path} className="blog-post-link" style={{textDecoration:'none'}}>
        <Row className="blog-post-title">
            { title }
        </Row>
        </Link>
        <Row className="blog-post-description">
            { description }
        </Row>
        <Row className="blog-post-misc">
            posted { date }
        </Row>
        {/* <Link to={ path }>Read more</Link> */}
    </Container>
)

// BlogPost.propTypes = {
//   siteTitle: PropTypes.string,
// }

// BlogPost.defaultProps = {
//   siteTitle: ``,
// }

export default BlogPost
