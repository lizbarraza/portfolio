import React from "react"
import { Link, graphql } from "gatsby"

import { Layout, SEO } from "../components/layout"

const CaseStudyLink = ({ title, path }) => <Link to={path}>{title}</Link>

const CaseStudies = ({ data }) => (
  <Layout>
    <SEO title="Case Studies" />
    <h2>Case studies</h2>

    <ol>
      {data.allMdx.edges.map(({ node }) => (
        <li key={node.id}>
          <CaseStudyLink
            title={node.frontmatter.title}
            path={`/case-studies${node.fields.slug}`}
          />
        </li>
      ))}
    </ol>
  </Layout>
)

export default CaseStudies

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
