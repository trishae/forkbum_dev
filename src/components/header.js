import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'

// import 'bootstrap/scss/_nav.scss'
import './../styles/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/" class="custom-nav-brand">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/about" className="nav-link custom-nav-item" activeClassName="active">about</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/blog" className="nav-link custom-nav-item" activeClassName="active">blog</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/morsels" className="nav-link custom-nav-item" activeClassName="active">morsels</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/playground" className="nav-link custom-nav-item" activeClassName="active">playground</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/contact" className="nav-link custom-nav-item" activeClassName="active">contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
