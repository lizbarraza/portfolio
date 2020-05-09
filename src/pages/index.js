import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hi there, I am a</p>
    <h2>UX Designer</h2>
    <p>
      {" "}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor
      sit amet consectetur.
    </p>

    <button>Contact me</button>
  </Layout>
)

export default IndexPage
