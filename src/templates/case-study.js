import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { Layout, SEO } from "../components/layout"
import { CaseStudyHeader } from "../components/elements"

export default function CaseStudy({ data }) {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <CaseStudyHeader
        title={data.mdx.frontmatter.title}
        subtitle={data.mdx.frontmatter.subtitle}
        backgroundColor={data.mdx.frontmatter.header_color}
      ></CaseStudyHeader>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        subtitle
        header_color
      }
    }
  }
`
