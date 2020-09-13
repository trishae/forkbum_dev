import React from "react"

import Sketch from "../components/sketch"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="sketch-container">
      <Sketch />
    </div>
  </Layout>
)

export default IndexPage
